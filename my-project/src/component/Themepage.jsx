import React, { useState } from "react";
import card from "../assets/card.jpg";
import photo from "../assets/kunalphoto.jpg";
import { CiInstagram } from "react-icons/ci";
const Themepage = () => {
  return (
    <div className=" min-h-[100%] overflow-hidden bg-gray-700 pt-10">
      <div className=" h-[100%] flex flex-col justify-center items-center">
        <img src={card} className="w-[40%]"></img>
        <div className="w-[50%] flex justify-around md:flex-row flex-col  md:gap-3 md:items-center">
          <div className="flex justify-center items-center">
          <img
            src={photo}
            className=" w-[200px] mt-2 aspect-square rounded-full "
          />
          </div>
          <div className=" flex justify-center items-center flex-col text-xl text-white font-bold ">
            <div className=" cursor-default">kunal Sonkar</div>
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
