/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "468px",
      md: "768px",
      lg: "1024px",
      xl: "1286px",
    },
    extend: {
      colors: {
        darkBlack: "#191919",
        smokBlack: "#0f0f0f",
        lightBlack: "#1a1a1a",
        greyBlack: "#272727",
        gray: "#9b9b9b",
        darkGrey: "#606060",
        lightGrey: "#979797",
        lightTaupe: "#a79a66",
        lightgray: "#EAECF0",
        yellow: '#8d804a',
        black: '#000'
      },
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
      },
      fontSize: {
        f14: "14px",
        f16: "16px",
        f18: "18px",
        f20: "20px",
        f22: "22px",
        f24: "24px",
        f26: "26px",
        f32: "32px",
        f36: "36px",
        f40: "40px",
      },
      backgroundImage: {
        'featuredBg': "url('../images/bg-featured.webp')",
        'featuredCatBg': "url('../images/featured_categories_background.webp')",
        'heroBg': "url('../images/black-wood.webp')",
        'heroBgm': "url('../images/black-wood-m.webp')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
        },
        maxWidth: {
          DEFAULT: '100%',
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '1072px',
          xl: '1286px',
        },
      },
    },
  },
  corePlugins: {
    backgroundOpacity: false,
    textOpacity: false,
  }
};
