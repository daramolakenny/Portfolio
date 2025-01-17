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
              <h1 className="font-bold">Address:</h1>{" "}
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

// import React from 'react'
// import { navigation } from '../constant';

// const Footer = () => {
//   return (
//     <div className="w-full pl-10 lg:backdrop-blur-sm bg-black">
//       <div
//         className="flex flex-col items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"
//         href="#hero"
//       >
//         <a href="/">
//           <h1 className="text-3xl bg-gradient-to-r from-slate-50 to-slate-700">{`<Kenny />`}</h1>
//         </a>

//         <footer className="left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
//           <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-col">
//             {navigation.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 className="block relative font-code text-2xl uppercase text-white transition-colors hover:bg-gradient-to-r from-slate-50 to-slate-700 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1"
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Footer;
