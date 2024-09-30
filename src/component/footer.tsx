import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#00396B] text-white py-8"
      style={{
        backgroundImage: 'url("src/upload/backgroundft.png")',
        backgroundSize: "cover",
      }}
    >
      <div className="bg-background text-foreground p-6">
        <div className="flex items-center gap-[200px]">
          <div className="logo ml-[30px]">
            <img src="src/upload/logo.png" alt="" />
          </div>
          <div>
            <div>
              <nav className="flex-grow text-white text-[20px] text-center space-x-7">
                <a href="#" className="hover:text-yellow-400 hover:underline">
                  Sang trọng
                </a>
                <a href="#" className="hover:text-yellow-400 hover:underline">
                  Tiện nghi
                </a>
                <a href="#" className="hover:text-yellow-400 hover:underline">
                  Lãng mạn
                </a>
                <a href="#" className="hover:text-yellow-400 hover:underline">
                  Phong cách
                </a>
                <a href="#" className="hover:text-yellow-400 hover:underline">
                  Thư giãn
                </a>
              </nav>
            </div>
            <hr className="mt-[46px] mb-[46px] w-[801px]" />
            <div className="flex flex-row gap-4">
              <div className="basis-1/4">
                <p className="text-[24px]">TỔNG CÔNG TY KHÁCH SẠN YAGI</p>
              </div>
              <div className="basis-1/2">
                <div className="flex items-center mb-2">
                  <img
                    alt="location-pin"
                    src="src/upload/iclc.png"
                    className="mr-2"
                  />
                  <span className="text-muted-foreground">
                    Trịnh Văn Bồ, Xuân Phương, Nam Từ Liêm, Hà Nội
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <img
                    alt="phone-icon"
                    src="src/upload/icF.png"
                    className="mr-2"
                  />
                  <span className="text-muted-foreground">
                    (84-28) - 927 5887
                  </span>
                </div>
                <div className="flex items-center">
                  <img
                    alt="email-icon"
                    src="src/upload/icE.png"
                    className="mr-2"
                  />
                  <span className="text-muted-foreground">
                    inforyagi@gmail.com.vn
                  </span>
                </div>
              </div>
              <div></div>
              <div className="basis-1/4 mt-[30px]">
                <div className="grid grid-cols-3">
                  <img src="src/upload/f.png" alt="" />
                  <img src="src/upload/p.png" alt="" />
                  <img src="src/upload/p.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-[70px] mb-[50px]" />
        <div className="flex justify-between">
          <div>
            <p>@2020 YaGiHotel Group</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p>Sơ đồ website</p>
            <p>Liên hệ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
