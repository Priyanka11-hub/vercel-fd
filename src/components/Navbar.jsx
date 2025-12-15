import React, { useState } from "react";
import Logo from "../assets/logo1.jpg";
import lock from "../assets/lock.svg";
import Hamburger from "../assets/hamburgerMenu.svg";
import Close from "../assets/close.svg";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const activeClass =
    "text-[#155E63] font-semibold border-b-2 border-[#155E63]";
  const normalClass =
    "text-gray-700 hover:text-[#155E63] transition duration-300";

  return (
    <div className="w-full h-[96px] bg-[#F0FAF9] shadow-md fixed top-0 z-50">
      <div className="px-4 md:max-w-[1100px] max-w-[90%] mx-auto w-full h-full flex justify-between items-center">
        
        {/* LOGO */}
        <img
          src={Logo}
          alt="logo"
          className="h-[80px] cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center text-[16px]">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>
              About Us
            </NavLink>
          </li>
          {/* <Link to="/achievementpage">AchievementPage</Link> */}
          <li>
            <NavLink to="/achievementpage" className={({ isActive }) => isActive ? activeClass : normalClass}>
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="flex items-center gap-2 px-6 py-2 border border-[#155E63] text-[#155E63] rounded-md hover:bg-[#155E63] hover:text-white transition"
          >
            <img src={lock} alt="lock" />
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-2 bg-[#155E63] text-white rounded-md hover:bg-[#0f4c4f] transition"
          >
            Registration
          </Link>
        </div>

        {/* MOBILE ICON */}
        <motion.div
          whileTap={{ scale: 0.7 }}
          className="md:hidden cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <img src={toggle ? Close : Hamburger} alt="menu" />
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <motion.ul
        initial={{ x: 300 }}
        animate={{ x: toggle ? 0 : 300 }}
        transition={{ duration: 0.4 }}
        className="md:hidden absolute top-[96px] right-0 w-full bg-[#F0FAF9] shadow-lg"
      >
        {["Home", "About Us", "Achievements", "Contact Us"].map((item, index) => (
          <li
            key={index}
            className="p-5 border-b text-gray-700 hover:bg-[#E6F4F3] cursor-pointer"
          >
            {item}
          </li>
        ))}

        <div className="flex flex-col gap-4 p-4">
          <Link className="flex justify-center items-center gap-2 border border-[#155E63] py-3 rounded-md text-[#155E63]">
            <img src={lock} alt="lock" />
            Login
          </Link>
          <Link className="py-3 bg-[#155E63] text-white rounded-md text-center">
            Registration
          </Link>
        </div>
      </motion.ul>
    </div>
  );
};

export default Navbar;
