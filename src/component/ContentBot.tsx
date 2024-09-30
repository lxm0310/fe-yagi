import React from "react";
type Props = {};
const ContentBot = (props: Props) => {
  return (
    <>
      <div className="content flex justify-center gap-2">
        <div
          className="w-[443px] h-[395px]"
          style={{
            backgroundImage: 'url("src/upload/halong.png")',
            backgroundSize: "cover",
          }}
        >
          <div className="text mt-[300px] ml-[20px]">
            <a
              className="text-[36px] text-[#FFFFFF] hover:text-yellow-400 hover:underline"
              href=""
            >
              Hình Ảnh
              <p className="text-[20px]">Xem tất cả các hình ảnh</p>
            </a>
          </div>
        </div>
        <div className="">
          <iframe
            width="560"
            height="395px"
            src="https://www.youtube.com/embed/QSMpmdXQ9RM?si=Gotdfy_u5FUdcLcg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContentBot;
