"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMail } from "react-icons/fi"; // Mail icon
import { motion } from "framer-motion";

const gradientColors = {
  default: ['#8750f7', '#0f0715'],
  hover: ['#0f0715', '#8750f7']
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full bg-[#0E0A16] sticky">
      <div className="container flex justify-between items-center py-4 text-white mx-auto px-4">
        <div className="flex items-baseline gap-1">
          {/* Logo Placeholder */}
          <div className="text-4xl font-bold italic">
          AS
          </div>
          {/* Email */}
          <div className="flex  text-sm">
           
            <span>DEVELOPER</span>
          </div>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-8">
            {["Home", "About", "Services", "Portfolios", "Blog", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className={`cursor-pointer flex items-center gap-1 ${
                    activeItem === item
                      ? "border-b-2 border-indigo-500"
                      : "hover:border-b-2 hover:border-gradient-to-r from-purple-400 to-indigo-500 transition-all duration-300"
                  }`}
                >
                  {item} 
                  {item === "Home" || item === "Blog" ? <span>+</span> : ""}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
        <motion.button
          className="bg-gradient-to-r p-2 px-4 rounded-xl text-white border-primary border"
          initial={{ backgroundImage: `linear-gradient(to right, ${gradientColors.default[0]}, ${gradientColors.default[1]})` }}
          whileHover={{ backgroundImage: `linear-gradient(to right, ${gradientColors.hover[0]}, ${gradientColors.hover[1]})` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Hire Me
        </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
