import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth:{
        max:'1250px'
      },
      fontFamily:{
        poppins: "Poppins",
        sora:"Sora",
        inter:"Inter"
      }
    },
  },
  plugins: [],
} satisfies Config;
