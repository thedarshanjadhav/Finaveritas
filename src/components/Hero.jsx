import Banner from "../assets/Images/Banner1.jpg";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference for the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when entering the viewport
        } else {
          setIsVisible(false); // Optionally reset the animation when out of the viewport
        }
      },
      {
        threshold: 0.1, // Adjust this based on how much of the component should be in the viewport before triggering
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the Hero section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-0"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div
        className={`bg-black bg-opacity-50 p-6 md:p-10 rounded-lg text-white text-center transform transition-all duration-1000 ease-out z-0 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-60"
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
