# Kallery Galleria — Premium Commercial Brochure Website

A cinematic, scroll-based digital brochure for Kallery Galleria, built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click **Deploy** — zero configuration needed

---

## 📸 How to Add Your Property Images

### Folder Structure

```
public/
└── images/
    ├── hero/           ← Best exterior shot (full-screen hero)
    ├── ground-floor/   ← Ground floor photos
    ├── 1st-floor/      ← First floor photos
    ├── 2nd-floor/      ← Second floor photos
    └── 3rd-floor/      ← Third floor photos
```

### Naming Convention

Name your images numerically inside each folder:

```
1.jpg
2.jpg
3.jpg
4.jpg
```

### Recommended Specs

| Folder | Images | Ideal Size |
|---|---|---|
| `hero/` | 1 best exterior | 1920×1080px min |
| `ground-floor/` | 3–4 shots | 1920×1080px |
| `1st-floor/` | 3–4 shots | 1920×1080px |
| `2nd-floor/` | 3–4 shots | 1920×1080px |
| `3rd-floor/` | 3–4 shots | 1920×1080px |

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

> If an image is missing, the site shows a gold placeholder — it will never break.

---

## Customising Image Paths

If you want to use different filenames or pick specific shots for the gallery, edit:

```
src/lib/images.ts
```

This file controls exactly which images appear in each section.

---

## Changing Contact Numbers

Search for `+919495040824` and `+918289830824` across the codebase and replace with the correct numbers. They appear in:

- `src/components/Hero.tsx`
- `src/components/FloorBreakdown.tsx`
- `src/components/FinalCTA.tsx`
- `src/components/WhatsAppFloat.tsx`
- `src/components/Navbar.tsx`

---

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Google Fonts** — Cormorant Garamond, DM Sans, DM Mono

---

## Project Structure

```
kallery-galleria/
├── public/
│   └── images/
│       ├── hero/
│       ├── ground-floor/
│       ├── 1st-floor/
│       ├── 2nd-floor/
│       └── 3rd-floor/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Positioning.tsx
│   │   ├── DemandProof.tsx
│   │   ├── StrategicEdge.tsx
│   │   ├── UseCases.tsx
│   │   ├── FloorBreakdown.tsx
│   │   ├── Investment.tsx
│   │   ├── Gallery.tsx
│   │   ├── Urgency.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   └── lib/
│       └── images.ts
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```
