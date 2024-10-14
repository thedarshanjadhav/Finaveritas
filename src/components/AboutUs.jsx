import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/Images/AboutUs.png";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Create a ref to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        } else {
          setIsVisible(false); // Reset animation when out of view if desired
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up the observer
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef} // Attach the ref to the section
      className="min-h-screen bg-gray-100 p-10 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-2">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 200 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            Finaveritas Innovation Global Solution Pvt Ltd is an IT startup
            committed to helping businesses transform their ideas into reality.
            We specialize in creating bespoke software, web applications, and
            secure cloud storage solutions. Our mission is to deliver
            cutting-edge technology solutions that empower businesses to grow
            and succeed in the digital age.
          </p>
          <p className="text-lg">
            With a focus on security, scalability, and innovation, we aim to
            build products that meet the demands of modern businesses and
            provide seamless experiences for their users.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/3 mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 200 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img src={AboutImg} alt="About Us" />
        </motion.div>
      </div>
    </section>
  );
}
