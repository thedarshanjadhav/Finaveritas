import { useState } from "react";
import { motion } from "framer-motion";
import ServiceImg from "../assets/Images/Services.png";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = (inView) => {
    if (inView) {
      setIsVisible(true);
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen bg-white-200 p-10 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
        {/* Left Image */}
        <motion.div
          className="lg:w-1/3 mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 200 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          onViewportEnter={() => handleVisibility(true)}
        >
          <img src={ServiceImg} alt="Services" className="w-full h-auto" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 200 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          onViewportEnter={() => handleVisibility(true)}
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
