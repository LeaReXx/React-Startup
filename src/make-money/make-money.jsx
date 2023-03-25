import React from "react";

export default function MakeMoney() {
  return (
    <section className="container mx-auto px-3 max-w-[1330px] flex flex-col lg:flex-row lg:items-center lg:justify-between lg:my-28 xl:gap-14">
      <div className="pl-4 mt-14 mb-8">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl lg:leading-[1.35]">
          How to Make Money Investing in Startups
        </h2>
        <p className="text-lg text-[#555555] py-5 md:py-8 lg:py-14 xl:py-10">
          When you invest in a startup crowdfunding site, you enter into an
          investment contract with the company. Broadly speaking, there are
          kinds of investment.
        </p>
        <div className="text-center my-3 md:text-left">
          <button class="bg-[#1C2639] text-white py-4 rounded-xl font-medium md:px-8 smooth-trans hover:bg-[#3BCBB0] w-full md:w-auto lg:rounded">
            Our Services
          </button>
        </div>
      </div>
      <div>
        <img
          src="./img/startup-banner3.png"
          alt="About Investing Banner"
          className="lg:max-w-xl xl:max-w-2xl"
        />
      </div>
    </section>
  );
}
