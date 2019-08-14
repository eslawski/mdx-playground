const colors = {}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
}

// TODO go through all of these and clean up usages
const blog = {
  fontSize: "1.25em",
  fontSizeSmall: "1.15em",
  spacing: "1.45rem",
  inlineMediaWidth: "70%",
  inlineMediaWidthSmall: "100%",
  inlineMediaPortraitWidth: "40%",
  inlineMediaPortraitWidthSmall: "60%",
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
  headerHeight: "50px",
  maxWidth: '800px',
  maxWidthImageSection: '1200px'
}

export default theme