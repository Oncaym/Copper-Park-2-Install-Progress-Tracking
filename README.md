# CP2 Installation Tracker

Cloud-synced installation progress dashboard for Cooper Park 2.
Multi-user, real-time, login-protected.

## Quick start

See **[SETUP.md](./SETUP.md)** for the full guide. The short version:

1. Create a Firebase project (free), enable Email Auth + Realtime DB
2. Paste keys into `firebase-config.js`
3. Paste `firebase-database-rules.json` into Firebase → Realtime DB → Rules → Publish
4. Add team accounts in Firebase → Authentication → Users
5. Deploy this folder to Vercel/Netlify

## Files

| File | Purpose |
|---|---|
| `index.html` | The dashboard |
| `cloud-sync.js` | Sync engine — don't edit |
| `firebase-config.js` | **You fill this in** with your Firebase keys |
| `firebase-database-rules.json` | Paste into Firebase Console |
| `vercel.json` | Vercel deployment config |
| `SETUP.md` | Full setup walkthrough |

## Deploy to Vercel

```bash
# After pushing this folder to GitHub:
# 1. vercel.com → New Project → Import this repo
# 2. Framework preset: Other
# 3. Deploy
```

## Deploy to Netlify (no GitHub needed)

Drag this folder onto https://app.netlify.com/drop

## Tech

- Vanilla HTML/CSS/JS, no build step
- Firebase Auth (email/password) + Realtime Database
- Chart.js (inlined)
- Trilingual: English / 中文 / 한국어
