/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   catcheye: ["CatchEye", "sans-serif"],
      // },
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"], // Main body font
        // sans: ['"Mulish"', "sans-serif"], // Main body font
        serif: ['"Lora"', "serif"], // Headings font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1F006A",
          secondary: "#000",
          accent: "#7967A6",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          info: "#f6fafd",
          success: "#15803d",
          warning: "#fbbf24",
          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
