import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faX } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "axios";

const Portfolio = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (event) => {
  event.preventDefault();
  axios.get("http://localhost:5000/Portfolio", {
    params: {
      email,
      subject,
      message,
    },
  })
  .then(() => {
    console.log("Email sent successfully");
    document.getElementById("status-message").innerText = "Email sent successfully";
  })
  .catch(() => {
    console.log("Failed to send email");
    document.getElementById("status-message").innerText = "Failed to send email";
  });
}

  return (
    <div
      className="w-full relative bg-[#1ab7fa] text-[#FFFFFF] pt-[50px] md:pt-[70px] md:pb-8 lg:pt-[90px] lg:pb-10"
      id="portfolio"
    >
      <motion.div 
        initial={{
          opacity: 0,
          rotate: -1
        }}
        whileInView={{
          opacity: 1,
          rotate:360,
          transition: {
            duration: 1.8
          }
        }}
        className="flex flex-col text-white pb-10">
        <h1 className="text-4xl text-center font-bold">Lets <span className="text-[#1F2937]">Connect</span></h1>
        <p className="text-center py-2">Have a project in mind? Let's work together to bring your ideas to life</p>
      </motion.div>
      
      <div className="relative flex flex-col md:flex-row gap-2 container justify-center mx-auto text-[#F5F5F5]">
        <div className="flex flex-col ml-2 mr-6  items-start max-lg:py-4 p-2 rounded-md">
          <div className="flex-col items-start lg:flex-col">
            <div className="flex flex-col items-start pb-4 text-2xl md:items-start space-y-2">
              
              <div className="flex items-center text-[22px]">
                <FontAwesomeIcon icon={faEnvelope} className="rounded-md bg-[#1F2937] hover:bg-[#F87138] hover:text-white text-[#38BDF8] p-4" />
                <a href="mailto:daramolaknny96@gmail.com">
                <div className="ml-2">
                  <h1 className="font-bold text-[#F3F4F6]">Email</h1>
                    <span className="text-[16px] text-gray-100">
                      daramolakenny96@gmail.com
                    </span>
                </div>
                </a>
              </div>

              <div className="flex items-center text-[22px] py">
                <FontAwesomeIcon icon={faPhone} className="rounded-md bg-[#1F2937] hover:bg-[#F87138] hover:text-white text-[#38BDF8] p-4" />
                <div className="ml-2">
                  <h1 className="font-bold">Phone</h1>
                  <a href="tel:+2348147655242">
                    <span className="text-[16px] text-gray-100">+234 8147 655 242</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center text-[22px] cursor-pointer">
                <FontAwesomeIcon icon={faLocation} className="rounded-md bg-[#1F2937] hover:bg-[#F87138] hover:text-white text-[#38BDF8] p-4" />
                <div className="ml-2">
                  <h1 className="font-bold">Location</h1>
                    <span className="text-[16px] text-gray-100">
                      Lagos, Nigeria
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-2 md:w-[30rem] md:ml-14 pb-2 rounded-md">
          <form
            action=""
            id="contactForm"
            className="flex flex-col"
          >
            <div className="flex flex-col mb-2 ml-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your name"
                className="w-full h-10 px-4 bg-[#38BDF8] shadow-lg rounded-xl placeholder:text-gray-100 md:h-10 lg:h-12 focus:outline-none focus:shadow-none cursor-pointer"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="flex flex-col shadow-lg mb-2 ml-2">
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="your@email.com"
                className="w-full h-10 px-4 placeholder-[#1A1A1A] bg-[#38BDF8] shadow-lg rounded-xl placeholder:text-white md:h-10 lg:h-12 focus:outline-none focus:shadow-none cursor-pointer"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col shadow-lg mb-2 ml-2">
              <label htmlFor="">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Your message..."
                className="w-full h-20 pt-2 pl-2 bg-[#38BDF8] shadow-lg rounded-xl placeholder:text-white md:h-40 lg:h-44 focus:outline-none focus:shadow-none cursor-pointer"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <p id="status-message"  className="text-white my-4"></p> 
            <button type="submit" onClick={sendEmail} className="w-40 pb-4 ml-2 rounded-md bg-[#1F2937] hover:bg-[#F87138] hover:text-white text-[#38BDF8] py-2 px-4 text-2xl">
                Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;