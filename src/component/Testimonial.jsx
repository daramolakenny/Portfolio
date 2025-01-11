import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <div className="bg-black w-full relative pt-20 pb-10" id="testimonial">
      <div className="container mx-auto py-8 md:pl-16">
        <h3 className="text-blue-500 px-14 font-sans font-bold text-1xl uppercase pb-2">
          Testimonial
        </h3>
        <h1 className="font-bold font-sans text-white px-14 text-4xl pb-4">
          What Clients Say
        </h1>
        <div className="flex flex-wrap gap-6 px-14">
          <div className="bg-gray-500 block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4">
            <div className="flex flex-row px-4 justify-between">
              <div>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-white text-2xl"
                />
              </div>
              <div className="">
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              </div>
            </div>
            <p className="px-4 py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              expedita minus velit distinctio eius. Possimus, at, quasi
              distinctio magnam cupiditate eveniet architecto maiores ab
              laboriosam nesciunt eius eaque animi odio.
            </p>
            <div className="flex gap-4 pl-4 pb-2">
              <img
                src={"kenny"}
                alt=""
                className="w-14 h-14 rounded-full bg-black"
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">Diana Jones</h1>
                <h4 className="text-gray-900 font-semibold">Web developer</h4>
              </div>
            </div>
          </div>

          <div className="bg-gray-500 block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4">
            <div className="flex flex-row px-4 justify-between">
              <div>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-white text-2xl"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              </div>
            </div>
            <p className="px-4 py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              expedita minus velit distinctio eius. Possimus, at, quasi
              distinctio magnam cupiditate eveniet architecto maiores ab
              laboriosam nesciunt eius eaque animi odio.
            </p>
            <div className="flex gap-4 pl-4 pb-2">
              <img
                src={"kenny"}
                alt=""
                className="w-14 h-14 rounded-full bg-black"
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">Diana Jones</h1>
                <h4 className="text-gray-900 font-semibold">Web developer</h4>
              </div>
            </div>
          </div>

          <div className="bg-gray-500 block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4">
            <div className="flex flex-row px-4 justify-between">
              <div>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-white text-2xl"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              </div>
            </div>
            <p className="px-4 py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              expedita minus velit distinctio eius. Possimus, at, quasi
              distinctio magnam cupiditate eveniet architecto maiores ab
              laboriosam nesciunt eius eaque animi odio.
            </p>
            <div className="flex gap-4 pl-4 pb-2">
              <img
                src={"kenny"}
                alt=""
                className="w-14 h-14 rounded-full bg-black"
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">Diana Jones</h1>
                <h4 className="text-gray-900 font-semibold">Web developer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial