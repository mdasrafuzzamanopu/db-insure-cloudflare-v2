/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const themeStyle = require("./libs/style.json");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "colors-a",
    "colors-b",
    "colors-c",
    "colors-d",
    "colors-e",
    "colors-f",
    "colors-g",
    "colors-h",
    "colors-i",
    "colors-j",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        primary: themeStyle.primary,
        secondary: themeStyle.secondary,
        accent: "#F13024",
        main: themeStyle.main,
        light: themeStyle.light,
        "on-light": themeStyle.onLight,
        dark: themeStyle.dark,
        "on-dark": themeStyle.onDark,
        // primary: themeStyle.primary,
        "on-primary": themeStyle.onPrimary,
        // secondary: themeStyle.secondary,
        "on-secondary": themeStyle.onSecondary,
        complementary: themeStyle.complementary,
        "on-complementary": themeStyle.onComplementary,
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addBase, addComponents, theme, matchUtilities }) {
      const h1Size = themeStyle.h1.size;
      const adjustH1Size = ["6xl", "7xl", "8xl", "9xl"].includes(h1Size);
      const h2Size = themeStyle.h2.size;
      const adjustH2Size = ["5xl", "6xl", "7xl", "8xl", "9xl"].includes(h2Size);
      const h3Size = themeStyle.h3.size;
      const adjustH3Size = ["4xl", "5xl", "6xl", "7xl", "8xl", "9xl"].includes(
        h3Size
      );
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
      addBase({
        body: {
          // fontFamily: theme(`fontFamily.${themeStyle.fontBody}`),
        },
        "h1,h2,h3,h4,h5,h6,blockquote,.sb-header-logo,.sb-footer-logo": {
          // fontFamily: theme(`fontFamily.${themeStyle.fontHeadlines}`),
        },
        "h1,.h1": {
          ...(adjustH1Size && {
            fontSize: theme("fontSize.5xl"),
            "@media (min-width: 640px)": {
              fontSize: theme(`fontSize.${h1Size}`),
            },
          }),
          ...(!adjustH1Size && {
            fontSize: theme(`fontSize.${h1Size}`),
          }),
          fontWeight: theme(`fontWeight.${themeStyle.h1.weight}`),
          letterSpacing: theme(`letterSpacing.${themeStyle.h1.letterSpacing}`),
          textDecoration: themeStyle.h1.decoration,
          textTransform: themeStyle.h1.case,
        },
        h2: {
          ...(adjustH2Size && {
            fontSize: theme("fontSize.4xl"),
            "@media (min-width: 640px)": {
              fontSize: theme(`fontSize.${h2Size}`),
            },
          }),
          ...(!adjustH2Size && {
            fontSize: theme(`fontSize.${h2Size}`),
          }),
          fontSize: theme(`fontSize.${themeStyle.h2.size}`),
          fontWeight: theme(`fontWeight.${themeStyle.h2.weight}`),
          letterSpacing: theme(`letterSpacing.${themeStyle.h2.letterSpacing}`),
          textDecoration: themeStyle.h2.decoration,
          textTransform: themeStyle.h2.case,
        },
        h3: {
          ...(adjustH3Size && {
            fontSize: theme("fontSize.3xl"),
            "@media (min-width: 640px)": {
              fontSize: theme(`fontSize.${h3Size}`),
            },
          }),
          ...(!adjustH3Size && {
            fontSize: theme(`fontSize.${h3Size}`),
          }),
          fontSize: theme(`fontSize.${themeStyle.h3.size}`),
          fontWeight: theme(`fontWeight.${themeStyle.h3.weight}`),
          letterSpacing: theme(`letterSpacing.${themeStyle.h3.letterSpacing}`),
          textDecoration: themeStyle.h3.decoration,
          textTransform: themeStyle.h3.case,
        },
        h4: {
          fontSize: theme(`fontSize.${themeStyle.h4.size}`),
          fontWeight: theme(`fontWeight.${themeStyle.h4.weight}`),
          letterSpacing: theme(`letterSpacing.${themeStyle.h4.letterSpacing}`),
          textDecoration: themeStyle.h4.decoration,
          textTransform: themeStyle.h4.case,
        },
        h5: {
          fontSize: theme(`fontSize.${themeStyle.h5.size}`),
          fontWeight: theme(`fontWeight.${themeStyle.h5.weight}`),
          letterSpacing: theme(`letterSpacing.${themeStyle.h5.letterSpacing}`),
          textDecoration: themeStyle.h5.decoration,
          textTransform: themeStyle.h5.case,
        },
        h6: {
          fontSize: theme(`fontSize.${themeStyle.h6.size}`),
          fontWeight: theme(`fontWeight.${themeStyle.h6.weight}`),
          letterSpacing: theme(`letterSpacing.${themeStyle.h6.letterSpacing}`),
          textDecoration: themeStyle.h6.decoration,
          textTransform: themeStyle.h6.case,
        },
      });
      addComponents({
        ".sb-component-button-primary": {
          borderRadius: theme(
            `borderRadius.${themeStyle.buttonPrimary.borderRadius}`
          ),
          boxShadow: theme(`boxShadow.${themeStyle.buttonPrimary.shadow}`),
          fontWeight: themeStyle.buttonPrimary.weight,
          letterSpacing: theme(
            `letterSpacing.${themeStyle.buttonPrimary.letterSpacing}`
          ),
          padding: `${themeStyle.buttonPrimary.verticalPadding}px ${themeStyle.buttonPrimary.horizontalPadding}px`,
          textTransform: themeStyle.buttonPrimary.case,
        },
        ".sb-component-button-secondary": {
          borderRadius: theme(
            `borderRadius.${themeStyle.buttonSecondary.borderRadius}`
          ),
          borderStyle: theme(
            `borderStyle.${themeStyle.buttonSecondary.borderStyle}`
          ),
          boxShadow: theme(`boxShadow.${themeStyle.buttonSecondary.shadow}`),
          fontWeight: themeStyle.buttonSecondary.weight,
          letterSpacing: theme(
            `letterSpacing.${themeStyle.buttonSecondary.letterSpacing}`
          ),
          padding: `${themeStyle.buttonSecondary.verticalPadding}px ${themeStyle.buttonSecondary.horizontalPadding}px`,
          textTransform: themeStyle.buttonSecondary.case,
        },
        ".sb-component-link": {
          fontWeight: themeStyle.link.weight,
          letterSpacing: theme(
            `letterSpacing.${themeStyle.link.letterSpacing}`
          ),
          textTransform: themeStyle.link.case,
        },
      });
    }),
  ],
};
