import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HeaderMain() {
  return (
    <div className="flex pt-28">
      <div className="md:text-left max-w-md mx-auto md:mx-0">
        <h4 className="text-[#3BCBB0] bg-[#3acbb01a] py-2 px-3 rounded-full tracking-[.15em] font-medium inline">
          STARTUP
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl my-4 font-semibold leading-tight">
          Build Amazing Startup Business Together
        </h1>

        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus
          eligendi totam culpa. Hic laboriosam, quis libero cumque iure
          assumenda.
        </p>
        <div className="flex flex-col my-3 gap-4 md:flex-row">
          <button className="bg-[#1C2639] text-white py-3 rounded font-medium md:px-8">
            Invest Now
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right-long"
              className="px-1"
            />
          </button>
          <button className="border py-3 rounded font-medium md:px-4">
            Learn More
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
