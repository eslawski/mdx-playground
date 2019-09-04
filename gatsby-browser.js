const mediumZoom = require('./src/components/custom-medium-zoom/mediumZoom')
require("prismjs/themes/prism-tomorrow.css")


exports.onClientEntry = () => {
  console.log("Zoomer has been initialized")
  window.zoomer = mediumZoom.default({
    background: "rgba(255, 255, 255, 0.85)",
    margin: 25 // only affects vertical margin
  })

};