import {
  Armchair,
  Bath,
  Bed,
  Coffee,
  Dumbbell,
  HandPlatter,
  LayoutGrid,
  MapPin,
  Martini,
  Snowflake,
  WashingMachine,
  Wifi,
  X,
} from "lucide-react";
import React, { useState } from "react";
import Evaluate from "./Evaluate";
import AllEvaluate from "./allEvaluate";
import FormComponent from "./formCmt";
import FormCmt from "./formCmt";
import Similar from "./similar";
import CardCarousel from "./CardCarousel ";

const ProductDT = () => {
  // Image sources for the slideshow
  const images = [
    "src/upload/dt1.png",
    "src/upload/dt2.png",
    "src/upload/dt3.png",
    "src/upload/dt4.png",
    "src/upload/dt5.png",
  ];
  const roomImages = [
    "src/upload/pr1.png",
    "src/upload/pr1.png",
    "src/upload/pr1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to show the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to show the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to show a selected image when a thumbnail is clicked
  const showImage = (index: any) => {
    setCurrentIndex(index);
  };
  //open modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="w-full ">
        <div className="">
          <div className="product flex flex-col lg:flex-row justify-center gap-5">
            <div className="cntRight">
              <div className="title mb-3">
                <h1 className="text-[20px] font-bold text-[#242222CC]">
                  Grand Resort Sapa-Lào Cai
                </h1>
                <div className="flex items-center">
                  <MapPin className=""></MapPin>
                  <p className="text-[13px]">
                    Sapa-Lào Cai - {""}
                    <a href="#" className="text-blue-600 hover:underline">
                      Xem trên bản đồ
                    </a>
                  </p>
                </div>
              </div>

              {/* Main Image with Slideshow */}
              <div className="relative">
                {/* Left Arrow */}
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 z-10"
                  onClick={prevSlide}
                >
                  &#10094;
                </button>
                <img
                  className="w-full lg:w-[884px] h-[300px] lg:h-[592px] object-cover"
                  src={images[currentIndex]}
                  alt="Resort"
                />
                {/* Right Arrow */}
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                  onClick={nextSlide}
                >
                  &#10095;
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-[17px] mt-2 overflow-x-auto">
                {images.map((image, index) => (
                  <img
                    key={index}
                    className={`w-[100px] lg:w-[163px] h-[70px] lg:h-[109px] object-cover cursor-pointer ${
                      index === currentIndex ? "opacity-100" : "opacity-60"
                    } transition-opacity duration-300 hover:opacity-100`}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    onClick={() => showImage(index)}
                  />
                ))}
              </div>

              <div className="des w-full lg:w-[858px] h-[198px] mt-6">
                <p className="text-[24px] font-bold">Mô tả</p>
                <span>
                  Silk Path Grand Resort & Spa Sapa tọa lạc trên ngọn đồi riêng
                  tuyệt đẹp với tầm nhìn ôm trọn dãy núi Hoàng Liên Sơn bao
                  quanh là mây trắng bồng bềnh, cảm hứng từ những tòa lâu đài
                  Pháp kiêu sa với 152 phòng ngủ và biệt thự sang trọng. Sở hữu
                  vẻ đẹp tinh tế, quý phái theo phong cách kiến trúc Đông Dương
                  đặc trưng thời Pháp thuộc cùng họa tiết trang trí đậm nét văn
                  hóa Sapa bản địa, Silk Path Grand Resort & Spa Sapa tự hào là
                  khu nghỉ dưỡng đậm chất châu Âu thơ mộng giữa núi rừng Tây
                  Bắc...
                </span>
              </div>
            </div>

            <div className="cntLeft mt-[40px]">
              {/* Left side content (unchanged) */}
              <div className="p-4 bg-card rounded-lg shadow-md m-4">
                <div className="flex items-center gap-2">
                  <button className="border-inherit border w-[44px] h-[42px] p-3">
                    <img src="src/upload/tim.png" alt="" />
                  </button>
                  <button className="border-inherit border w-[44px] h-[42px] p-3">
                    <img src="src/upload/share.png" alt="" />
                  </button>
                  <span className="text-xl font-semibold border w-[69px] h-[41px] text-[#FFFFFF] text-center p-1 bg-[#0460B196]">
                    4.0/5
                  </span>
                  <div>
                    <p className="text-[#0460B196]">Phổ biến</p>
                    <p className="text-[12px] ml-2">(1 Review)</p>
                  </div>
                </div>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded">
                  Giá thấp nhất bao gồm:
                </button>
                <div className="mt-4">
                  <span className="text-lg font-bold">
                    Giá:{" "}
                    <span className="text-red-500 line-through">
                      1.500.000Đ
                    </span>{" "}
                    1.000.000Đ
                  </span>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium">
                    Check In-Out
                  </label>
                  <input
                    type="text"
                    value="01/09/2024 - 10/09/2024"
                    className="mt-1 p-2 border border-border rounded w-full"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium">
                    Số lượng phòng và người
                  </label>
                  <select className="mt-1 p-2 border border-border rounded w-full">
                    <option>1 phòng - 4 người</option>
                  </select>
                </div>
                <button className="bg-[#0460B196] text-[#FFFFFF] font-bold w-full h-[47px] mt-2">
                  Cập nhật
                </button>
                <div className="mt-6">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold">3.7</span>
                    <span className="text-muted-foreground ml-2">
                      Địa điểm được đánh giá cao
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hơn 90% những đánh giá tích cực
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Địa điểm dễ dàng xác nhận
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Không gian thân thiện
                  </p>
                  <button className="mt-2 text-blue-500 hover:underline">
                    Show on Map
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="option m-7">
            <h1 className="text-[24px] text-[#000000CC] mb-6 font-bold">
              Chọn Phòng
            </h1>
            <div className="border rounded shadow-md w-full lg:w-[885px] h-[230px] mb-5">
              <p className="bg-[#F5A52DBA] w-[138px] h-[21px] float-right text-center rounded text-xs p-1 m-2 text-[#FFFFFF]">
                Rẻ nhất hôm nay
              </p>
              <div className="flex flex-col lg:flex-row gap-8 mt-10 ml-[20px]">
                <div>
                  <img src="src/upload/pr1.png" alt="" />
                </div>
                <div className="m-4">
                  <p className="text-[15px] font-bold mb-5">Giường đôi</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <LayoutGrid className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          15m2
                        </span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Wifi className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          Wifi miễn phí
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <Bed className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          2 giường đơn
                        </span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Bath className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          Vòi sen và bồn tắm
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="text-[#022747BD] text-[12px] hover:underline focus:outline-none"
                  >
                    Ảnh phòng và chi tiết
                  </button>
                </div>
                <div className="m-7">
                  <div>
                    <span className="text-2xl font-bold">899.000₫</span>
                    <span className="text-gray-600 text-sm">/đêm</span>
                  </div>
                  <button className="border-[#0460B196] rounded border text-[#000000] font-bold w-full h-[47px] mt-2 hover:bg-[#0460B196]">
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
            <div className="border rounded shadow-md w-full lg:w-[885px] h-[230px] mb-5">
              <p className="bg-[#F5A52DBA] w-[138px] h-[21px] float-right text-center rounded text-xs p-1 m-2 text-[#FFFFFF]">
                Rẻ nhất hôm nay
              </p>
              <div className="flex flex-col lg:flex-row gap-8 mt-10 ml-[20px]">
                <div>
                  <img src="src/upload/pr1.png" alt="" />
                </div>
                <div className="m-4">
                  <p className="text-[15px] font-bold mb-5">Giường đôi</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <LayoutGrid className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          15m2
                        </span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Wifi className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          Wifi miễn phí
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <Bed className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          2 giường đơn
                        </span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Bath className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          Vòi sen và bồn tắm
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="text-[#022747BD] text-[12px] hover:underline focus:outline-none"
                  >
                    Ảnh phòng và chi tiết
                  </button>
                </div>
                <div className="m-7">
                  <div>
                    <span className="text-2xl font-bold">899.000₫</span>
                    <span className="text-gray-600 text-sm">/đêm</span>
                  </div>
                  <button className="border-[#0460B196] rounded border text-[#000000] font-bold w-full h-[47px] mt-2 hover:bg-[#0460B196]">
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
            <div className="border rounded shadow-md w-full lg:w-[885px] h-[230px] mb-5">
              <p className="bg-[#F5A52DBA] w-[138px] h-[21px] float-right text-center rounded text-xs p-1 m-2 text-[#FFFFFF]">
                Rẻ nhất hôm nay
              </p>
              <div className="flex flex-col lg:flex-row gap-8 mt-10 ml-[20px]">
                <div>
                  <img src="src/upload/pr1.png" alt="" />
                </div>
                <div className="m-4">
                  <p className="text-[15px] font-bold mb-5">Giường đôi</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <LayoutGrid className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          15m2
                        </span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Wifi className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          Wifi miễn phí
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <Bed className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          2 giường đơn
                        </span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Bath className="w-4 h-4 mr-1 text-[#022747BD]" />
                        <span className="text-[#022747BD] text-[15px]">
                          Vòi sen và bồn tắm
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="text-[#022747BD] text-[12px] hover:underline focus:outline-none"
                  >
                    Ảnh phòng và chi tiết
                  </button>
                </div>
                <div className="m-7">
                  <div>
                    <span className="text-2xl font-bold">899.000₫</span>
                    <span className="text-gray-600 text-sm">/đêm</span>
                  </div>
                  <button className="border-[#0460B196] rounded border text-[#000000] font-bold w-full h-[47px] mt-2 hover:bg-[#0460B196]">
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* moda detail */}

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-[90%] lg:w-[800px] relative">
                <button
                  className="absolute top-2 right-2 text-black text-xl"
                  onClick={closeModal}
                >
                  <X />
                </button>
                <h2 className="text-xl font-bold mb-4">Chi tiết ảnh phòng</h2>
                <div className="flex justify-around gap-2">
                  {roomImages.map((image, index) => (
                    <img
                      key={index}
                      className="w-[100px] lg:w-[200px] h-[75px] lg:h-[150px] object-cover"
                      src={image}
                      alt={`Room ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 ml-[10px] lg:ml-[50px] mt-3">
                  <div className="flex items-center mb-1">
                    <Wifi className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Wifi miễn phí
                    </span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Bath className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Vòi Hoa sen Và Bồn Tắm
                    </span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Snowflake className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Điều Hòa
                    </span>
                  </div>

                  <div className="flex items-center mb-1">
                    <WashingMachine className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Máy giặt
                    </span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Armchair className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Bàn Ghế
                    </span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Martini className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Mini Bar
                    </span>
                  </div>

                  <div className="flex items-center mb-1">
                    <Dumbbell className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Phòng Gym
                    </span>
                  </div>
                  <div className="flex items-center mb-1">
                    <HandPlatter className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">
                      Nhà Hàng
                    </span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Coffee className="w-4 h-4 mr-1 text-[#022747BD]" />
                    <span className="text-[#022747BD] text-[15px]">Càfe</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="Evaluate">
            <Evaluate />
          </div>
          <div className="allEvaluate">
            <AllEvaluate />
          </div>
          <div className="FormCmt ml-6">
            <FormCmt />
          </div>
          <div className="similarHotel">
            <CardCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDT;
