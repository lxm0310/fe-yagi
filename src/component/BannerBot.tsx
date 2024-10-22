import React from "react";
type Props = {};
const BannerBot = (props: Props) => {
  return (
    <>
      <div
        className="banner w-full h-[470px]"
        style={{
          backgroundImage: 'url("src/upload/bfBot.png")',
          backgroundSize: "cover",
        }}
      >
        <div className="text-center p-20">
          <p className=" text-[20px] font-bold text-[#FFFFFF]">TẦM NHÌN</p>
          <h1 className="font-taviraj italic text-[65px] font-extrabold text-[#FFFFFF]">
            Tôn vinh vẻ đẹp Việt Nam
          </h1>
          <p className="font-montserrat text-[20px] font-bold  text-[#FFFFFF]">
            Trở thành một trong những thương hiệu dịch vụ khách <br /> sạn hàng
            đầu khu vực Đông Nam Á, nâng cao vị thế và <br /> hình ảnh của Việt
            Nam
          </p>
        </div>
        <div className="font-montserrat  font-bold flex justify-center gap-3 text-center">
          <div className="w-[257px] h-[126px] bg-white">
            <p className="text-[50px] text-[#DF8D11BA]">40+</p>
            <p className="text-[15px] text-[#716868]">năm phát triển</p>
          </div>
          <div className="w-[257px] h-[126px] bg-white">
            <p className="text-[50px] text-[#DF8D11BA]">05</p>
            <p className="text-[15px] text-[#716868]">mô hình dịch vụ</p>
          </div>
          <div className="w-[257px] h-[126px] bg-white">
            <p className="text-[50px] text-[#DF8D11BA]">103</p>
            <p className="text-[15px] text-[#716868]">công ty thành viên</p>
          </div>
          <div className="w-[257px] h-[126px] bg-white">
            <p className="text-[50px] text-[#DF8D11BA]">200+</p>
            <p className="text-[15px] text-[#716868]">đối tác từ 30 quốc gia</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerBot;
