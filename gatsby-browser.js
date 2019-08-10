const mediumZoom = require('./src/components/custom-medium-zoom/mediumZoom')


exports.onClientEntry = () => {
  window.zoomer = mediumZoom.default({
    background: "rgba(255, 255, 255, 0.85)"
  })

};