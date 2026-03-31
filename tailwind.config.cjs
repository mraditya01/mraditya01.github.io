/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff8c00',
        secondary: '#1f2937',
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
  }
};
