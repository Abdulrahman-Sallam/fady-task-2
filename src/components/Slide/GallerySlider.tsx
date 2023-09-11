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
    <div style={{ display: 'flex' }}>
      <div className="gallery-slider">
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
      </div>
      <div
        style={{
          display: 'grid',
          maxWidth: '300px',
          alignItems: 'center',
          position: 'absolute',
          gridTemplateColumns: '10px 1fr 10px',
        }}
      >
        <button
          className="arrow left-arrow"
          onClick={handleLeftClick}
          style={{ width: '10px' }}
        >
          &lt;
        </button>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <h4>sallam</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            eaque, atque blanditiis iure unde incidunt eius explicabo quo,
            nesciunt porro iusto ipsam repellat nihil temporibus omnis corporis
            aliquid vero natus.
          </p>
        </div>
        <button className="arrow right-arrow" onClick={handleRightClick}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default GallerySlider
