import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = (inView) => {
    if (inView) {
      setIsVisible(true);
    }
  };
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Company Info */}
          <motion.div
            className="mb-6 lg:mb-0"
            initial={{ opacity: 0, x: 200 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onViewportEnter={() => handleVisibility(true)}
          >
            <h4 className="text-xl font-semibold">
              Finaveritas Innovation Global Solution Pvt Ltd
            </h4>
            <p className="mt-2">#123, Tech Park, Bangalore, India</p>
            <p className="mt-1">Email: contact@finaveritas.com</p>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, x: 200 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onViewportEnter={() => handleVisibility(true)}
          >
            <a href="#" className="hover:text-indigo-500">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="hover:text-indigo-500">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="hover:text-indigo-500">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#" className="hover:text-indigo-500">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center text-gray-400"
          initial={{ opacity: 0, x: 200 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          onViewportEnter={() => handleVisibility(true)}
        >
          <p>
            © {new Date().getFullYear()} Finaveritas Innovation Global Solution
            Pvt Ltd. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
