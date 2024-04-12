import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          brand: "#846AFF",
          "dark-10": "#121214",
          "dark-20": "#7C7C8A",
          "dark-30": "#EAEAEA",
          "dark-40": "#EEEEFF",
          "dark-50": "#F8F8FF",
          "dark-60": "#FFFFFF",
        },
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
