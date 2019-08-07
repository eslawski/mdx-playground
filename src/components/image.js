import React from 'react'
import Img from 'gatsby-image'

class Image extends React.Component {

  render() {
    if(!this.props.imageInfo) {
      return null; // TODO fix this error condition
    }

    const { id, lowRes, highRes } = this.props.imageInfo;

    return (
      <div style={{width: 300}}>
        <Img
          className={`image-${id}`}
          fluid={lowRes}
          onLoad={() => {
            const img = document.querySelector(`.image-${id} picture img`);
            img.setAttribute('data-image-id', id);
            img.setAttribute('data-srcset-hd', highRes.srcSet);
            img.setAttribute('data-sizes-hd', highRes.sizes);

            img.style.transition = ""; // Hack that prevents image from closing
            window.zoomer.attach(img);

          }}/>
      </div>
    )
  }
}

export default Image
