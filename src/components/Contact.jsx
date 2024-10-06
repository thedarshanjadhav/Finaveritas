import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  const handleVisibility = (inView) => {
    if (inView) {
      setIsVisible(true);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 p-10 flex items-center justify-center"
      ref={contactRef}
    >
      <div className="container mx-auto px-5 py-16">
        {/* Contact Heading */}
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => handleVisibility(true)}
        >
          Contact Us
        </motion.h2>

        {/* Contact Form */}
        <motion.div
          className="w-full lg:w-2/3 mx-auto bg-white shadow-lg p-8 rounded-lg"
          initial={{ opacity: 0, x: -200 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          onViewportEnter={() => handleVisibility(true)}
        >
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
