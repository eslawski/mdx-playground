import Typography from "typography"
import Bootstrap from "typography-theme-bootstrap"

Bootstrap.overrideThemeStyles = ({ scale, rhythm }, options) => ({
  "h5,h6": {
    ...scale(.05),
    fontWeight: 'normal'
  }
})

const typography = new Typography(Bootstrap)

console.log(typography)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography