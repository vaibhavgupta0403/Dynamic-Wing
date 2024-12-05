import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-24" alt="logo" />

      <ul className="hidden sm:flex gap-5 text-sm text-yellow-800 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="parkinsans-bold">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/cart" className="flex flex-col items-center gap-1">
          <p className="parkinsans-bold">CART</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="parkinsans-bold">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="parkinsans-bold">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* <img src={assets.cart} className="w-5 cursor-pointer" alt="search" /> */}

        <div className="group relative">
          <img src={assets.profile} className="w-5 cursor-pointer " alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover::text-black">My Account</p>
              <p className="cursor-pointer hover::text-black">Orders</p>
              <p className="cursor-pointer hover::text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* <Link to='/cart' className='relative'>
            <img src={""} className='w-5' alt='cart'/>
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black'></p>

          </Link> */}
      </div>

      <img
        onClick={() => setVisible(true)}
        src={""}
        className="w-5 cursor-pointer sm:hidden"
        alt="menu"
      />
    </div>
  );
};

export default Navbar;
