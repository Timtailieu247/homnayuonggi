# Chiều Nay Uống Gì 🧋

CS-style afternoon-drink roulette — open a case, pick a drink. A theme fork of [Trưa Nay Ăn Gì](https://github.com/truanayangi-com/truanayangi), swapping the lunch catalog for Vietnamese afternoon drinks (cà phê, trà, trà sữa, nước ép, sinh tố…).

This is a static frontend with **no account, login, backend or production API dependency**. Preferences, custom drinks and browser-local spin totals use versioned cookies, not server storage. Clearing cookies resets them.

## Chạy local / Run locally

```sh
pnpm install --frozen-lockfile
pnpm start
```

Mở **http://127.0.0.1:5173**. Nếu cổng đang bận, dùng `pnpm start --port 5188` rồi mở http://127.0.0.1:5188. Không cần `.env`, OAuth client, database, tài khoản cloud hay backend. Dùng Node.js 22.12+ và phiên bản pnpm ghi trong package.json.

Ứng dụng tự lưu bộ lọc, ngôn ngữ, âm thanh, danh sách đồ uống, món gần nhất và lượt quay bằng cookie. Thay đổi danh sách đồ uống được lưu ngay, không có nút đăng nhập hoặc yêu cầu bấm lưu. Lượt quay chỉ thuộc trình duyệt này.

```sh
pnpm test
pnpm build
pnpm preview
```

The production build can be previewed at http://127.0.0.1:4173. Use a local HTTP server rather than opening `index.html` with `file://`, so browser cookies and JavaScript modules work correctly.

## What changed from the food version

- `src/lib/drinks.ts` replaces `foods.ts` — a curated list of ~55 Vietnamese afternoon drinks (cà phê, trà, trà sữa, nước ép, sinh tố, soda, and more), each tagged with a `category` and an optional `decaf` flag.
- The "vegetarian" filter became a **"Không caffeine / Caffeine-free"** filter (`decaf`).
- **No drink photos are bundled.** Each card renders a colored icon (via `lucide-react`) based on its `category` instead of a sprite-sheet photo, since no real photography was available when this fork was made. Swap in real photos later by reintroducing an image atlas and updating `DrinkImage` in `src/app/page.tsx`.
- Budget presets, price tiers (`priceRarity`) and the log-price spin distribution were rescaled for typical drink prices (~5–70k VND) instead of lunch prices (~25–170k VND).
- Cookie prefix, page title, header branding and footer text were updated; the CS:GO-style case-opening mechanic and sound effects are unchanged.
- Large unused food/brand images were removed from `public/` to keep the clone lean; the favicon files are the original placeholders — swap them for your own brand assets.

## Storage

Cookies are host-only, scoped to the application path, `SameSite=Lax`, `Secure` on HTTPS, and expire after one year. Each encoded value is bounded to 3,500 bytes; oversized custom pools are rejected without replacing the previous saved pool. Save only drink preferences, never sensitive personal data. There is no cross-device sync or global counter in this version.

See [ATTRIBUTION.md](ATTRIBUTION.md) for original authorship and third-party assets.
