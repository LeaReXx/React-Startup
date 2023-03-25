import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AboutInvesting() {
  return (
    <section className="container mx-auto px-3 max-w-[1330px] flex flex-col lg:flex-row lg:items-center lg:justify-between lg:my-28 xl:gap-14">
      <div className="mt-14 mb-8">
        <img
          src="./img/startup-banner2.png"
          alt="About Investing Banner"
          className="lg:max-w-xl xl:max-w-2xl"
        />
      </div>
      <div className="pl-4">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl lg:leading-[1.35]">
          Learn About Investing in Startups
        </h2>
        <p className="text-lg text-[#555555] py-5 md:py-8 lg:py-14 xl:py-10">
          Streamline your fundraising process with us. We are a team of
          fundraising experts who are 100% committed to making your startup a
          success.
        </p>
        <div className="text-center my-3 md:text-left">
          <button class="bg-[#1C2639] text-white py-4 rounded-xl font-medium md:px-8 smooth-trans hover:bg-[#3BCBB0] w-full md:w-auto lg:rounded">
            Start Invest Now
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right-long"
              className="px-1 pl-5 align-middle"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
