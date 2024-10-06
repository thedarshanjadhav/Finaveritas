import Banner from "../assets/Images/Banner1.jpg";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  });

  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-0"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div
        className={`bg-black bg-opacity-50 p-6 md:p-10 rounded-lg text-white text-center transform transition-all duration-1000 ease-out z-0 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"
        }`}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Transforming Ideas into Digital Reality with Cutting-Edge Solutions
        </h1>
        <p className="text-sm md:text-lg mb-6">
          At Finaveritas Innovation, we deliver tailored web, software, and
          cloud solutions to help your business thrive in the digital age. From
          development to security, we ensure your digital assets are built to
          last.
        </p>

        <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 rounded-full text-sm md:text-lg hover:bg-blue-700 transition">
          Get Started Today
        </button>
      </div>
    </section>
  );
}
