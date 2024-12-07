/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        hero_foreground: "var(--ifm-hero-text-color)",
        hero_background: "var(--ifm-hero-background-color)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
};
