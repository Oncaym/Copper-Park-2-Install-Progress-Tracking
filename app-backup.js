/* app-backup.js — IndexedDB snapshot backup.
   Patches window.saveState so every save stores a local snapshot first.
   Console API (DevTools):
     window.backups.list()         → show snapshots in console table
     window.backups.restore(id)    → restore a snapshot (confirms first)
     window.backups.clear()        → wipe all local snapshots
     window.backups.snapshot(state, 'desc')  → manual snapshot
   Keeps the most recent 20 snapshots per browser. Independent of Firebase —
   even if a buggy code push wipes Firebase, you can roll back from here. */
(function () {
  const DB_NAME = 'cp2-backup';
  const STORE   = 'snapshots';
  const KEEP    = 20;

  function openDb() {
    return new Promise(function (resolve, reject) {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function (e) {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
        }
      };
      req.onsuccess = function (e) { resolve(e.target.result); };
      req.onerror   = function (e) { reject(e.target.error); };
    });
  }

  function snapshot(state, desc) {
    if (!state) return Promise.resolve();
    return openDb().then(function (db) {
      return new Promise(function (resolve) {
        const tx = db.transaction(STORE, 'readwrite');
        const store = tx.objectStore(STORE);
        store.add({
          ts: Date.now(),
          desc: desc || '',
          logCount:   (state.log   || []).length,
          unitsCount: (state.units || []).length,
          state: JSON.parse(JSON.stringify(state))
        });
        // Trim oldest beyond KEEP
        const keyReq = store.getAllKeys();
        keyReq.onsuccess = function () {
          const all = keyReq.result;
          if (all.length > KEEP) {
            all.slice(0, all.length - KEEP).forEach(function (k) { store.delete(k); });
          }
        };
        tx.oncomplete = function () { resolve(); };
        tx.onerror    = function () { resolve(); };
      });
    }).catch(function (e) { console.warn('[backup] snapshot failed', e); });
  }

  function list() {
    return openDb().then(function (db) {
      return new Promise(function (resolve) {
        const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll();
        req.onsuccess = function () {
          const rows = (req.result || []).sort(function (a, b) { return b.ts - a.ts; });
          console.table(rows.map(function (r) {
            return {
              id:    r.id,
              time:  new Date(r.ts).toLocaleString(),
              desc:  r.desc,
              units: r.unitsCount,
              logs:  r.logCount
            };
          }));
          resolve(rows);
        };
      });
    });
  }

  function restore(id) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        const req = db.transaction(STORE, 'readonly').objectStore(STORE).get(id);
        req.onsuccess = function () {
          const row = req.result;
          if (!row) { console.error('[backup] no snapshot with id', id); reject(); return; }
          const msg = 'Restore snapshot from ' + new Date(row.ts).toLocaleString() +
                     '?\nunits=' + row.unitsCount + ', logs=' + row.logCount +
                     '\nThis OVERWRITES current state.';
          if (!confirm(msg)) { resolve(false); return; }
          window.state = row.state;
          if (typeof window.render    === 'function') window.render();
          if (typeof window.saveState === 'function') window.saveState(true, 'restored from backup');
          resolve(true);
        };
      });
    });
  }

  function clearAll() {
    if (!confirm('Delete ALL local snapshots? (Firebase data is untouched.)')) return;
    return openDb().then(function (db) {
      db.transaction(STORE, 'readwrite').objectStore(STORE).clear();
      console.log('[backup] cleared');
    });
  }

  // Patch saveState as soon as it appears on window.
  function patch() {
    if (typeof window.saveState !== 'function') { setTimeout(patch, 200); return; }
    if (window.saveState.__backupPatched) return;
    const orig = window.saveState;
    window.saveState = function (showToast, description) {
      try { snapshot(window.state, description); } catch (e) {}
      return orig.apply(this, arguments);
    };
    window.saveState.__backupPatched = true;
    console.log('[backup] saveState patched · API: window.backups.list() / .restore(id) / .clear()');
  }
  patch();

  window.backups = { list: list, restore: restore, clear: clearAll, snapshot: snapshot };
})();
