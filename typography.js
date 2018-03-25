import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Montserret",
      styles: ["700"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Montserrat", "Helvetica Neue", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"]
});

typography.injectStyles()

export default typography;
