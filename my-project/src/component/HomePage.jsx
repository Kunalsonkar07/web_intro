import React from "react";
import logo from "../assets/entrepreneurship_cell_nit_allahabad_logo.jpg";

const HomePage = () => {
  return (
    <div className="  w-[70%] h-contain mb-5 grid md:grid-cols-3 md:grid-rows-1 gap-3 sm:grid-cols-2 
        sm:grid-rows-2  grid-rows-3  mt-10 mx-auto sm:gap-4">
      <div className=" order-3 sm:order-1  sm:col-span-2 sm:w-[100%]  md:col-span-1 place-content-center h-[100%] md:aspect-square bg-gradient-to-br from-purple-800 to-pink-400 rounded-lg "></div>
      {/* <div className=" flex flex-col sm:flex-row flex-wrap sm:justify-around gap-10"> */}
        <img className=" order-2 sm:order-2   w-[100%] rounded-lg border place-content-center border-black p-4  " src={logo}></img>
        <div className=" order-1 sm:order-3  w-[100%] aspect-square place-content-center grid grid-cols-3 grid-rows-3 gap-2 bg-black p-2 rounded-lg ">
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
        </div>
        {/* </div> */}
    </div>
  );
};

export default HomePage;
