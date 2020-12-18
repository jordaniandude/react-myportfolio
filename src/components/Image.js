import React from "react";
import "../index.css";
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

const descStyle = {
    textAlign: "center",
    fontSize: "16px",
    padding: "12px"
}

const Image = ({ url, alt }) => (
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={url}>
        <ImageShadow src={url} />
    </a>
    <div style={descStyle}>{alt}</div>
  </div>
);

export default Image;