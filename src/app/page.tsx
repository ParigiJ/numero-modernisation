import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Connect from "./components/Connect";
import Highlights from "./components/Highlights";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-white to-blue-100">
      <NavBar />
      <div className="flex flex-col md:mt-3 justify-center items-center min-h-3/4 ">
        <Hero />
        <Connect />
        <Highlights />
        <TestimonialCarousel />
      </div>
    </main>
  );
}
