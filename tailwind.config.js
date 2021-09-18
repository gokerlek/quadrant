module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        LIGHT_BLUE: "#ADB9C3",
        DARK_BLUE: "#3878A2",
        DARK_GREY: "#696969",
        LIGHT_GREY: "#E3E4E7",
      },
      spacing: {
        "400px": "400px",
        "15px": "15px",
        "13px": "13px",
        "2px": "2px",
        "0px": "0px",
        "1/8": "12.5%",
        60: "60%",
        "1px": "1px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
