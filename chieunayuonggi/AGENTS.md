# Chiều Nay Uống Gì — frontend

- This is a theme fork of the Trưa Nay Ăn Gì static frontend (see ATTRIBUTION.md), retargeted at Vietnamese afternoon drinks instead of lunch dishes.
- Standalone static frontend. No backend, OAuth/login, production API clients, cloud credentials or infrastructure state.
- Use pnpm, compatible current stable packages and a committed lockfile. Build locally; no CI pipeline for MVP.
- Store preferences in bounded, versioned, host-only cookies. Validate imported/untrusted values and handle unavailable/full storage visibly.
- Counter is browser-local, never label it a global/community total.
- No drink photos are bundled — drink cards render a category icon (lucide-react) instead of a sprite-sheet photo. If you add real photography later, reintroduce an image atlas similar to the original food app and update `DrinkImage` in `src/app/page.tsx`.
- Retain source and asset attribution. Historical code does not define the current deployment.
- This app is for local use: bind dev/preview to loopback, use cookie-only automatic persistence, and do not add login, account screens, backend endpoints, database clients or hosted-demo deployment. Only user-clicked external links may leave the local app; background asset loads stay local.
