import React from "react";
import { useLocation } from "react-router-dom";
import { navigation } from '../constant';
import Button from "./Button";
import { Spotlight } from "../component/ui/Spotlight";
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from "react";
import "../App.css";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 bg-black lg:backdrop-blur-sm ${
        openNavigation ? "bg-black" : "backdrop-blur-sm"
      }`}
    >
      <div className="w-full">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen max-w-full max-h-screen"
          fill="yellow"
        />
        <Spotlight
          className="top-10 -right-10 h-[80vh] w-[50vw] max-w-full max-h-full "
          fill="white"
        />
        <Spotlight
          className="top-28 left-80 max-w-full max-h-full h-[80vh] w-[50vw]"
          fill="green"
        />
      </div>

      <div className="max-w-screen-lg m-auto py-3">
        <div
          className="flex items-center container m-auto justify-between max-lg:py-4"
          href="#hero"
        >
          <div>
            <a href="/">
              <h1 className="text-3xl bg-gradient-to-r from-slate-600 to-slate-200">{`<Kenny />`}</h1>
            </a>
          </div>

          <nav
            className={`${
              openNavigation ? "flex bg-black" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-white transition-colors hover:bg-gradient-to-r from-slate-50 to-slate-700 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
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