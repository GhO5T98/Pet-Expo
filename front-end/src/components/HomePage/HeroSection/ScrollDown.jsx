import React from "react";
import "./scrollDown.scss";

const ScrollDown = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-down-animation" onClick={handleScroll}>
      <div className="mouse-icon">
        <div className="scroll-wheel"></div>
      </div>
      <span className="scroll-text">Scroll Down</span>
    </div>
  );
};

export default ScrollDown;
