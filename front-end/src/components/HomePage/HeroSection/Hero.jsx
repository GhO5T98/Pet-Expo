import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PetImg from "../../../assets/catImg.jpg";
import PetImg2 from "../../../assets/dogImg.jpg";
import PetImg3 from "../../../assets/birdImg.jpg";
import "./hero.scss";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  const slides = [
    {
      src: PetImg,
    },
    {
      src: PetImg2,
    },
    {
      src: PetImg3,
    },
  ];

  return (
    <Carousel fade controls={false}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 fluid"
            src={slide.src}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <span className="stroke">Pets Lovers' PARADISE</span>
            <h4>Explore. Experience. Enjoy with Your Pets!</h4>
            <ScrollDown />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
