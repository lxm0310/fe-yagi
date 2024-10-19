import React from "react";
type Props = {};
const Evaluate = (props: Props) => {
  return (
    <>
      <hr className="w-[889px] ml-6" />
      <h1 className="text-[24px] font-bold m-4">Đánh giá</h1>
      <div className="flex justify-around w-[1000px]">
        {/* <!-- Phần bên trái - Tổng điểm --> */}
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg w-[250px] h-[205px]">
          <div className="text-blue-600 text-4xl font-bold">
            4.0<span className="text-xl">/5</span>
          </div>
          <div className="text-lg font-semibold">Xuất sắc</div>
          <div className="text-gray-500 text-sm">Từ 150 khách hàng</div>
        </div>

        {/* <!-- Phần bên phải - Các tiêu chí --> */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 w-[700px]">
          {/* Dịch vụ */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Dịch vụ</span>
              <span>5.0</span>
            </div>
            <div className="w-full h-1 bg-gray-200 relative">
              <div className="absolute top-0 left-0 h-1 bg-blue-600 w-full"></div>
            </div>
          </div>

          {/* Tiện ích */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Tiện ích</span>
              <span>5.0</span>
            </div>
            <div className="w-full h-1 bg-gray-200 relative">
              <div className="absolute top-0 left-0 h-1 bg-blue-600 w-full"></div>
            </div>
          </div>

          {/* Vị trí */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Vị trí</span>
              <span>5.0</span>
            </div>
            <div className="w-full h-1 bg-gray-200 relative">
              <div className="absolute top-0 left-0 h-1 bg-blue-600 w-full"></div>
            </div>
          </div>

          {/* Không gian */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Không gian</span>
              <span>5.0</span>
            </div>
            <div className="w-full h-1 bg-gray-200 relative">
              <div className="absolute top-0 left-0 h-1 bg-blue-600 w-full"></div>
            </div>
          </div>

          {/* Giá cả */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Giá cả</span>
              <span>5.0</span>
            </div>
            <div className="w-full h-1 bg-gray-200 relative">
              <div className="absolute top-0 left-0 h-1 bg-blue-600 w-full"></div>
            </div>
          </div>

          {/* Thiết kế */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Thiết kế</span>
              <span>5.0</span>
            </div>
            <div className="w-full h-1 bg-gray-200 relative">
              <div className="absolute top-0 left-0 h-1 bg-blue-600 w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8 w-[889px] ml-6" />
    </>
  );
};

export default Evaluate;
