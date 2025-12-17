import React from "react";
// import { navigation } from '../constant';

const Footer = () => {
  return (
    // <div className="w-full lg:backdrop-blur-sm">
      <div className="flex flex-col items-start max-lg:py-4" href="#hero">
        <div className="text-3xl bg-gradient-to-r from-slate-700 to-slate-200">
          <a href="/">Portfolio</a>
        </div>

        <div className="lg:static  lg:flex lg:bg-transparent">
          <div className=" flex flex-col items-center justify-center lg:flex-col">
            <div className="text-2xl">
              <h1 className="font-bold py-6 text-black">Address:</h1>{" "}
              <span>
                No 10, Idowukuye St Cele bus stop, Berger, Lagos State Nigeria.
              </span>
            </div>

            <div className="flex flex-col items-start text-2xl md:items-start space-y-2">
              <h1 className="font-bold">Contact Me:</h1>{" "}
              <div className="flex items-center text-sm py-3">
                <img
                  src="./src/assets/images/call.png"
                  alt="Call"
                  className="w-6 h-6 mr-2"
                />
                <a href="tel:+2348147655242">
                  <span className="text-gray-300">+234 8147 655 242</span>
                </a>
              </div>
              <div className="flex items-center text-sm">
                <img
                  src="./src/assets/images/me.png"
                  alt="Email"
                  className="w-6 h-6 mr-2"
                />
                <a href="mailto:daramolakenny96@gmail.com">
                  <span className="text-gray-300">
                    daramolakenny96@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-row items-start text-2xl md:items-start space-y-2">
              My Profile:{" "}
              <ol>
                <a href="https://x.com/ADEDEJI75478695">
                  <i className="fa-brands fa-youtube p-1 bg-blue-500 rounded-md shadow-xl opacity-100"></i>
                </a>
              </ol>
              <ol>
                <a href="https://github.com/daramolakenny">
                  <i className="fa-brands fa-github p-1 bg-blue-500 rounded-md shadow-xl opacity-100"></i>
                </a>
              </ol>
              <ol>
                <a href="https://www.linkedin.com/in/daramola-kehinde-14028b292/">
                  <i className="fa-brands fa-linkedin p-1 bg-blue-500 rounded-md shadow-xl opacity-100"></i>
                </a>
              </ol>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Footer;