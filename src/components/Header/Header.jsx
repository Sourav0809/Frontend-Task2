import { useState } from "react";
import "../../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import "../../App.css";
const Header = () => {
  // state for hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" sticky z-30 top-0 left-0 bg-white flex h-16  justify-around items-center rounded-sm font-custom shadow-md">
      <div
        className="flex justify-center items-center text-blue-950 p-4 cursor-pointer"
        onClick={() => {
          location.reload();
        }}
      >
        <img src="Logo3.png" width={250} height={300} />
      </div>

      <div className="flex items-center gap-6 text-[1.2rem] font-semibold p-4">
        {/* Responsive menu */}
        <div className=" relative flex  justify-center gap-4 items-center">
          <div
            className={`${
              isMenuOpen
                ? " flex flex-col lg:flex-row items-center  "
                : "hidden "
            } fixed lg:relative lg:top-0 lg:right-0 top-[4rem] right-0 w-56 min-[500px]:w-80 md:w-96 lg:w-auto h-[calc(100vh-4rem)] lg:h-fit lg:p-0 px-4 py-6 lg:bg-inherit bg-blue-300 text-xl font-custom lg:flex gap-8`}
          >
            <h1 className="hover:text-green-500 cursor-pointer">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
            </h1>
            <h1 className="hover:text-green-500 cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={1500}
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
            </h1>
            <h1 className="hover:text-green-500 cursor-pointer">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-220}
                duration={1500}
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Services
              </Link>
            </h1>
            <h1 className="hover:text-green-500 cursor-pointer">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Projects
              </Link>
            </h1>
            <h1 className="hover:text-green-500 cursor-pointer">
              <Link
                activeClass="active"
                to="clients"
                spy={true}
                smooth={true}
                offset={-200}
                duration={1500}
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Our Clinets
              </Link>
            </h1>
            <h1 className="hover:text-green-500 cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Contact Us
              </Link>
            </h1>
          </div>
          {!isMenuOpen ? (
            <GiHamburgerMenu
              className="text-3xl lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineClose
              className="text-3xl lg:hidden cursor-pointer "
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
