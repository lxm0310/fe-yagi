import React from "react";
import ProductDT from "../component/productDT";
type Props = {};
const ProductDetail = (props: Props) => {
  return (
    <>
      <div className="container mb-[100px] w-full">
        {/* <div className="relative h-screen">
          <div
            style={{
              backgroundImage: 'url("src/upload/banner2.png")',
              backgroundSize: "cover",
            }}
            className="absolute w-full h-[298px] ease-in-out"
          >
            <p className="italic text-[36px] text-center mt-[150px] text-[#FFFFFF]">
              Sang Trọng
            </p>
          </div>
        </div> */}
        <div className="relative h-[200px]">
          <div
            style={{
              backgroundImage: 'url("src/upload/banner2.png")',
              backgroundSize: "cover",
            }}
            className="absolute w-full h-[299px]"
          >
            <p className="italic text-[36px] text-center mt-[150px] text-[#FFFFFF]">
              Sang Trọng
            </p>
          </div>
        </div>
        <div className="content mt-[150px]">
          <div>
            <ProductDT />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
