import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="font-sans ">
        {/* Header Section with Navigation */}
        <header className="absolute top-0 left-0 w-full z-10">
          <div className="flex items-center justify-between p-4 bg-[#00396B96] mb-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to={"/homepage"}></Link>
              <img
                src="src/upload/logo.png"
                alt="Hotel Logo"
                className="inline-block w-[214.05px] h-[85.59px]"
              />
            </div>

            {/* Navigation */}
            <nav className="flex-grow text-white text-[24px] text-center space-x-20">
              <a href="#" className="hover:text-yellow-400 hover:underline">
                Trang chủ
              </a>
              <a href="#" className="hover:text-yellow-400 hover:underline">
                Về chúng tôi
              </a>
              <a href="#" className="hover:text-yellow-400 hover:underline">
                Dịch vụ
              </a>
              <a href="#" className="hover:text-yellow-400 hover:underline">
                Tin tức
              </a>
              <a href="#" className="hover:text-yellow-400 hover:underline">
                Liên hệ
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
