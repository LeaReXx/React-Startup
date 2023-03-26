import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TeamTogether() {
  return (
    <section className="container mx-auto px-3 max-w-[1330px] flex flex-col lg:flex-row lg:items-center lg:justify-between lg:my-32 xl:gap-14">
      <div className="mt-14 mb-8">
        <img
          src="./img/startup-banner4.png"
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
        <div className="my-1 md:text-left">
          <ul className="text-lg font-medium text-[#555555]">
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-circle-check"
                className="text-[#3BCBB0] text-2xl py-4 align-middle px-2"
              />
              Premium services and beyond your expectation
            </li>
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-circle-check"
                className="text-[#3BCBB0] text-2xl py-4 align-middle px-2"
              />
              Get the best support among all venders
            </li>
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-circle-check"
                className="text-[#3BCBB0] text-2xl py-4 align-middle px-2"
              />
              Great price competitive
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
