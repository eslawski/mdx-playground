const colors = {
  primary: '#d02e77', // Color for buttons or links
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
  white: 'white',
  ribbon: 'green'
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
}

const blog = {
  fontSize: "1.25em",
  fontSizeSmall: "1.15em",
  spacing: "1.45rem",
  inlineMediaWidth: "70%",
  inlineMediaWidthSmall: "100%",
  inlineMediaPortraitWidth: "40%",
  inlineMediaPortraitWidthSmall: "60%",
  titleFontSize: "4em",
  titleFontSmall: "2.25em",
  dateFontSize: "1.5em",
  dateFontSizeSmall: "1em",
  allImagesSectionPadding: "3em",
  allImagesSectionPaddingSmall: "1em"
}

const theme = {
  colors,
  breakpoints,
  blog,
  maxWidth: '1000px'
}

export default theme