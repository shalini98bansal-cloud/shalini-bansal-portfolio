# Shalini Bansal - Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean design showcasing mechanical engineering expertise.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Editing Content

All website content is centralized in `src/data/content.ts`. To update your information:

1. **Edit `src/data/content.ts`:**
   - Update hero section (name, role, tagline)
   - Modify experience entries
   - Add/remove projects
   - Update education information
   - Change contact information

2. **Example content structure:**
   ```typescript
   export const content = {
     hero: {
       name: "Your Name",
       role: "Your Role",
       tagline: "Your tagline...",
     },
     experience: [
       {
         title: "Job Title",
         company: "Company Name",
         period: "2023 - Present",
         location: "City, State",
         summary: "Brief description...",
         details: ["Achievement 1", "Achievement 2", ...]
       }
     ],
     // ... other sections
   };
   ```

## 🎨 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Mode** - System preference + manual toggle
- ✅ **Accessibility** - WCAG compliant, keyboard navigation
- ✅ **SEO Optimized** - Meta tags, semantic HTML
- ✅ **Smooth Animations** - Framer Motion with reduced motion support
- ✅ **Modern Tech Stack** - React 18, TypeScript, Tailwind CSS
- ✅ **Performance** - Optimized bundle size, lazy loading

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Education.tsx   # Education section
│   ├── Experience.tsx  # Experience section
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation with scroll spy
│   └── Projects.tsx    # Projects section
├── data/
│   └── content.ts      # All website content
├── styles/
│   └── tailwind.css    # Global styles and utilities
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🚀 Deployment

### GitHub Pages
1. Update `vite.config.ts` with your repository name:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy dist/ folder to GitHub Pages
   ```

### Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Shalini Bansal