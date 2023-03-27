import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer className="bg-[#1c2639] pt-14 lg:pt-20 text-[#ffffff99]">
      <div className="container mx-auto px-3 py-4 max-w-[1330px] ">
        <div className="md:flex md:flex-wrap md:items-center md:gap-4 xl:gap-0">
          <div className="md:basis-1/2 xl:basis-2/6">
            <img src="./img/knor-footer.svg" alt="Footer logo" />
            <p className="py-5 text-lg">
              Knor agency helps millions of people get design and offers
              comprehensive services.
            </p>
            <div className="text-white flex gap-3 text-2xl">
              <a href="https://react.dev/">
                <FontAwesomeIcon icon="fa-brands fa-telegram" />
              </a>
              <a href="https://react.dev/">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </a>
              <a href="https://react.dev/">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
              <a href="https://react.dev/">
                <FontAwesomeIcon icon="fa-brands fa-spotify" />
              </a>
            </div>
          </div>

          <div className="my-12 px-5 md:basis-2/5 xl:basis-1/6">
            <h4 className="text-white text-xl font-medium pb-5">Plans</h4>
            <ul>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Enterprise</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Personal</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Getting Started</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Business</a>
              </li>
            </ul>
          </div>
          <div className="my-12 px-5 md:basis-1/2 xl:basis-1/6">
            <h4 className="text-white text-xl font-medium pb-5">Support</h4>
            <ul>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Help & Uses</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Support</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Forum</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Developers</a>
              </li>
            </ul>
          </div>
          <div className="my-12 px-5 md:basis-2/5 xl:basis-1/6">
            <h4 className="text-white text-xl font-medium pb-5">Company</h4>
            <ul>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Payment Method</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Cookie Policy</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Audio Podcasts</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Client Feedbacks</a>
              </li>
            </ul>
          </div>
          <div className="my-12 px-5 md:basis-1/2 xl:basis-1/6">
            <h4 className="text-white text-xl font-medium pb-5">Business</h4>
            <ul>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Features</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Software Center</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Certified Consultant</a>
              </li>
              <li className="smooth-trans hover:text-white py-1.5 font-light">
                <a href="https://react.dev/">Customer Stories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 max-w-[1330px] lg:flex border-t border-[#ffffff80]">
        <div className="px-3 text-center md:flex md:items-center md:justify-between md:w-full md:px-0">
          <p>
            Rewriting by{" "}
            <a
              href="mailto:dev.sepehr@outlook.com"
              className="smooth-trans hover:text-white"
            >
              Sepehr Aghapour
            </a>{" "}
            | 2023
          </p>
          <ul className="py-4">
            <li className="inline border-r border-[#ffffff80] px-2 smooth-trans hover:text-white">
              <a href="https://react.dev/">Privacy Policy</a>
            </li>
            <li className="inline px-2 smooth-trans hover:text-white">
              <a href="https://react.dev/">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
