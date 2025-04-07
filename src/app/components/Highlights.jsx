import React from "react";
import HighlightsList from "../_components/HighlightsList";

const Highlights = () => {
  return (
    <section className="relative md:mt-5 w-full md:w-5/6 px-6 py-16 bg-gradient-to-br from-[#C71585] via-purple-600 to-indigo-700 text-white md:rounded-3xl shadow-xl overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">✨ Meet Numero</h2>
        <p className="text-xl font-medium mb-8">
          Your all-in-one donor database & call time app — built for modern
          campaigns.
        </p>
        <span className="inline-block text-lg px-4 py-2 bg-white text-[#C71585] font-semibold rounded-full shadow-md">
          🌟 The most downloaded call time app
        </span>
        <HighlightsList />
        <div className="mt-12 flex flex-col items-center">
          <p className="text-lg text-white/90 mb-2">Explore the app →</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
