import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#2C3E50",
          secondary: "#ECF0F1",
          accent: "#F39C12",
          background: "#C7D0D2",
        },
        blue: {
          500: '#3B82F6', // Tambahkan warna blue-500
        },
      },
      backgroundImage: {
        bgLanding: 'url(/assets/background/lndingbg.jpg)',
        bgprivacy: 'url(/assets/background/privacy.jpg)',
        bgblog: 'url(/assets/background/blog.jpg)',
        bgjoin: 'url(/assets/background/bg-join.png)',
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"), nextui()],

  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};

export default config;
