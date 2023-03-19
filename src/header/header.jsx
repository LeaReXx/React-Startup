import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  let ToggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="container px-3  mx-auto">
      <div className="relative py-4 flex justify-between items-center">
        <div>
          <img src="./img/knor-logo.svg" alt="Main logo" />
        </div>
        <nav
          className={` absolute overflow-hidden invisible top-20 w-full bg-[#0e0e0ee7] text-white lg:text-black shadow-2xl ${
            toggleMenu ? "active" : ""
          } lg:static lg:h-screen lg:visible  lg:shadow-none lg:w-auto lg:bg-inherit`}
        >
          <ul className="lg:p-0 lg:flex">
            <li className="nav-items py-2 px-3 border-b border-slate-500 lg:border-none">
              <a
                href="#"
                className="py-2 block lg:px-5 flex justify-between lg:justify-center items-center"
              >
                Home
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="text-sm px-1 smooth-trans"
                />
              </a>
              <ul className="overflow-hidden h-0 invisible px-3 lg:absolute lg:bg-[#0e0e0ee7] lg:p-3 lg:rounded lg:h-max">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-items py-2 px-3 border-b border-slate-500 lg:border-none">
              <a
                href="#"
                className="py-2 block lg:px-5 flex justify-between lg:justify-center items-center"
              >
                Product
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="text-sm px-1 smooth-trans"
                />
              </a>
                            <ul className="overflow-hidden h-0 invisible px-3 lg:absolute lg:bg-[#0e0e0ee7] lg:p-3 lg:rounded lg:h-max">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-items py-2 px-3 border-b border-slate-500 lg:border-none">
              <a
                href="#"
                className="py-2 block lg:px-5 flex justify-between lg:justify-center items-center"
              >
                Pages
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="text-sm px-1 smooth-trans"
                />
              </a>
              <ul className="overflow-hidden h-0 invisible px-3 lg:absolute lg:bg-[#0e0e0ee7] lg:p-3 lg:rounded lg:h-max">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block py-1">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-items py-2 px-3 border-b border-slate-500 lg:border-none">
              <a
                href="#"
                className="py-2 block lg:px-5 flex justify-between lg:justify-center items-center"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <a href="">
            <button className="bg-[#1C2639] text-white py-2 px-5 rounded smooth-trans hover:bg-[#3BCBB0]">
              Sign Up
            </button>
          </a>
        </div>
        <div
          className="text-3xl cursor-pointer lg:hidden	"
          onClick={ToggleMenuHandler}
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
      </div>
    </header>
  );
}
