import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Similar from "./similar";

// Custom Arrow component for left button
const PreviousArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
      onClick={onClick}
      style={{ left: "10px" }} // Adjusted to move closer to Similar
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

// Custom Arrow component for right button
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
      onClick={onClick}
      style={{ right: "10px" }} // Adjusted to move closer to Similar
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: true, // Auto slide feature
    autoplaySpeed: 3000, // Duration for auto slide
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PreviousArrow />, // Custom Previous Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-11">
      <div className="relative  ml-20">
        <h3 className="text-center font-bold  text-[36px]">
          Khách Sạn Tương Tự
        </h3>
        <hr className=" w-[100px] ml-[540px] mt-2 bottom-0  border-black" />
      </div>
      <div className="container mt-11 pl-6 relative">
        <Slider {...settings}>
          <div className="px-[10px]">
            <Similar />
          </div>
          <div className="px-[10px]">
            <Similar />
          </div>
          <div className="px-[10px]">
            <Similar />
          </div>
          <div className="px-[10px]">
            <Similar />
          </div>
          <div className="px-[10px]">
            <Similar />
          </div>
          <div className="px-[10px]">
            <Similar />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
