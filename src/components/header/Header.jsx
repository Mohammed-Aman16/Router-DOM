import React from 'react';
import logo from "../../assets/images/logo2.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=' fixed w-full py-7 flex justify-center items-center bg-transparent'>
        <div className=' w-3/4 h-[7vh] border-2 px-1 bg-[#e0e0e0e8] backdrop-blur-[10px] flex justify-between items-center rounded-3xl'>
          <div className='logo pb-2 flex items-center'>
            <img className='h-[30%] w-[30%]' src={logo} alt="logo" />
          </div>
          <div className='items flex gap-7 items-center'>
            <NavLink 
            to="/"
            className={({isActive}) =>
            `${isActive ? "text-[#003B25]" : "text-white"} font-bold text-xl hover:text-[#003B25]`
          }>
            Home
            </NavLink>
            <NavLink 
            to="/about"
            className={({isActive}) =>
            `${isActive ? "text-[#003B25]" : "text-white"} font-bold text-xl hover:text-[#003B25]`
          }>
            About
            </NavLink>
            <NavLink 
            to="/menu"
            className={({isActive}) =>
            `${isActive ? "text-[#003B25]" : "text-white"} font-bold text-xl hover:text-[#003B25]`
          }>
            Menu
            </NavLink>
            <NavLink 
            to="/contact"
            className={({isActive}) =>
            `${isActive ? "text-[#003B25]" : "text-white"} font-bold text-xl hover:text-[#003B25]`
          }>
            Contact
            </NavLink>
 
            <div className='button ml-5 text-white pr-3'>
            <button className='bg-[#003B25] px-5 py-2 rounded-xl hover:text-[#003B25] transition-all ease-in-out  hover:bg-white hover:border-2 border-[#003B25]'>Log In</button>
          </div>
          </div>

          

        </div>
      </div>
    </>
  );
}

export default Header;
