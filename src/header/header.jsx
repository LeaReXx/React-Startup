import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import HeaderMain from "./main/header-main";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  let ToggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  let mobileMenuTreeHandler = (event) => {
    event.currentTarget.nextElementSibling.style.height === "0px"
      ? (event.currentTarget.nextElementSibling.style.height =
          event.currentTarget.nextElementSibling.scrollHeight + "px")
      : (event.currentTarget.nextElementSibling.style.height = "0px");
  };
  return (
    <header className="container px-3 lg:pt-5 mx-auto">
      <div className="relative py-4 flex justify-between items-center">
        <div>
          <img src="./img/knor-logo.svg" alt="Main logo" />
        </div>
        <nav
          className={`absolute overflow-hidden invisible top-20 w-full bg-[#0e0e0ee7] text-white  shadow-2xl ${
            toggleMenu ? "active" : ""
          } lg:bg-inherit lg:shadow-none lg:text-black lg:w-auto lg:static lg:visible lg:overflow-visible`}
        >
          <ul className="hidden lg:flex lg:w-100 lg:block">
            <li className="desktop-tree-menu cursor-pointer relative px-5 mx-2">
              <span href="#" className="py-3 font-medium">
                Home
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-down"
                  className="text-sm px-1 text-slate-600"
                />
              </span>
              <ul className="bg-[#0e0e0ee7] absolute top-0 smooth-trans invisible p-2 rounded">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="desktop-tree-menu cursor-pointer relative px-5 mx-2">
              <span href="#" className="py-3 font-medium">
                Product
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-down"
                  className="text-sm px-1 text-slate-600"
                />
              </span>
              <ul className="bg-[#0e0e0ee7] absolute top-0 smooth-trans invisible p-2 rounded">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="desktop-tree-menu cursor-pointer relative px-5 mx-2">
              <span href="#" className="py-3 font-medium">
                Pages
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-down"
                  className="text-sm px-1 text-slate-600"
                />
              </span>
              <ul className="bg-[#0e0e0ee7] absolute top-0 smooth-trans invisible p-2 rounded">
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="px-4">
              <a href="#" className="py-3 font-medium">
                About Us
              </a>
            </li>
          </ul>

          {/* mobile menu  */}
          <ul className="lg:hidden">
            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <span
                className="py-2 block flex justify-between items-center"
                onClick={(event) => mobileMenuTreeHandler(event)}
              >
                Home
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="text-sm px-1 smooth-trans"
                />
              </span>
              <ul
                className="overflow-hidden h-0 px-3 smooth-trans"
                style={{ height: "0px" }}
              >
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <span
                className="py-2 block  flex justify-between  items-center"
                onClick={(event) => mobileMenuTreeHandler(event)}
              >
                Product
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="text-sm px-1 smooth-trans"
                />
              </span>
              <ul
                className="overflow-hidden h-0 px-3 smooth-trans"
                style={{ height: "0px" }}
              >
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <span
                className="py-2 block  flex justify-between  items-center"
                onClick={(event) => mobileMenuTreeHandler(event)}
              >
                Pages
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="text-sm px-1 smooth-trans"
                />
              </span>
              <ul
                className="overflow-hidden h-0 px-3 smooth-trans"
                style={{ height: "0px" }}
              >
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    About Us
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Services
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Team
                  </a>
                </li>
                <li className="text-[#ccc] hover:text-[#fff]">
                  <a href="" className="block mb-2">
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-items cursor-pointer py-2 px-3 border-b border-slate-500 ">
              <a
                href=""
                className="py-2 block  flex justify-between  items-center"
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
      <HeaderMain />
    </header>
  );
}
