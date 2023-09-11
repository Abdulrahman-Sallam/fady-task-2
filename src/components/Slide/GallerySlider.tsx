// GallerySlider.js

import React, { useState } from 'react'
import './GallerySlider.css'

const GallerySlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(images.length - 2) // Start from the 2nd last image

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRightClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="gallery-slider">
      <button className="arrow left-arrow" onClick={handleLeftClick}>
        &lt;
      </button>
      {images.map((image, index) => (
        <div className="images">
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={index === currentIndex ? 'active' : ''}
          />
        </div>
      ))}

      <button className="arrow right-arrow" onClick={handleRightClick}>
        &gt;
      </button>
    </div>
  )
}

export default GallerySlider
