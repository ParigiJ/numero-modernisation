"use client";
import { useState, useEffect } from "react";
import TestimonialCard from "../_components/TestimonialCard";
import testimonials from "../data/testimonials";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialsLength = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsLength);
        setIsTransitioning(false);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, [testimonialsLength]);

  const visible = [
    testimonials[(currentIndex - 1 + testimonialsLength) % testimonialsLength],
    testimonials[currentIndex % testimonialsLength],
    testimonials[(currentIndex + 1) % testimonialsLength],
  ];

  const handleClick = (idx) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative w-full overflow-hidden py-8">
      <div
        className={`flex justify-center items-center space-x-4 transition-all duration-500 ease-in-out ${
          isTransitioning ? "opacity-50" : "opacity-100"
        }`}
      >
        {visible.map((testimonial, idx) => (
          <div
            key={`${testimonial.name}-${idx}`}
            className={`
              transition-all duration-500 ease-in-out
              ${
                idx === 1
                  ? "w-full md:w-4/5 scale-100 z-10"
                  : "w-0 md:w-3/4 scale-90 opacity-70"
              }
            `}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
