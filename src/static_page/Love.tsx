import React, { useEffect, useState } from 'react'
import Header from "../component/header";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Danhmucsp from '../component/danhmucsp';
import YeuThichsp from '../component/yeuthichsp';

type Props = {}

const Love = (props: Props) => {
  return (
  
    <>
      <div className="container mb-[100px] w-full">
       
        <div className="relative h-[300px]">
          <div style={{backgroundImage: 'url("src/upload/bfBot.png")',backgroundSize: "cover", }}
            className="absolute w-full h-[399px] ">
            <p className="font-taviraj text-[61px]  italic font-extrabold  text-center mt-[150px] text-[#FFFFFF]">
            Tận hưởng không gian thư giãn
            </p>
          </div>
        </div>
        <div className="content mt-[150px]">
          <div>
            <YeuThichsp />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Love