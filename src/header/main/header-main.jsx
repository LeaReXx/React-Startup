import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HeaderMain() {
  return (
    <div className="flex flex-col pt-28 lg:flex-row lg:justify-between lg:items-center">
      <div className="md:text-left max-w-md mx-auto md:mx-0">
        <h4 className="text-[#3BCBB0] bg-[#3acbb01a] py-2 px-3 rounded-full tracking-[.15em] font-medium inline">
          STARTUP
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl my-4 font-semibold leading-tight text-[#10101B]">
          Build Amazing Startup Business Together
        </h1>

        <p className="font-normal text-lg py-1 lg:py-3 text-[#555555]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus
          eligendi totam culpa. Hic laboriosam, quis libero cumque iure
          assumenda.
        </p>
        <div className="flex flex-col my-3 gap-4 md:flex-row">
          <button className="bg-[#1C2639] text-white py-3 rounded font-medium md:px-8 smooth-trans hover:bg-[#3BCBB0]">
            Invest Now
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right-long"
              className="px-1"
            />
          </button>
          <button className="border py-3 rounded font-medium md:px-4 smooth-trans hover:bg-[#3BCBB0] hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="p-5 my-2 lg:max-w-2xl 2xl:max-w-3xl">
        <img
          src="./img/startup-banner.png"
          alt="Startup banner"
          className="w-full"
        />
      </div>
    </div>
  );
}
