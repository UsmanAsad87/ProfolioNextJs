# Project Image Prompts (for Gemini)

The portfolio needs 3 new project card images (plus 1 optional). Current placeholders are
copies of `bg.png` — overwrite them at the exact paths below and the site picks them up
with no code change.

**How to use:** open Gemini (image generation), attach 2–4 real screenshots of the product
(dashboard, mobile app, landing page — Gemini will compose them into the artwork), paste the
prompt, and export as **PNG, 1560 × 826 px (or any ~16:9 / 1.9:1 size ≥ 1400 px wide)**.

**Shared style for every image** (matches the existing FaceRT / ActivTips cards):

> Dark navy-to-black tech background (#000319 tones) with a subtle purple glow and faint
> wireframe/network lines. Arrange the attached real product screenshots as a floating,
> slightly tilted collage: a laptop/browser window as the main element and 2–3 phone
> mockups in front. Soft shadows, slight 3D perspective, premium SaaS product-shot look.
> No added text except what is visible inside the screenshots. No watermarks.

---

## 1. ZeusLock — save as `public/projects/zeuslock.png`

Screenshots to attach: `zeuslock.ai` landing page, `app.zeuslock.ai` dashboard
(incidents / analytics page), and the browser extension's block/warning banner over ChatGPT.

Prompt addition:

> Theme it as an enterprise AI-security product: deep navy with electric-blue accents and a
> subtle shield / lock motif glowing behind the collage. The browser window shows a security
> dashboard; a smaller browser window shows an AI chat being blocked with a red warning banner.

## 2. MMS — save as `public/projects/mms.png`

Screenshots to attach: `mms-aim.netlify.app` dashboard (charts / machine analytics) and the
Flutter mobile app screens if available.

Prompt addition:

> Theme it as an industrial IoT monitoring product: dark background with faint turquoise
> telemetry lines and gauge/chart motifs. Laptop shows the real-time machine analytics
> dashboard; one phone mockup shows the mobile monitoring app.

## 3. NafaPay — save as `public/projects/nafapay.png`

Screenshots to attach: `nafapay.shop` web marketplace and the NafaPay mobile app screens
(installment plan / checkout).

Prompt addition:

> Theme it as a modern African fintech product: dark background with warm green-gold accent
> glow. Two phone mockups in front showing the BNPL app (installments screen and payment
> screen), the web marketplace behind on a laptop.

## 4. (Optional) Ataya — save as `public/projects/ataya.png`

The card currently reuses the old ActivTips image. If you generate a fresh one with current
Ataya branding (attach `ataya.app` screenshots + app screens), save it as
`public/projects/ataya.png` **and** change the Ataya entry in `data/index.ts` from
`/projects/activtips.png` to `/projects/ataya.png`.

---

After dropping the PNGs in, commit on this branch: the images deploy with the next push.
