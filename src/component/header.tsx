import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="font-sans">
        {/* Header Section with Navigation */}
        <header className="fixed top-0 left-0 w-full z-10">
          <div className="flex items-center justify-between p-4 bg-[#00396B96]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to={""}>
                <img
                  src="src/upload/logo.png"
                  alt="Hotel Logo"
                  className="inline-block w-[150px] h-[60px] md:w-[214.05px] md:h-[85.59px]"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="menu flex-grow text-white text-[16px] md:text-[24px] text-center space-x-4 md:space-x-20">
              <Link to="/" className="hover:text-yellow-400 hover:underline">
                Trang chủ
              </Link>
              <Link
                to="/gioithieu"
                className="hover:text-yellow-400 hover:underline"
              >
                Về chúng tôi
              </Link>
              <Link
                to="/dichvu"
                className="hover:text-yellow-400 hover:underline"
              >
                Dịch vụ
              </Link>
              <Link
                to="/tintuc"
                className="hover:text-yellow-400 hover:underline"
              >
                Tin tức
              </Link>
              <Link
                to="/lienhe"
                className="hover:text-yellow-400 hover:underline"
              >
                Liên hệ
              </Link>
            </nav>
          </div>
        </header>
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Header;
