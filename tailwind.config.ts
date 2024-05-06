import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-blueee': '#183354',
        'secondary-blue': '#BACCE1',
        'primary-orange': '#F4796C',
        'primary-grey': '#6D757F',
        'primary-black': '#0C1622',
        'overlay': 'rgba(0,0,0,.6)',
        'overlay-light': 'rgba(0,0,0,.4)',
        'overlay-dark': 'rgba(0,0,0,.7)',
        'error': '#FF0000',
        'loading': '#183354',
        'success': '#008000',
      }
    },
  },
  plugins: [],
};
export default config;
