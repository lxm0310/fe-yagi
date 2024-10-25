import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
          <h3 className="font-montserrat text-3xl font-bold mt-2">Đăng nhập</h3>
          <p className="font-montserrat text-base font-light mb-6">
            Xin chào, hãy nhập thông tin để đăng nhập.
          </p>
          <div className="mb-4">
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
          <div className="mb-4">
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
          <a
            href="#"
            className="text-blue-600 text-sm hover:underline block mb-6"
          >
            Quên mật khẩu
          </a>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-4 hover:bg-blue-700 transition duration-300">
            Đăng nhập
          </button>
          <Link
            to={"/register"}
            className="w-full block text-center bg-white text-blue-600 font-bold py-2 px-4 rounded mb-4 border border-blue-600 hover:bg-blue-50 transition duration-300"
          >
            Đăng ký
          </Link>
          <div className="text-center my-4">
            <span className="px-2 bg-white relative z-10">hoặc</span>
            <hr className="my-2 border-gray-300" />
          </div>
          <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300">
            <img
              src="src/assets/img/dangki2.jpg"
              className="h-5 mr-2"
              alt="Google logo"
            />
            Đăng nhập với Google
          </button>
          <p className="text-sm text-center mt-6">
            Bạn chưa có tài khoản?{" "}
            <Link to={"/register"} className="text-blue-600 hover:underline">
              Tạo tài khoản mới.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
