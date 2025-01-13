import React from 'react';
import Foodrecipe from "/src/assets/images/Foodrecipe";
import expensetracker from "/src/assets/images/expensetracker.png";
import Hamilton from "/src/assets/images/Hamilton.png";
import Uootes from "/src/assets/images/Uootes.png";
import Brainwave from "/src/assets/images/Brainwave.png";
import Apple from "/src/assets/images/Apple.png";

const Project = () => {
  return (
    <div className="w-full relative bg-[#191923] pt-20 pb-6" id="project">
      <div className="flex flex-col container pb-4 md:mx-auto py-8 px-auto md:px-6 text-white">
        <div className="flex flex-col">
          <div className="py-4 max-w-[24rem] mx-auto text-center md:[]24rem]">
            <h2 className="text-white px-14 font-sans font-bold text-3xl pb-2">
              Recent{" "}
              <span className="text-blue-500 font-extrabold">Projects</span>
            </h2>
            <div>
              These projects represent the culmination of my skills and
              expertise in front-end and back-end development, utilizing
              technologies such as the MERN stack (MongoDB, Express.js, React,
              Node.js), along with other cutting-edge tools.
            </div>
          </div>

          <div className="flex flex-wrap mr-20 gap-10 md:flex-row ml-[5.5rem]">
            <div className="shadow-2xl">
              <h2 className="text-2xl font-bold">Hamilton</h2>
              <a href="http://hamiltontechnical.com">
                <img
                  src={Hamilton}
                  alt="Hamilton"
                  className="h-48 rounded-lg"
                  width="300px"
                />
              </a>
            </div>

            <div className="shadow-2xl">
              <h2 className="text-2xl font-bold">Uootes Web <span className='text-[18px]'>(in collaboration)</span></h2>
              <a href="http://Uootes.com">
                <img
                  src={Uootes}
                  alt="Uootes Website"
                  className="h-48 rounded-lg"
                  width="300px"
                />
              </a>
            </div>

            <div className="shadow-2xl">
              <h2 className="text-2xl font-bold">Expense Tracker</h2>
              <a href="">
                <img
                  src={expensetracker}
                  alt="Expense-Tracker"
                  className="h-48 rounded-md"
                  width="300px"
                />
              </a>
            </div>

            <div className="shadow-2xl" id="">
              <h2 className="text-2xl">FoodRecipe App</h2>
              <a href="">
                <img
                  src={Foodrecipe}
                  alt="FoodRecipe App"
                  className="h-48 rounded-lg"
                  width="300px"
                />
              </a>
            </div>

            <div className="shadow-2xl">
              <h2 className="text-2xl">Apple Phone</h2>
              <a href="">
                <img
                  src={Apple}
                  alt="Apple"
                  className="h-48 rounded-lg"
                  width="300px "
                />
              </a>
            </div>

            <div className="shadow-2xl">
              <h2 className="text-2xl">Brainwave</h2>
              <a href="">
                <img
                  src={Brainwave}
                  alt="Brainwave"
                  className="h-48 rounded-md"
                  width="300px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project

{/* <div class="bg-gray-500 pt-6 pb-0.5" id="project">
    <div class="max-w-screen-lg text-white m-auto mb-10 py-12">
      <h4 class="text-center font-bold pb-2">My <span class="text-blue-500">Jobs</span></h4>
      <h2 class="text-center font-bold pb-10 text-3xl md:text-3xl">Recent Projects</h2>
      <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <div class="shadow-2xl" id="" >
          <h2 class="text-2xl font-bold">Expense Tracker</h2>
          <a href="">
            <img src="../public/Asset/expense-tracker.png" alt="Expense Tracker App" class="h-48 rounded-lg" width="330px">
          </a>
        </div>

        <div class="text-2xl">
          <h2 class="text-2xl font-bold">FoodRecipe</h2>
          <a href="">
            <img src="../public/Asset/foodrecipe.png" alt="FoodRecipe App" class="h-48 rounded-lg" width="330px ">
          </a>
        </div>

        <div class="text-2xl">
          <h2 class="text-2xl font-bold">Weather App</h2>
          <a href="">
            <img src="../public/Asset/weather.png" alt="Weather App" class="h-48 rounded-md" width="330px">
          </a>
        </div>
      </div>
      <!-- <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <div class="shadow-2xl" id="" >
          <h2 class="text-2xl">Expense Tracker</h2>
          <a href="">
            <img src="./Asset/expense-tracker.png" alt="Expense Tracker App" class="h-48 rounded-lg" width="330px">
          </a>
        </div>

        <div class="text-2xl">
          <h2>FoodRecipe</h2>
          <a href="">
            <img src="./Asset/foodrecipe.png" alt="FoodRecipe App" class="h-48 rounded-lg" width="330px ">
          </a>
        </div>

        <div class="text-2xl">
          <h2>Weather App</h2>
          <a href="">
            <img src="./Asset/weather.png" alt="Weather App" class="h-48 rounded-md" width="330px">
          </a>
        </div>
      </div> -->
    </div>
  </div> */}