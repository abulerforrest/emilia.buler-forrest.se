import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        heading: "orpheuspro",
        bimbo: "bimbo-pro",
        bimbo2: "bimbo-pro-finetip",
        bimbo3: "bimbo-pro-sharpie",
        didot: "var(--font-didot)",
        roboto: "var(--font-roboto)",
      },
      keyframes: {
        "animate-slide-up": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "100%": { transform: "translateY(-20px)", opacity: "1" },
        },
        "animate-slide-up-2": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "100%": { transform: "translateY(-40px)", opacity: "1" },
        },
        "animate-slide-up-3": {
          "0%": { transform: "translateY(-150px)", opacity: "0" },
          "100%": { transform: "translateY(-60px)", opacity: "1" },
        },
        "animate-slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "animate-slide-down-2": {
          "0%": { transform: "translateY(-90px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "animate-slide-down-3": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-up":
          "animate-slide-up 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-up-2":
          "animate-slide-up-2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-up-3":
          "animate-slide-up-3 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-down":
          "animate-slide-down 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-down-2":
          "animate-slide-down-2 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-down-3":
          "animate-slide-down-3 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-down-4":
          "animate-slide-down-4 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-down-5":
          "animate-slide-down-5 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-down-6":
          "animate-slide-down-6 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
export default config;
