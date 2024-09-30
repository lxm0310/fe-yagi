import React from "react";

type Props = {};

const CategoryService = (props: Props) => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between m-10 gap-[14px]">
          <div
            style={{
              backgroundImage: 'url("src/upload/sangtrong.png")',
              backgroundSize: "cover",
            }}
            className="w-[266px] h-[266px] bg-center transform transition duration-500 hover:scale-110"
          >
            <p className="text-[36px] text-center mt-[85px] text-[#FFFFFF]">
              Sang Trọng
            </p>
          </div>
          <div
            style={{
              backgroundImage: 'url("src/upload/tiennghi.png")',
              backgroundSize: "cover",
            }}
            className="w-[266px] h-[266px] bg-center transform transition duration-500 hover:scale-110"
          >
            <p className="text-[36px] text-center mt-[85px] text-[#FFFFFF]">
              Tiện Nghi
            </p>
          </div>
          <div
            style={{
              backgroundImage: 'url("src/upload/langman.png")',
              backgroundSize: "cover",
            }}
            className="w-[266px] h-[266px] bg-center transform transition duration-500 hover:scale-110"
          >
            <p className="text-[36px] text-center mt-[85px] text-[#FFFFFF]">
              Lãng Mạn
            </p>
          </div>
          <div
            style={{
              backgroundImage: 'url("src/upload/phongcach.png")',
              backgroundSize: "cover",
            }}
            className="w-[266px] h-[266px] bg-center transform transition duration-500 hover:scale-110"
          >
            <p className="text-[36px] text-center mt-[85px] text-[#FFFFFF]">
              Phong Cách
            </p>
          </div>
          <div
            style={{
              backgroundImage: 'url("src/upload/thugian.png")',
              backgroundSize: "cover",
            }}
            className="w-[266px] h-[266px] bg-center transform transition duration-500 hover:scale-110"
          >
            <p className="text-[36px] text-center mt-[85px] text-[#FFFFFF]">
              Thư Giãn
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryService;
