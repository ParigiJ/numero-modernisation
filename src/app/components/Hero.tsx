import React from "react";
import Button from "../_components/Button";

const Hero = () => {
  return (
    <section
      className="flex flex-col w-full sm:w-3/4 min-h-120 gap-10 items-center justify-center md:rounded-3xl 
    bg-linear-to-r/srgb from-teal-500 to-blue-400 text-center outline-1"
    >
      <div className="flex flex-col font-bold gap-4">
        <h1 className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-bold text-5xl">
          Numero
        </h1>
        <h1 className="text-4xl">All-in-One Fundraising Made Simple</h1>
      </div>
      <div className="flex flex-col gap-4 max-w-1/2 text-3xl font-medium items-start">
        <h2>Boost Your Campaign </h2>
        <h2>
          Connect with{" "}
          <span className="font-bold text-purple-600">7x more donors</span>
        </h2>
        <h2>Raise More, Work Less</h2>
      </div>
      <Button className="bg-purple-500 rounded-3xl">Get Pricing</Button>
    </section>
  );
};

export default Hero;
