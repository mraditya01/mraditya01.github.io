# Muhammad Raditya Giovanni - Portfolio

A modern, responsive portfolio website showcasing my research, projects, and professional experience in autonomous vehicles and AI.

## Built with

- **[Astro](https://astro.build)** - Modern static site generator
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Component library for TailwindCSS
- **[FontAwesome](https://fontawesome.com/)** - Icon library

## Features

- ✨ Dark theme with modern design
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Fast performance (static site generation)
- 🎨 Customizable color scheme
- 🔍 SEO optimized
- 📄 PDF CV download
- 🤖 Automatic GitHub Pages deployment

## Project Structure

```
├── src/
│   ├── components/        # Reusable Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page files
│   ├── styles/           # Global styles
│   └── config.ts         # Site configuration
├── public/               # Static assets
├── dist/                 # Built site (GitHub Pages)
├── astro.config.mjs      # Astro configuration
├── tailwind.config.cjs   # TailwindCSS configuration
└── package.json          # Project dependencies
```

## Development

### Prerequisites
- Node.js 16+
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview build
pnpm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages on every push to the `main` branch using GitHub Actions.

To deploy manually:
1. Run `pnpm run build`
2. The `dist` folder contains the built site
3. Commit and push to trigger automatic deployment

## Customization

### Update Site Content
- Edit `src/pages/index.astro` for homepage content
- Edit `src/config.ts` for site metadata
- Update `public/` directory with your assets

### Change Colors
- Edit `tailwind.config.cjs` to modify the primary color and theme
- Update `src/styles/global.css` for custom styles

### Add New Pages
1. Create a new `.astro` file in `src/pages/`
2. Use `BaseLayout` component for consistent styling
3. The file path automatically becomes the route

## License

Open source - feel free to use this as a template for your own portfolio!
