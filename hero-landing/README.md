# NeuralKinetics — Hero Landing

A full-screen, minimal black-and-white hero section with a full-viewport
background video and Framer Motion entrance animations.

## Stack

- **React 19**
- **Vite 6**
- **motion** (Framer Motion, imported from `motion/react`)
- **lucide-react** (Plus icon)
- Plain CSS (no Tailwind)
- **Inter** (weights 300/400/500/600) from Google Fonts

## Getting started

```bash
cd hero-landing
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Layout

- Full-viewport (`min-height: 100vh`) white shell, flex column, `space-between`.
- Fixed navbar (logo, Menu pill, tag labels, right "Adaptive Systems" pill).
- Full-screen background video behind everything (`object-fit: cover`).
- Bottom footer over a white gradient fade-up: subtitle, two-line heading,
  action buttons, and tag pills.

## Responsive

Mobile-first with a `768px` breakpoint. On mobile the brand text, nav tag
labels, and right label are hidden, buttons/circles shrink, the footer stacks
vertically, and the video renders at 80% size. On desktop everything is shown,
the footer is a row aligned to the bottom, and the video fills the viewport.
