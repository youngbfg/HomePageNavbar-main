import { useState } from "react";
import Logo from "../ui/Logo";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";

const Header = () => {

  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 relative w-full ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary !fixed"
      }`}
    >
      
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-50  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
        
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex  items-center ">
          
          <a href="#" className="md:inline-block hidden sm">
            <button className="bg-site rounded-3xl w-20 h-10">Order </button>
          </a>
          <a href="#" className="md:inline-block hidden sm">
            <button className="text-white bg-site w-10 h-10 rounded-3xl ">O</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Header;
