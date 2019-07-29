const mediumZoom = require('./src/components/custom-medium-zoom/mediumZoom')


exports.onClientEntry = () => {
  window.zoomer = mediumZoom.default()

};