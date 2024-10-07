import { useState } from "react";
import Logo from "../assets/Images/Logo1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  function handleSetActive(section) {
    setActiveSection(section);
    setIsOpen(false); // Close the menu when a section is clicked
  }

  return (
    <header className="fixed w-full bg-blue-600 text-white flex justify-between items-center md:px-6 px-3 md:py-0 py-2 z-50 shadow-lg">
      <div className="w-40 md:w-80 h-auto">
        {/* Link the logo to the home section */}
        <a href="#hero" onClick={() => handleSetActive("#hero")}>
          <img src={Logo} alt="company logo" />
        </a>
      </div>

      {/* Toggle between hamburger and close icon with animation */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={handleHamburger}
      >
        {isOpen ? (
          <RiCloseLargeFill
            size={25}
            className="transition-transform transform rotate-180"
          />
        ) : (
          <RxHamburgerMenu
            size={25}
            className="transition-transform transform rotate-0"
          />
        )}
      </button>

      {/* Smooth dropdown animation */}
      <nav
        className={`${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-500 ease-in-out overflow-hidden md:opacity-100 md:max-h-full absolute md:relative top-full left-0 w-full md:w-auto bg-blue-600 md:bg-transparent z-40`}
      >
        <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center p-4 md:p-0">
          {/** Links with animated line below **/}
          <li>
            <a
              href="#hero"
              className={`relative text-lg hover:text-yellow-400 transition-colors duration-300 after:block after:h-1 after:bg-yellow-400 after:scale-x-0 after:transition-transform after:origin-left after:duration-500 after:ease-in-out ${
                activeSection === "#hero"
                  ? "text-yellow-400 after:scale-x-100"
                  : ""
              }`}
              onClick={() => handleSetActive("#hero")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`relative text-lg hover:text-yellow-400 transition-colors duration-300 after:block after:h-1 after:bg-yellow-400 after:scale-x-0 after:transition-transform after:origin-left after:duration-500 after:ease-in-out ${
                activeSection === "#about"
                  ? "text-yellow-400 after:scale-x-100"
                  : ""
              }`}
              onClick={() => handleSetActive("#about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`relative text-lg hover:text-yellow-400 transition-colors duration-300 after:block after:h-1 after:bg-yellow-400 after:scale-x-0 after:transition-transform after:origin-left after:duration-500 after:ease-in-out ${
                activeSection === "#services"
                  ? "text-yellow-400 after:scale-x-100"
                  : ""
              }`}
              onClick={() => handleSetActive("#services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`relative text-lg hover:text-yellow-400 transition-colors duration-300 after:block after:h-1 after:bg-yellow-400 after:scale-x-0 after:transition-transform after:origin-left after:duration-500 after:ease-in-out ${
                activeSection === "#contact"
                  ? "text-yellow-400 after:scale-x-100"
                  : ""
              }`}
              onClick={() => handleSetActive("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
