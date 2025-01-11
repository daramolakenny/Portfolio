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
        <div className="flex flex-col w-full ml-16 md:w-[40%] items-start max-lg:py-4">
          <div className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-700 to-slate-200">
            <a href="/">Portfolio</a>
          </div>
          <div className="flex-col items-start lg:flex-col">
            <div className="text-2xl md:text-[28px] py-4 lg:text-2xl">
              <h1 className="font-bold">Address:</h1>
              <span>
                No 10, Idowukuye St Cele bus stop, <br /> Berger, Lagos State
                Nigeria.
              </span>
            </div>

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
                  href="https://www.youtube.com/@DaramolaKehinde-k9v"
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
            {/* <div className="flex items-center md:left-20">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Daramola Kehinde. All rights
                reserved.
              </p>
            </div> */}
          </div>
        </div>
        {/* <div className="bg-black px-2 w-full md:w-[40%] mx-4 pb-2">
          <form
            action=""
            id="contactForm"
            className="flex flex-col pt-10 text-white"
          >
            <div className="flex flex-row */}
        <div className="bg-black px-2 w-full md:w-[30rem] mx-10 pb-2">
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

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faGithub,
//   faEnvelope,
// } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

// const Footer = () => {
//   return (
//     <footer className="bg-[#191923] text-white py-6">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//         <div className="flex flex-col mb-4 md:mb-0">
//           <h2 className="text-2xl font-bold">Contact Me</h2>
//           <div className="flex items-center mt-2">
//             <FontAwesomeIcon icon={faPhone} className="mr-2" />
//             <a
//               href="tel:+2348147655242"
//               className="text-gray-300 hover:text-blue-500"
//             >
//               +234 8147 655 242
//             </a>
//           </div>
//           <div className="flex items-center mt-2">
//             <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
//             <a
//               href="mailto:daramolakenny96@gmail.com"
//               className="text-gray-300 hover:text-blue-500"
//             >
//               daramolakenny96@gmail.com
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col mb-4 md:mb-0">
//           <h2 className="text-2xl font-bold">Follow Me</h2>
//           <div className="flex space-x-4 mt-2">
//             <a
//               href="https://github.com/daramolakenny"
//               className="text-gray-300 hover:text-blue-500"
//             >
//               <FontAwesomeIcon icon={faGithub} size="lg" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/daramola-kehinde-14028b292/"
//               className="text-gray-300 hover:text-blue-500"
//             >
//               <FontAwesomeIcon icon={faLinkedin} size="lg" />
//             </a>
//             {/* Add more social links as needed */}
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-4 border-t border-gray-600 pt-4">
//         <p className="text-gray-400">
//           &copy; {new Date().getFullYear()} Daramola Kehinde. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;