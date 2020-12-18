import React from "react";
import Image from "./Image";
import IMAGES from "../data/images";

const Gallery = () => {
  let images;
  let noImages;

  if (IMAGES.length > 0) {
    images = IMAGES.map((image) => {
      return <Image url={image.image} alt={image.description} />;
    });
  }

  return (
    <div>
      {images}
      {noImages}
    </div>
  );
};

export default Gallery;
