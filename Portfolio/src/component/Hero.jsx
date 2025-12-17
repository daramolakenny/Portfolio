import React from "react";
import Heroe from "/src/assets/images/Heroe.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";


const Hero = () => {
  useGSAP(() => {
    gsap.to(".g_btn", {
      y: 0,
      rotate: 360,
      // repeat: -1,
      // yoyo: true,
      duration: 1,
    });
    gsap.from(".g_body", { opacity: 0, y: 100, duration: 1 });
  }, []);

  return (
    <div className="bg-[#38BDF8] w-full relative pt-[50px]" id="home">
      <div className="flex flex-col container lg:flex-row justify-between mx-auto text-[#F87138]">
        <div className="text-center md:ml-20 max-w-[34rem] md:text-start py-6 g_body">
          <h1 className="text-3xl font-bold text-[#FFFFFF] py-3 pb-2 g_head">
            Hello, <span className="text-[#1F2937]">I'm</span>
          </h1>
          <h1 className="text-[#FFFFFF] text-5xl font-bold py-3 pb-2 g_name">
            Kehinde Daramola
          </h1>
          <h1 className="text-3xl text-[#FFFFFF] font-bold py-3 pb-2">Front-end Developer</h1>
          <div className="text-sm text-[#FFFFFF] pb-6 bg-blend-lighten mb-2 md:bg-blend-darken" id="heroText">
            Enthusiastic Front-end Developer with a robust foundation in Library
            and Information Science, aiming to integrate my analytical prowess
            and technical expertise to engineer cutting-edge solutions.
            Dedicated to propelling technological innovation and delivering
            top-tier results in a dynamic software development landscape.
          </div>
          <a href="tel:+2348147655242" className="rounded-md bg-[#F87138] text-[#FFFFFF] p-2 text-2xl g_btn">Let's Talk</a>
          
          <div className="text-white text-4xl pt-2 mt-6 pb-6">
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://x.com/ADEDEJI75478695"
                className="bg-[#1F2937] text-[#FFFFFF] flex items-center justify-center mt-2 rounded w-10 h-10"
              >
                <FontAwesomeIcon icon={faX} className="text-[1rem] g_btn" />
              </a>
              <a
                href="https://github.com/daramolakenny"
                className="bg-[#1F2937] text-[#FFFFFF] flex items-center justify-center mt-2 rounded w-10 h-10"
              >
                <FontAwesomeIcon icon={faGithub} className="text-[1.5rem] g_btn" />
              </a>
              <a
                href="https://www.linkedin.com/in/daramola-kehinde-14028b292/"
                className="bg-[#1F2937] text-[#FFFFFF] flex items-center justify-center mt-2 rounded w-10 h-10"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-[1.5rem] g_btn" />
              </a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{
            opacity: 0, y: 100, rotate: -1
          }}
          whileInView={{
            opacity: 1, y:0, scaleY: 1.5
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex max-w-[54rem] mr-20 justify-center items-center mt-6 lg:mt-0">
            {/* //  initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -1 }} whileInView={{ opacity: 1, y: 0, scale: 1.25, rotate: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} */}
          <img
            src={Heroe}
            className="h-80 w-100 hover:bg-[#F87138] hover:rounded-t-full hover:-translate-y-px"
            alt="Developer Image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;


// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port:500,
//     secure: false,
//     auth: {
//         user: "daramolakenny18@gmail.com",
//         password: "egbjrlneqdglbmzi",
//     }
// })

// const mail_configs = {
//     from: "daramolakenny18@gmail.com",
//     to: email,
//     subject,
//     text: message,
// };

// const sendMail = async (transporter, mail_configs) => {
//     try {
//         await transporter.sendMail();
//         console.log("mail send successfully");
//     } catch (error) {
//         console.log(error);
//     }
//     // if(error) {
//     //     console.log(error);
//     //     return reject({message: 'An error occurred'})
//     // }

//     // return resolve({ message: 'Email sent successfully' });
// };

// sendMail(transporter, mail_configs);

// egbjrlneqdglbmzi