import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Similar = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-[300px]">
        <div className="relative">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Resort"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute top-2 left-2 text-white">
            <span className="bg-white text-black text-xs px-2 py-1 rounded-full">
              Sapa-Lào Cai
            </span>
          </div>
          <div className="absolute top-2 right-2">
            <button className="bg-white p-1 rounded-full text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.172a4 4 0 015.656 5.656l-6.364 6.364a1 1 0 01-1.414 0l-6.364-6.364a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <h3 className="text-lg font-bold">Grand Resort Sapa-Lào Cai</h3>
          <div className="flex items-center mt-2">
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-lg">
              4.0/5.0
            </span>
            <span className="text-gray-500 text-xs ml-2">(1 review)</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xl font-bold text-black">1.000.000₫</span>
            <span className="text-red-500 line-through">1.500.000₫</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Similar;
