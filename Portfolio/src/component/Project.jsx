import React from 'react';
import Food from "/src/assets/images/Food.png";
import Expense from "/src/assets/images/Expense.png";
import Hamilton from "/src/assets/images/Hamilton.png";
import Uootes from "../assets/images/Uootes.png";
import Nextcommerce from "../assets/images/Nextcommerce.png";
import Apple from "/src/assets/images/Apple.png";
import { motion } from "framer-motion";

const Card = ({ title, imageSrc}) => (
  <div className="rounded-md block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4 shadow-2xl">
    <h2 className="text-2xl text-[#FFFFFF] px-2 font-bold">{title}</h2>
    <div>{imageSrc}</div>
  </div>
);

const Project = () => {
  return (
    <div className="w-full relative bg-[#38BDF8] pt-20 pb-20" id="project">
      <div className="flex flex-col container pb-4 md:mx-auto py-8 px-6 md:pl-[88px] md:px-6 text-white">
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -1 }} whileInView={{ opacity: 1, y: 0, scale: 1.25, rotate: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pt-2 md:max-w-[26rem] mx-auto text-center md:[24rem]]"
          >
            <h2 className="px-14 font-sans font-bold text-3xl pb-2">
              Recent{" "}
              <span className="text-[#1F2937] font-extrabold">Projects</span>
            </h2>
            <div className='justify-center mb-10 px-6'>
              These projects represent the culmination of my skills and
              expertise in front-end and back-end development, utilizing
              technologies such as the MERN stack (MongoDB, Express.js, React,
              Node.js), along with other cutting-edge tools.
            </div>
          </motion.div>

          <motion.div 
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1,
              scale: 1.15,
              transition: {
                duration: 2
              }
            }}
            className="flex flex-wrap pt-20 gap-6 justify-center md:px-2 lg:md:px-0 md:flex-row"
          >
              <div>
                <Card
                  title="Hamilton"
                  imageSrc={
                    <a href="http://hamiltontechnical.com">
                  <img
                      src={Hamilton}
                      alt="Hamilton"
                      className="h-48 py-6 rounded-lg"
                      width="300px"
                    />
                    </a>}
                />
              </div>

              <div>
                <Card
                  title="Fintech Website"
                  imageSrc={
                  <a href="http://Uootes.com">
                <img
                  src={Uootes}
                  alt="Uootes Website"
                  className="h-48 rounded-lg"
                  width="300px"
                /> </a>}
              />
              </div>

              <div>
                <Card
                  title="Expense Tracker"
                  imageSrc={
                    <a href="">
                      <img
                      src={Expense}
                      alt="Expense-Tracker"
                      className="h-48 rounded-md"
                      width="300px"
                    />
                  </a>}
              />
              </div>

              <div>
                <Card
                  title="Ecommerce"
                  imageSrc={
                    <a href="https://react-redux-commerce-h7hb.vercel.app/">
                      <img
                        src={Nextcommerce}
                        alt="React-Redux Ecommerce"
                        className="h-48 rounded-lg"
                        width="300px"
                      />
                    </a>}
                />
              </div>

              <div>
                <Card
                  title="FoodRecipe App"
                  imageSrc={
                  <img
                    src={Food}
                    alt="FoodRecipe App"
                    className="h-48 rounded-lg"
                    width="300px"
                  />}
                />
              </div>

              <div>
                <Card
                  title="Titanium App"
                  imageSrc={
                  <a href="">
                    <img
                      src={Apple}
                      alt="Apple"
                      className="h-48 rounded-lg"
                      width="300px "
                    />
                  </a>}
                />
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Project