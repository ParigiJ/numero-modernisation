import React from "react";
import CheckIcon from "../_components/Icons/CheckIcon";
import Profile from "../_components/Profile";
import Calender from "../_components/Session";

const Connect = () => {
  const points = [
    "Instantly clean & dedupe your donor list",
    "Identify your top donor prospects in seconds",
    "Spot hidden max-out donors in your contacts",
    "Enjoy a chill, no-pressure walkthrough",
  ];

  return (
    <section
      className="flex flex-col w-full md:max-w-3/4 p-10 md:mt-5 justify-center items-center outline-1 md:rounded-2xl 
    gap-2 bg-linear-to-r/srgb from-pink-500 to-teal-400"
    >
      <h1 className="text-2xl">
        <span className="font-bold ml-10">Need Help with Numero?</span>
        <br />
        <span className="ml-50">- Meet our COS</span>
      </h1>
      <Profile />
      <p className="text-lg text-center text-background-600 max-w-xl mx-auto">
        Book a quick Zoom session with Eric and see how Numero can streamline
        your fundraising— no pressure, just insights tailored to your campaign.
      </p>
      <Calender />
      <ul className="flex flex-col mt-5 gap-5 justify-center text-center rounded-2xl">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckIcon />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Connect;
