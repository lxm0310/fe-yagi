import React, { useState, useEffect } from "react";
import CategoryLocation from "../component/CategoryLocation";
import BannerBot from "../component/BannerBot";
import ContentBot from "../component/ContentBot";
import SearchForm from "../component/searchForm";
import CategoryService from "../component/categoryService";
import { Link } from "react-router-dom";
type Props = {};
const images = [
  "src/upload/banner1.png",
  "src/upload/banner2.png", // Add more images as needed
  "src/upload/banner3.png",
  "src/upload/banner4.png",
  "src/upload/banner5.png",
];

const Homepage = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slideshow using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to handle click to change the image manually
  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="container mb-[100px]">
        {/* Main Content with Background Image and Promotion */}
        <main className="relative h-screen" onClick={handleImageClick}>
          {/* Background Image Slideshow */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>

          {/* Promotion Banner */}
          <div className="relative h-full flex items-center justify-start ml-7">
            {/* Login/Register Button */}
            <div className="absolute right-3 top-[20px] mt-[130px]">
              <div className="bg-blue-600 text-white w-[190.27px] h-[43px] px-4 py-2 rounded hover:bg-blue-700">
                <Link
                  className="hover:underline hover:text-yellow-400"
                  to={"/register"}
                >
                  Đăng ký
                </Link>{" "}
                /
                <Link
                  className="hover:underline hover:text-yellow-400"
                  to={"/login"}
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
            <div className="bg-black bg-opacity-40 p-8 rounded-md max-w-lg text-white mt-[200px]">
              <p className="text-yellow-300 mb-2">
                Từ ngày 01/10/2024-30/12/2024
              </p>
              <h1 className="text-2xl font-bold">
                Hưởng ưu đãi từ 15% cho kỳ nghỉ tiếp theo
              </h1>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400"
              >
                →
              </a>
            </div>
          </div>
        </main>
        <div className="content w-auto">
          <div>
            <CategoryService />
          </div>
          <div>
            <SearchForm />
          </div>
          <div>
            <CategoryLocation />
          </div>
          <div>
            <BannerBot />
          </div>
          <div className="mt-10">
            <ContentBot />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
