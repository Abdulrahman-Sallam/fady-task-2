import React from 'react'

const GallerySlider = () => {
  return (
    <div className="gallery-slider">
      {/* Left arrow */}
      <div className="arrow left-arrow"></div>

      {/* Gallery Images */}
      <div className="gallery-images">
        {/* Replace the divs below with your actual image components */}
        <div className="gallery-image"></div>
        <div className="gallery-image"></div>
        <div className="gallery-image"></div>
        {/* ... */}
      </div>

      {/* Right arrow */}
      <div className="arrow right-arrow"></div>
    </div>
  )
}

export default GallerySlider
