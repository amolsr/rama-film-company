import React from "react";
import { Zoom } from "react-slideshow-image";

const Landing = () => {
  const images = [
    process.env.PUBLIC_URL + "/image/1.jpg",
    process.env.PUBLIC_URL + "/image/2.jpg",
    process.env.PUBLIC_URL + "/image/33.jpg",
  ];

  const zoomInProperties = {
    indicators: false,
    scale: 1.4,
    duration: 1500,
    pauseOnHover: false,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{ width: "30px", marginRight: "-30px" }}></div>,
    nextArrow: <div style={{ width: "30px", marginLeft: "-30px" }}></div>,
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            style={{
              zIndex: -1,
              filter: "blur(8px)",
              WebkitFilter: "blur(8px)",
              backgroundImage: `url(${each})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "102vh",
              width: "100%",
            }}
          >
            Amolsakndflasddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffff
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Landing;
