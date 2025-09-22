# Shalini Bansal - Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and accessible accordion components for showcasing experience and projects.

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
   - Update skills categories
   - Edit leadership experience
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

## 📄 Adding Your Resume

1. **Replace the resume file:**
   - Add your resume PDF to the `public/` folder
   - Name it `resume.pdf` (or update the path in `content.ts`)

2. **Update the resume URL in content:**
   ```typescript
   contact: {
     email: "your.email@example.com",
     resumeUrl: "/your-resume.pdf"  // Update this path
   }
   ```

## 🎨 Customization

### Colors & Theme
- Modify `tailwind.config.js` for custom colors
- Dark mode is automatically handled
- Update CSS variables in `src/styles/tailwind.css`

### Animations
- All animations use Framer Motion
- Respects `prefers-reduced-motion` for accessibility
- Customize animations in component files

### Layout
- Responsive design with mobile-first approach
- Modify breakpoints in Tailwind config if needed
- Update spacing and typography in component files

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Tests include accessibility checks for accordion components and basic functionality.

## 📱 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Mode** - System preference + manual toggle
- ✅ **Accessibility** - WCAG compliant, keyboard navigation
- ✅ **SEO Optimized** - Meta tags, semantic HTML
- ✅ **Smooth Animations** - Framer Motion with reduced motion support
- ✅ **Accordion Components** - Expandable content sections
- ✅ **Sticky Navigation** - Scroll spy for active sections
- ✅ **Performance** - Optimized bundle size, lazy loading

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vitest** - Testing

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Accordion.tsx   # Expandable content component
│   ├── Card.tsx        # Content card wrapper
│   ├── Footer.tsx      # Site footer
│   ├── Navbar.tsx      # Navigation with scroll spy
│   ├── Section.tsx     # Section wrapper
│   └── ThemeToggle.tsx # Dark/light mode toggle
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

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ by Shalini Bansal
