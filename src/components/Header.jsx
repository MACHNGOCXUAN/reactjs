import logo from "../assets/logo.png";
import defaultAvatar from "../assets/avatar.jpg";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  return (
    <div className="border-b-2">
      <header className="max-w-[1400px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <img className="max-w-52" src={logo} alt="Logo" />
          </Link>
          <div className="h-full relative">
            <CiSearch className="absolute top-2.5 left-2 size-5" />
            <input
              className="px-3 ps-10 max-w-72 w-72 py-2 bg-slate-200 rounded-lg outline-none"
              type="text"
              placeholder="What would you like to cook?"
            />
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-4">
            <li className="hover:text-gray-300 cursor-pointer">What to cook</li>
            <li className="hover:text-gray-300 cursor-pointer">Recipes</li>
            <li className="hover:text-gray-300 cursor-pointer">Ingredients</li>
            <li className="hover:text-gray-300 cursor-pointer">Occasions</li>
            <li className="hover:text-gray-300 cursor-pointer">About us</li>
          </ul>
          
          <ul className="flex gap-5 text-red-400 font-bold">
            <li className="cursor-pointer">
              Login
            </li>
            <li className="cursor-pointer">Register</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
