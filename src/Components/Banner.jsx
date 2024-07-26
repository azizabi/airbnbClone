import React from "react";
import BannerSvg from "../assets/banner.svg";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[450px] 2xl:h-[550px] ">
      <img src={BannerSvg} className="object-cover h-full w-full" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button className="bg-white text-purple-500 py-4 rounded-full px-10 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  );
};

export default Banner;
