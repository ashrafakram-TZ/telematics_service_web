# CLAUDE.md — Telematics Web

Internal console for the Telematics Service: dashboard, devices, device detail with history, MQTT console. Separate from the School admin web (`C:/Users/DELL/Telamatics_web`), which must never get these screens back.

- API: the Telematics Service (`C:/Users/DELL/telematics-service`, `/api/v1`). The Vite proxy adds `X-Api-Key` from `TELEMATICS_API_KEY`; never expose the key with a `VITE_` prefix or in source.
- Commands: `npm run start:local:win` (port 5174), `npx tsc -b`, `npx eslint src`, `npx vite build`.
- No code comments. Every dropdown is searchable or a neat custom control, never a native select. Pages must work on phone, tablet and desktop.
- Feature code lives in `src/features/<name>/` (api.ts, components/, pages/). Shared UI in `src/components`.
