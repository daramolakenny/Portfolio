import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div
      className="w-full relative bg-[#191923] pt-[50px] md:pt-[70px] md:pb-8 lg:pt-[90px] lg:pb-10"
      id="portfolio"
    >
      <div className="relative flex flex-col md:flex-row gap-2 container justify-around mx-auto text-white">
        <div className="flex flex-col w-full ml-6 md:w-[40%] items-start max-lg:py-4">
          <div className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-700 to-slate-200 mb-4">
            <a href="/">Portfolio</a>
          </div>
          <div className="flex-col items-start lg:flex-col">
            <div className="flex flex-col items-start pb-4 text-2xl md:items-start space-y-2">
              <h1 className="font-bold">Contact Me:</h1>
              <div className="flex items-center text-[22px] py">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+2348147655242">
                  <span className="text-gray-300">+234 8147 655 242</span>
                </a>
              </div>
              <div className="flex items-center text-[22px]">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:daramolakenny96@gmail.com">
                  <span className="pl-2 text-gray-300">
                    daramolakenny96@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start text-2xl md:items-start space-y-2">
              <h1 className="font-bold">My Profile:</h1>
              <div className="flex item-center gap-2">
                <a
                  href="https://x.com/ADEDEJI75478695"
                  className="bg-black p-2 flex items-center justify-center mt-2 rounded-full w-10 h-10"
                >
                  <FontAwesomeIcon icon={faX} className="text-[1rem]" />
                </a>
                <a
                  href="https://github.com/daramolakenny"
                  className="bg-black p-2 flex items-center justify-center mt-2 rounded-full w-10 h-10"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-[1rem]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daramola-kehinde-14028b292/"
                  className="bg-black p-2 flex items-center justify-center mt-2 rounded-full w-10 h-10"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-[1rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-black px-2 w-[95%] md:w-[30rem] ml-2 pb-2">
          <form
            action=""
            id="contactForm"
            className="flex flex-col pt-10 text-white"
          >
            <div className="flex flex-row border border-gray-500 mb-2">
              <div className="pt-6 w-14 bg-gray-700">
                <FontAwesomeIcon icon={faAt} className="pl-4" />
              </div>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First Name"
                className="w-full h-12 pl-2 pt-4 mb-4 placeholder-white bg-black text-gray-800 md:h-14 lg:h-16"
                required
              />
            </div>
            <div className="flex flex-row border border-gray-500 mb-2">
              <div className="pt-6 w-14 bg-gray-700">
                <FontAwesomeIcon icon={faAt} className="pl-4" />
              </div>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last Name"
                className="w-full h-12 pt-4 pl-2 mb-4 placeholder-white bg-black text-gray-800 md:h-14 lg:h-16"
                required
              />
            </div>
            <div className="flex flex-row border border-gray-500">
              <div className="pt-4 w-14 bg-gray-700">
                <FontAwesomeIcon icon={faEnvelope} className="pl-4" />
              </div>
              <textarea
                id="subject"
                name="subject"
                placeholder="Message"
                className="w-full h-36 pt-4 pl-2 placeholder-white bg-black text-gray-800 md:h-40 lg:h-44"
                required
              ></textarea>
            </div>
            <p id="status-message" className="text-white my-4"></p>
            <button type="submit" className="w-4 pb-4">
              <a className="button rounded-md bg-blue-500 text-white py-2 px-4 text-2xl">
                Submit
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;