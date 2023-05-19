import "./Header.css";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div
      className={`flex justify-between pt-2 pb-2 pl-4 pr-4 items-center position: fixed w-full ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-[#edf2f8] text-black"
      }`}
    >
      <div>
        <p className="sm:text-[35px] font-semibold tracking-wide max-[600px]:text-3xl">
          Sub<span className="text-red-600">ham</span>
        </p>
      </div>
      <div className=" justify-between text-lg font-medium hidden sm:block">
        <ul className="flex justify-between gap-9">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#work">Work</a>
          </li>
          <li className="p__opensans">
            <a href="#skills">Skills</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
          {/* <li className="p__opensans">
            <a href="#contact">Resume</a>
          </li> */}
          {/* <button onClick={toggleTheme}>Toogle</button> */}
          {isDarkTheme ? (
            <div className="cursor-pointer">
              <BsFillSunFill onClick={toggleTheme} size={25} />
            </div>
          ) : (
            <div className="cursor-pointer">
              <BsFillMoonFill onClick={toggleTheme} size={20} />
            </div>
          )}
        </ul>
      </div>
      <div className="max-[600px]:w-28 max-[600px]:flex max-[600px]:justify-evenly max-[600px]:items-center lg:hidden md:hidden">
        <FaAlignRight
          className="ml-8 lg:hidden md:hidden"
          onClick={() => setToggleMenu(true)}
        />
        {isDarkTheme ? (
          <div className="cursor-pointer lg:hidden md:hidden">
            <BsFillSunFill onClick={toggleTheme} size={25} />
          </div>
        ) : (
          <div className="cursor-pointer lg:hidden md:hidden">
            <BsFillMoonFill onClick={toggleTheme} size={20} />
          </div>
        )}
      </div>
      {toggleMenu && (
        <div
          className={`w-full h-[100vh] position: absolute left-0 top-0 flex justify-center text-lg font-medium ${
            isDarkTheme ? "bg-slate-900 text-white" : "bg-[#edf2f8] text-black"
          }`}
        >
          <AiOutlineCloseCircle
            size={25}
            className="position: absolute right-5 top-3"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="position: absolute top-[50px]">
            <li className="mb-2">
              <a href="#home">Home</a>
            </li>
            <li className="mb-2">
              <a href="#about">About</a>
            </li>
            <li className="mb-2">
              <a href="#menu">Work</a>
            </li>
            <li className="mb-2">
              <a href="#awards">Skills</a>
            </li>
            <li className="mb-2">
              <a href="#contact">Contact</a>
            </li>
            {/* <li className="mb-2">
              <a href="#contact">Resume</a>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
