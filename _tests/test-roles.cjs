/* F-058 — who gets what, once "cannot write" stops meaning "is the GC".
   node _tests/test-roles.cjs        (needs: npm i jsdom)

   Covers the four cases that matter, including the deliberate fail-open window
   before /gcList is created in the Firebase Console. */
const fs = require('fs'), path = require('path');
/* The other suites in here resolve jsdom out of /tmp; accept either, so this runs
   whether you installed it beside the repo or the way the rest of _tests/ expects. */
let JSDOM;
for (const where of ['jsdom', '/tmp/node_modules/jsdom']) {
  try { ({ JSDOM } = require(where)); break; } catch (e) {}
}
if (!JSDOM) { console.error('needs jsdom:  (cd /tmp && npm i jsdom)'); process.exit(2); }

const SRC = fs.readFileSync(path.resolve(__dirname, '..', 'cloud-sync.js'), 'utf8');
const ME = 'someone@advfacade.com';

/* Four worlds. `canWrite` stands in for being on /allowlist — the app only ever
   learns it from a PERMISSION_DENIED, which is what the stub reproduces. */
const WORLDS = {
  editor:     { canWrite: true,  gcList: {} },
  gc:         { canWrite: false, gcList: { 'someone@advfacade,com': true } },
  viewer:     { canWrite: false, gcList: { 'thegc@broadwaybuilder,com': true } },
  prerollout: { canWrite: false, gcList: null },          // node not created yet
};

function boot(world, url) {
  const dom = new JSDOM('<!DOCTYPE html><body><div class="header-actions"></div></body>',
    { url: url || 'https://tracker.example.com/', runScripts: 'outside-only' });
  const w = dom.window;
  w.PROJECT = { name: 'CP2', code: 'CP2' };
  w.state = { units: [] };
  const warnings = [];
  /* The stub answers PERMISSION_DENIED on purpose, and the code under test logs it —
     that noise is the test working, so keep it out of the report. */
  w.console = Object.assign({}, console, {
    warn: (...a) => warnings.push(a.join(' ')), error(){}, debug(){}, info(){} });

  const denied = () => Object.assign(new Error('permission denied'), { code: 'PERMISSION_DENIED' });
  const pushed = [];
  let cb = null, user = null;
  const auth = {
    get currentUser(){ return user; },
    onAuthStateChanged(f){ cb = f; },
    signOut(){ user = null; if (cb) cb(null); return Promise.resolve(); },
    signInWithEmailAndPassword(){ return Promise.resolve(); },
    sendPasswordResetEmail(){ return Promise.resolve(); },
  };
  const ref = (p) => ({
    on(evt, ok, err) {
      if (p === '.info/connected') return void setTimeout(() => ok({ val: () => true }), 0);
      if (p === 'state' && !world.canWrite) return void setTimeout(() => err && err(denied()), 0);
      setTimeout(() => ok({ val: () => null }), 0);
    },
    off(){},
    once(){
      if (p === 'gcList')
        return Promise.resolve({ exists: () => world.gcList !== null, val: () => world.gcList });
      return Promise.resolve({ exists: () => false, val: () => null });
    },
    push(rec){ pushed.push({ path: p, rec }); return Promise.resolve({ key: 'k1' }); },
    set(){ return world.canWrite ? Promise.resolve() : Promise.reject(denied()); },
    update(){ return Promise.resolve(); },
    onDisconnect(){ return { remove(){} }; },
  });
  w.firebase = {
    initializeApp(){}, apps: [],
    auth: Object.assign(() => auth, { EmailAuthProvider: { credential: (e, p) => ({ e, p }) } }),
    database: Object.assign(() => ({ ref }), { ServerValue: { TIMESTAMP: 1 } }),
  };

  w.eval(SRC);
  w.CloudSync.init({ apiKey: 'AIzaTestKey', databaseURL: 'https://x.firebaseio.com' });
  user = { uid: 'u1', email: ME };
  if (cb) cb(user);
  return { w, pushed, warnings, signOut: () => auth.signOut() };
}

const settle = () => new Promise(r => setTimeout(r, 30));
let fails = 0;
const ck = (n, c, x) => { if (!c) fails++; console.log((c ? 'PASS  ' : 'FAIL  ') + n + (x !== undefined ? '   [' + x + ']' : '')); };

(async () => {
  {
    const { w } = boot(WORLDS.editor); await settle();
    ck('editor: role is editor', w.CloudSync.role() === 'editor', w.CloudSync.role());
    ck('editor: not the GC', w.CloudSync.isGC() === false);
    ck('editor: no wall', !w.document.getElementById('cs-noaccess'));
  }
  {
    const { w, pushed } = boot(WORLDS.gc); await settle();
    ck('gc: role is gc', w.CloudSync.role() === 'gc', w.CloudSync.role());
    ck('gc: read-only', w.CloudSync.isReadOnly() === true);
    ck('gc: no wall — the GC belongs here', !w.document.getElementById('cs-noaccess'));
    await w.CloudSync.submitGcItem({ text: 'hi' }); await settle();
    const rec = (pushed.find(p => p.path === 'gcItems') || {}).rec;
    ck('gc: item stamped source=gc', rec && rec.source === 'gc', rec && rec.source);
  }
  {
    /* Someone with an account who is simply not on /allowlist. allowlist is EDITOR
       permission — this person is one of us without edit rights, so they get the
       ordinary internal board, read-only. Not the GC's view, and not a wall. */
    const { w, pushed } = boot(WORLDS.viewer); await settle();
    ck('viewer: role is viewer', w.CloudSync.role() === 'viewer', w.CloudSync.role());
    ck('viewer: NOT treated as the GC  ← the 2026-09-17 bug', w.CloudSync.isGC() === false);
    ck('viewer: cannot write', w.CloudSync.isReadOnly() === true);
    ck('viewer: is NOT walled off', !w.document.getElementById('cs-noaccess'));
    ck('viewer: no wall markup exists at all anywhere',
       !/noaccess/i.test(w.document.body.innerHTML));
    await w.CloudSync.submitGcItem({ text: 'hi' }); await settle();
    const rec = (pushed.find(p => p.path === 'gcItems') || {}).rec;
    ck('viewer: cannot stamp an item as the GC', rec && rec.source === 'af', rec && rec.source);
  }
  {
    /* app.js keys its two behaviours off these exact two calls — _noEdit() -> isReadOnly,
       _isGC() -> isGC. If either disappears the split silently collapses back into the bug. */
    const { w } = boot(WORLDS.editor); await settle();
    ck('the API app.js relies on is present',
       typeof w.CloudSync.isReadOnly === 'function' && typeof w.CloudSync.isGC === 'function');
  }
  {
    const { w, warnings } = boot(WORLDS.prerollout); await settle();
    ck('before /gcList exists: old behaviour kept', w.CloudSync.role() === 'gc', w.CloudSync.role());
    ck('before /gcList exists: nobody locked out', !w.document.getElementById('cs-noaccess'));
    ck('before /gcList exists: says so in the console',
       warnings.join(' ').includes('/gcList does not exist yet'));
  }
  {
    // The hub's Open ↗ handoff.
    const { w } = boot(WORLDS.editor, 'https://tracker.example.com/#u=leosun%40advfacade.com');
    await settle();
    const em = w.document.getElementById('cs-email');
    ck('hub handoff: sign-in box pre-filled', em && em.value === 'leosun@advfacade.com', em && em.value);
    ck('hub handoff: email stripped from the address bar', w.location.hash === '', w.location.href);
  }

  console.log('');
  console.log(fails ? fails + ' FAILED' : 'all passed');
  process.exit(fails ? 1 : 0);
})();
