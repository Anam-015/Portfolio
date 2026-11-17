# Anam Nayab — Personal Portfolio Website 🌿

A modern personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed in a rich **dark purple theme** adorned with soft **lavender and white organic leaf accents**.

---

## 🌟 Sections & Features

1. **Navbar**: Logo with name on the left, smooth-scroll links to About, Projects, and Contact on the right, plus responsive mobile menu.
2. **Hero**: Prominent introduction celebrating the intersection of engineering and literature, with "View my work" and "Contact me" action buttons.
3. **About**: Personal background story with interactive skill chips (`HTML`, `CSS`, `Python`, `SQL`).
4. **Projects**: Reusable `ProjectCard` components displaying featured projects, tech tags, descriptions, and GitHub links.
5. **Contact**: Clean contact form with name, email, and message inputs, plus direct email and LinkedIn profile links.
6. **Footer**: Copyright "© 2026 Anam Nayab" with a smooth scroll-to-top button.
7. **Decorative Accents**: Soft floating leaves in lavender and crisp white highlighting the poetic theme.

---

## 🚀 How to Run Locally

1. **Install dependencies** (already installed in your folder):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 File Architecture

- `app/layout.tsx` — Global root layout with page title and metadata.
- `app/globals.css` — Custom dark purple color palette, lavender glow effects, and leaf motifs.
- `app/page.tsx` — Main single-page portfolio layout assembling all sections in sequence.
- `app/components/Navbar.tsx` — Responsive navigation bar with smooth scrolling.
- `app/components/Hero.tsx` — Hero greeting with call-to-action buttons.
- `app/components/About.tsx` — Short bio and technical skill chips.
- `app/components/ProjectCard.tsx` — Reusable card for project showcase.
- `app/components/Projects.tsx` — Project gallery grid.
- `app/components/Contact.tsx` — Contact form UI, email, and LinkedIn link.
- `app/components/Footer.tsx` — Footer section with copyright and back-to-top button.
- `app/components/DecorativeLeaves.tsx` — Lavender & white leaf SVG accents.
