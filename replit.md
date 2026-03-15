# 3D Portfolio Website

A modern, responsive 3D portfolio website template built for developers. Features a professional profile layout with 3D animations, certifications, experience timeline, and a contact form.

## Tech Stack

- **Framework:** React 18 with Vite 4
- **Styling:** Tailwind CSS + PostCSS
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Animations:** Framer Motion
- **Contact:** @emailjs/browser
- **Package Manager:** npm

## Project Structure

- `src/` - Source code
  - `App.jsx` - Main app component
  - `components/` - UI components (Navbar, Hero, About, Tech, Experience, Contact, etc.)
  - `components/canvas/` - 3D canvas components
  - `assets/` - Images, icons, logos, certificates
  - `constants/index.js` - Site content/data (easy to customize)
  - `hoc/` - Higher-Order Components
  - `utils/motion.js` - Framer Motion configs
  - `fonts/` - Custom font files
- `public/` - Static assets

## Development

```bash
npm run dev       # Start dev server on port 5000
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build
```

## Configuration

- **Vite config:** `vite.config.js` - Dev server on port 5000, host 0.0.0.0, all hosts allowed
- **Tailwind config:** `tailwind.config.cjs`
- **Site content:** Edit `src/constants/index.js` to customize profile data

## Deployment

Configured as a static site deployment:
- Build command: `npm run build`
- Public directory: `dist/`
