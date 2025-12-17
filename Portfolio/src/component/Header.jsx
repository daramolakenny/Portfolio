import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from '../constant';
import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from "react";
import "../App.css";
import { ThemeContext } from "../context/ThemeContextProvider";


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll();
    } else {
      setOpenNavigation(true);
      // disablePageScroll();
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] shadow-lg lg:backdrop-blur-sm ${
        openNavigation ? "bg-[#1A1A1A]" : "backdrop-blur-sm"
      }`}
    >
      <div className="max-w-screen-lg m-auto py-3">
        <div
          className="flex items-center container m-auto justify-between max-lg:py-4"
          href="#hero"
        >
          <div>
            <a href="/">
              <h1 className="text-2xl text-[#F87138]">
                Kenny
              </h1>
            </a>
          </div>

          <nav
            className={`${
              openNavigation ? "flex " : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-[#F87138] transition-colors  to-slate-100 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1`}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <HamburgerMenu />
          </nav>

          <Button className="ml-auto lg:hidden mr-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header