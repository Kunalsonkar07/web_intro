import React, { useState } from "react";
import card from "../assets/card.jpg";
import photo from "../assets/squidguard.jpg";
import kunal from "../assets/kunalphoto.jpg";
import { CiInstagram } from "react-icons/ci";
const Themepage = () => {
  return (
    <div className=" z-10 min-h-screen overflow-hidden  pt-10"  style={{
      backgroundImage: `url(${photo})`,
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat", 
    }} >
      <div className=" h-screen flex flex-col justify-center items-center">
        {/* <img src={card} className="w-[40%]"></img> */}
        <div className=" w-[50%] md:w-[70%] h-full flex justify-center md:flex-row flex-col  md:gap-3 md:items-center md:justify-around gap-20">
          <div className=" flex justify-center items-center">
          <img
            src={kunal}
            className=" w-[200px] mt-2 aspect-square rounded-full "
          />
          </div>
          <div className=" flex justify-center items-center flex-col text-center text-gray-200 font-bold md:text-2xl text-xl ">
            <div className=" cursor-default">Kunal Sonkar</div>
            <div className=" cursor-default">20233172</div>
            <div className="flex gap-2 ">
              <div className=" cursor-default">kunal_2005_</div>
              <a
                href="https://www.instagram.com/kunal_2005_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl rounded-lg bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 "
              >
                <CiInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themepage;
