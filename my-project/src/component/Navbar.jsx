import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

  const [ select , setselect ] = useState(false) ;

  return (
    <div className="min-w-full font-normal text-xl shadow-md bg-white  p-3 overflow-hidden">
      <div className=" sm:flex gap-4 sm:justify-end items-center hidden mr-6 ">
      <Link onClick={ () => { setselect(!select) } } className=" cursor-pointer" to={"/"} >Home</Link>
        <Link onClick={ () => { setselect(!select) } } className=" cursor-pointer" to={"/grid"}>Grid</Link>
        <a href='https://www.linkedin.com/in/kunal-sonkar-213b95282/' target='_blank' onClick={ () => { setselect(!select) } } className=" cursor-pointer">linkedIn</a>
        {/* <div className=" cursor-pointer">LinkedIn</div> */}
      </div>

      <div className='w-full'>
        <div className=' flex gap-4 justify-end text-4xl items-center sm:hidden ' onClick={ () => { setselect(!select) } } >
          {
            select ? <div><RxCross1/></div> : <div><IoReorderThreeOutline className=''/></div>
          }
          
        </div>
        <div className={`w-full sm:hidden ${select ? "flex flex-col items-center" : "hidden" } `}>

        <Link onClick={ () => { setselect(!select) } } to={"/"} className=" cursor-pointer" >Home</Link>
        <Link onClick={ () => { setselect(!select) } } to={"/grid"} className=" cursor-pointer">Grid</Link>
        <Link onClick={ () => { setselect(!select) } } className=" cursor-pointer">linkedIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
