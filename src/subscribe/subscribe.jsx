import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Subscribe() {
  return (
    <section className="bg-[#C6E0F9] py-14 mt-10 lg:mt-4 lg:py-20">
      <div className="container mx-auto px-3 py-4 max-w-[1330px] lg:flex lg:items-center lg:gap-4">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl lg:leading-[1.35]">
            Subscribe Our Newsletter For Latest Update
          </h2>
        </div>
        <div>
          <p className="my-10 text-[#555555] text-lg">
            Our Advisory board consist of senior profile people with decades of
            experience in financial services industry with presence.
          </p>
          <div className="mx-auto md:flex lg:mx-0 lg:max-w-[600px] relative">
            <div className="bg-white flex items-center rounded-xl overflow-hidden w-full">
              <FontAwesomeIcon icon="fa-regular fa-envelope" className="pl-5" />
              <input
                type="email"
                className="p-5 w-full focus:outline-none"
                placeholder="Enter your email here..."
              />
            </div>
            <button className="bg-[#1C2639] text-white w-full py-4 rounded-xl my-4 md:flex md:items-center md:w-auto md:px-4 md:my-0 md:py-5 md:absolute md:right-0">
              Subscribe 
              <FontAwesomeIcon
              icon="fa-solid fa-arrow-right-long"
              className="px-1 pl-5 align-middle hidden md:block"
            />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
