/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      content: ['./src/**/*.{ts,tsx,css}'],
    },
  },
};

export default config;
