import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {

  const [ select , setselect ] = useState(false) ;

  return (
    <div className="min-w-full font-normal shadow-md bg-white px-10 p-3">
      <div className=" md:flex gap-4 md:justify-end items-center hidden ">
      <Link onClick={ () => { setselect(!select) } } className=" cursor-pointer" to={"/"} >Home</Link>
        <Link onClick={ () => { setselect(!select) } } className=" cursor-pointer" to={"/grid"}>Grid</Link>
        <Link onClick={ () => { setselect(!select) } } className=" cursor-pointer">linkedIn</Link>
        {/* <div className=" cursor-pointer">LinkedIn</div> */}
      </div>

      <div className='w-full'>
        <div className=' flex gap-4 justify-end items-center md:hidden ' onClick={ () => { setselect(!select) } } >
          <IoReorderThreeOutline className='text-2xl'/>
        </div>
        <div className={`w-full md:hidden ${select ? "flex flex-col items-center" : "hidden" } `}>

        <Link onClick={ () => { setselect(!select) } } to={"/"} className=" cursor-pointer" >Home</Link>
        <Link onClick={ () => { setselect(!select) } } to={"/grid"} className=" cursor-pointer">Grid</Link>
        <Link onClick={ () => { setselect(!select) } } className=" cursor-pointer">linkedIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
