import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 2 },
  600: { items: 3 },
  1024: { items: 4 },
};

const ImageCarousel = ({ dummyImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnSlideChanged = (event) => {
    const { item } = event;
    setCurrentIndex(item);
  };

  return (
    <AliceCarousel
      items={dummyImages}
      responsive={responsive}
      onSlideChanged={handleOnSlideChanged}
      dotsDisabled={true}
      buttonsDisabled={true}
    >
      {dummyImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`carousel-image ${currentIndex === index ? "active" : ""}`}
        />
      ))}
    </AliceCarousel>
  );
};

export default ImageCarousel;
