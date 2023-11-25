import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

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
        <img src="src\assets\logo\Logo3.png" width={250} height={300} />
      </div>

      <div className="flex items-center gap-6 text-[1.2rem] font-semibold p-4">
        {/* Responsive menu */}
        <div className=" relative flex justify-center gap-4 items-center">
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } fixed  lg:relative lg:top-0 lg:right-0  top-[4rem] right-0 w-80 lg:w-auto h-[calc(100vh-4rem)]   lg:h-fit lg:p-0 px-4 py-6 lg:bg-inherit bg-blue-300 text-xl font-custom  lg:flex gap-8`}
          >
            <h1 className="hover:text-green-500 cursor-pointer">Home</h1>
            <h1 className="hover:text-green-500 cursor-pointer">About</h1>
            <h1 className="hover:text-green-500 cursor-pointer">Services</h1>
            <h1 className="hover:text-green-500 cursor-pointer">Projects</h1>
            <h1 className="hover:text-green-500 cursor-pointer">Our Clients</h1>
            <h1 className="hover:text-green-500 cursor-pointer">Contact Us</h1>
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
