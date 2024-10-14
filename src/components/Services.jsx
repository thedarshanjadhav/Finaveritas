import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceImg from "../assets/Images/Services.png";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when in view
        } else {
          setIsVisible(false); // Reset when out of view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      className="min-h-screen bg-white-200 p-10 flex items-center justify-center"
      ref={sectionRef} // Attach ref for the observer
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
        {/* Left Image - On mobile, we want this to appear after the text */}
        <motion.div
          className="lg:w-1/3 mt-10 lg:mt-0 order-2 lg:order-1"
          initial={{ opacity: 0, y: 200 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img src={ServiceImg} alt="Services" className="w-full h-auto" />
        </motion.div>

        {/* Right Content (Heading and List) - On mobile, we want this to appear first */}
        <motion.div
          className="lg:w-1/2 order-1 lg:order-2"
          initial={{ opacity: 0, y: 200 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-6">
            At Finaveritas Innovation Global Solution Pvt Ltd, we offer a wide
            range of IT services designed to cater to the ever-evolving needs of
            modern businesses.
          </p>

          {/* List of Services */}
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-bold">Custom Software Development:</span>{" "}
              Tailored software solutions that meet your business needs.
            </li>
            <li>
              <span className="font-bold">Cloud Solutions & Storage:</span>{" "}
              Secure and scalable cloud infrastructure.
            </li>
            <li>
              <span className="font-bold">
                Cybersecurity & Data Protection:
              </span>{" "}
              Protect your digital assets with advanced security measures.
            </li>
            <li>
              <span className="font-bold">Web Development:</span> Build a
              powerful online presence.
            </li>
            <li>
              <span className="font-bold">IT Consulting:</span> Get expert
              advice on leveraging technology.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
