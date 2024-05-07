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
       colors: {
        'app-orange': '#E04343',
        'app-yellow': '#FFE800',
        'app-black': '#353535',
        'app-red': '#E04343',
        'app-gray': '#a1a9b0',
        'app-lightgray': 'rgba(255, 255, 255, 1)',
        'app-lightgray-2': '#f3f5f8',
        'error': '#ED4337',
        'white': 'white'
    }
    },
  },
  plugins: [],
};
export default config;
