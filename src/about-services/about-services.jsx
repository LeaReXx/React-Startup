import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "swiper/swiper-bundle.min.css";
import "./about-services.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AboutServices() {
  const options = {
    responsive: true,
    labels: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      legend: {
        display: false,
      },
    },
  };

  const labels = ["January", "February", "March", "April", "May"];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [40, 35, 60, 50, 60],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "black",
        borderWidth: 2,
        tension: 0.5
      },
    ],
  };

  let customersBrand = [
    { id: 1, title: "Discord", img: "./img/brand-icon/discord-logo.png" },
    { id: 2, title: "Google", img: "./img/brand-icon/google-logo.png" },
    { id: 3, title: "Meta", img: "./img/brand-icon/Meta-Logo.png" },
    { id: 4, title: "Paypal", img: "./img/brand-icon/paypal-logo.png" },
    { id: 5, title: "Slack", img: "./img/brand-icon/slack-logo.png" },
  ];
  return (
    <section className="container mx-auto px-3 max-w-[1330px]">
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            420: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}
        >
          {customersBrand.map((brand) => {
            return (
              <SwiperSlide key={brand.id}>
                <div className="max-w-[180px] h-[210px] flex items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 smooth-trans mx-auto">
                  <img src={brand.img} alt={brand.title} className="w-full" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-5 items-center ">
        <div className="bg-[#CAEFE8] p-5 rounded-3xl relative	lg:basis-1/3">
          <img
            src="./img/people.png"
            alt="People Icon"
            className="absolute top-5 right-5"
          />
          <h2 className="text-6xl font-bold mb-5">2M+</h2>
          <p>
            This is the number of our customers who actively use our services.
            You can view their reviews here. Or you can leave your own.
          </p>
        </div>
        <div className="about-service-ty-thumbnail-parent w-full  lg:basis-1/3 rounded-3xl h-[200px]  bg-[url('/public/img/yt-banner.webp')] bg-center bg-cover relative">
          <button className="absolute inset-1/4 opacity-70 hover:opacity-100 smooth-trans">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-play"
              className="	text-6xl text-[#3BCBB0] lg:text-5xl "
            />
          </button>
        </div>
        <div className="bg-[#C6E0F9] p-5 rounded-3xl relative w-full lg:w-40 lg:basis-1/2 ">
          <img
            src="./img/people.png"
            alt="People Icon"
            className="absolute top-5 right-5"
          />
          <p>Conversion rate increasing with our service</p>
          <h2 className="text-4xl font-semibold my-2">+28.5%</h2>
          <Line options={options} data={data} className='max-h-[100px]' />
        </div>
      </div>
    </section>
  );
}
