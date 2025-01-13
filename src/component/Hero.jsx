import React from "react";
import Heroe from "/src/assets/images/Heroe.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Hero = () => {
  useGSAP(() => {
    gsap.to(".g_btn", {
      y: 0,
      rotate: 360,
      duration: 1,
    });
    gsap.from(".g_body", { opacity: 0, y: 100, duration: 1 });
  }, []);

  return (
    <div className="bg-[#191923] w-full relative pt-[50px]" id="home">
      <div className="flex flex-col container lg:flex-row justify-between mx-auto text-white">
        <div className="text-center md:ml-20 max-w-[34rem] md:text-start py-6 g_body">
          <h1 className="text-3xl font-bold py-3 pb-2 g_head">
            Hello, <span className="text-blue-500">I'm</span>
          </h1>
          <h1 className="text-blue-500 text-5xl font-bold py-3 pb-2 g_name">
            Kehinde Daramola
          </h1>
          <h1 className="text-3xl font-bold py-3 pb-2">Front-end Developer</h1>
          <div className="text-sm pb-6 bg-blend-lighten md:bg-blend-darken" id="heroText">
            Enthusiastic Front-end Developer with a robust foundation in Library
            and Information Science, aiming to integrate my analytical prowess
            and technical expertise to engineer cutting-edge solutions.
            Dedicated to propelling technological innovation and delivering
            top-tier results in a dynamic software development landscape.
          </div>
          <button className="pb-8 g_btn">
            <a
              href="tel:+2348147655242"
              className="button rounded-md bg-blue-500 text-white p-2 text-2xl"
            >
              Let's Talk
            </a>
          </button>
          <div className="text-white text-4xl pt-2 pb-6">
            <ul className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://x.com/ADEDEJI75478695"
                className="bg-blue-500 flex items-center justify-center mt-2 rounded w-10 h-10"
              >
                <FontAwesomeIcon icon={faX} className="text-[1rem]" />
              </a>
              <a
                href="https://github.com/daramolakenny"
                className="bg-blue-500 flex items-center justify-center mt-2 rounded w-10 h-10"
              >
                <FontAwesomeIcon icon={faGithub} className="text-[1.5rem]" />
              </a>
              <a
                href="https://www.linkedin.com/in/daramola-kehinde-14028b292/"
                className="bg-blue-500 flex items-center justify-center mt-2 rounded w-10 h-10"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-[1.5rem]" />
              </a>
            </ul>
          </div>
        </div>

        <div className="flex max-w-[54rem] mr-20 justify-center items-center mt-6 lg:mt-0">
          <img
            src={Heroe}
            className="h-80 w-100"
            alt="Developer Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
