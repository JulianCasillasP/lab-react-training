import React, { useState } from 'react';
import './Carousel.css';

const Carousel = (props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button">
        &#9664; Left
      </button>
      <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
      <button onClick={goToNext} className="carousel-button">
        Right &#9654;
      </button>
    </div>
  );
};

export default Carousel;