import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-1/4 left-[10%] flex flex-col">
          <h1 className="text-white font-montserrat text-4xl font-bold mb-4">
            Chào mừng bạn đến với YaGi Hotel
          </h1>
          <p className="text-white font-montserrat text-xl italic font-light">
            Nơi những cảm xúc được bắt đầu
          </p>
        </div>
        <img
          src="src/assets/img/dangki.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex flex-col p-12 justify-center">
        <div className="w-full max-w-md mx-auto">
          <h3 className="font-montserrat text-3xl font-bold mt-2">Đăng ký</h3>
          <p className="font-montserrat text-base font-light mb-6">
            Xin chào, hãy nhập thông tin để đăng ký.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="lastName"
                className="block font-montserrat text-sm font-medium mb-1"
              >
                Họ <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                id="lastName"
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block font-montserrat text-sm font-medium mb-1"
              >
                Tên <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="email"
                className="block font-montserrat text-sm font-medium mb-1"
              >
                Email <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block font-montserrat text-sm font-medium mb-1"
              >
                Số điện thoại <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                id="phoneNumber"
                className="w-full p-2 border border-gray-300 rounded"
                type="tel"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-montserrat text-sm font-medium mb-1"
            >
              Mật khẩu <span className="text-red-500 text-xs">*</span>
            </label>
            <input
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
            />
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-blue-700 transition duration-300">
            Đăng ký
          </button>
          <Link
            to={"/login"}
            className="w-full block text-center bg-white text-blue-600 font-bold py-2 px-4 rounded mb-4 border border-blue-600 hover:bg-blue-50 transition duration-300"
          >
            Đăng nhập
          </Link>
          <div className="text-center mb-4">
            <span className="text-gray-500">hoặc</span>
          </div>
          <button className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded mb-4 border border-gray-300 hover:bg-gray-50 transition duration-300 flex items-center justify-center">
            <img
              src="src/assets/img/dangki2.jpg"
              className="h-5 mr-2"
              alt="Google logo"
            />
            Đăng nhập với Google
          </button>
          <p className="text-sm text-center">
            Bạn đã có tài khoản?{" "}
            <Link to={"/login"} className="text-blue-600 hover:underline">
              Đăng nhập vào tài khoản.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
