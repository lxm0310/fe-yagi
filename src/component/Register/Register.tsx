import React from "react";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col p-4">
          <h1 className=" text-[#ffffff] font-montserrat text-4xl font-bold leading-[58.51px] text-left">
            Chào mừng bạn đến với YaGi Hotel
          </h1>
          <p className="text-[#ffffff]  font-montserrat text-xl italic font-extralight leading-[29.26px] text-left">
            Nơi những cảm xúc được bắt đầu
          </p>
        </div>
        <img
          src="src/assets/img/dangki.jpg "
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-1/2 h-full bg-[#ffffff] flex flex-col p-8 justify-between">
        <div className="w-full ml-[120px] mt-20 flex flex-col max-w-[500px] ">
          <h3 className="font-montserrat text-3xl font-bold mb-2">Đăng nhập</h3>
          <p className="font-montserrat  text-base  text-[16px] font-medium leading-[18.29px] text-left">
            Xin chào, hãy nhập thông tin để đăng kí.
          </p>

          <div className="flex flex-row justify-center   space-x-8 mt-7">
            <div className="flex flex-col items-start relative">
              <label
                htmlFor="lastName"
                className="font-montserrat text-base  font-medium leading-[19.5px] text-left"
              >
                Họ
                <i className="fa-solid fa-star-of-life text-red-500 ml-1 text-[7px] absolute top-1"></i>
              </label>
              <input
                id="lastName"
                className="w-[212px] h-[27px] border border-[#B1A9A9] rounded-[3px] p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start relative">
              <label
                htmlFor="firstName"
                className="font-montserrat text-base font-thin leading-[19.5px] text-left "
              >
                Tên
                <i className="fa-solid fa-star-of-life text-red-500 ml-1 text-[7px] absolute top-1"></i>
              </label>
              <input
                id="firstName"
                className="w-[212px] h-[27px] border border-[#B1A9A9] rounded-[3px] p-2"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-row justify-center space-x-8 mt-8">
            <div className="flex flex-col items-start relative">
              <label
                htmlFor="lastName"
                className="font-montserrat text-base font-medium leading-[19.5px] text-left "
              >
                Email
                <i className="fa-solid fa-star-of-life text-red-500 ml-1 text-[7px] absolute top-1"></i>
              </label>
              <input
                id="email"
                className="w-[212px] h-[27px] border border-[#B1A9A9] rounded-[3px] p-2"
                type="email"
              />
            </div>
            <div className="flex flex-col  items-start relative">
              <label
                htmlFor="firstName"
                className="font-montserrat text-base font-medium leading-[19.5px] text-left "
              >
                Số điện thoại
                <i className="fa-solid fa-star-of-life text-red-500 ml-1 text-[7px] absolute top-1"></i>
              </label>
              <input
                id="phonenumber"
                className="w-[212px] h-[27px] border border-[#B1A9A9] rounded-[3px] p-2"
                type="number"
              />
            </div>
          </div>

          <div className="mt-7 ml-6 relative">
            <label
              htmlFor=""
              className="font-montserrat text-base font-medium leading-[19.5px] text-left"
            >
              Mật khẩu
            </label>
            <i className="fa-solid fa-star-of-life text-red-500 ml-1 text-[7px] absolute top-1"></i>
          </div>
          <input
            id="password"
            className="ml-6 max-w-[212px] max-h-[27px] border border-[#B1A9A9] rounded-[3px] text-[50px]"
            type="password"
          />

          <div className="w-full flex flex-col my-1  items-center ">
            <button className="w-2/3 text-white my-2  bg-[#0460B1D6] rounded-md p-2 text-center flex items-center justify-center">
              Đăng kí
            </button>
            <button className="w-2/3 text-[#0460B1D6] my-1  bg-[#f9fafbd6] border-2 boder-[#0460B1D6] rounded-md p-2 text-center flex items-center justify-center">
              Đăng nhập
            </button>
            <div className="w-full flex flex-col items-center justify-center ">
              <p className="text-md  text-black/80  bg-[#ffffff]">or</p>

              <div className="w-2/3 text-[#040404d6] my-2  bg-[#f9fafbd6] border-2 boder-[#0460B1D6] rounded-md p-2 text-center flex items-center justify-center">
                <img
                  src="src/assets/img/dangki2.jpg"
                  className="h-6 mr-2"
                  alt=""
                />
                Đăng nhập với Google
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <p className="text-sm font-normal text-[#0460B1D6]">
                Bạn đã có tài khoản?{" "}
                <span className="font">
                  <a href=""> Đăng nhập vào tài khoản.</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
