import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

const Service = () => {
  return (
    <div className="bg-black w-full relative pt-20 pb-10" id="service">
      <div className="container mx-auto py-8 md:pl-16">
        <h3 className="text-white px-14 font-sans font-bold text-1xl pb-2">
          My <span className="text-blue-500">service</span>
        </h3>
        <h1 className="font-bold font-sans text-white px-14 text-4xl pb-4">
          What I Do
        </h1>

        <div className="flex flex-wrap gap-10 px-14 md:flex-row">
          <div className="bg-gray-500 block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4">
            <div className="item-center justify-center text-center pb-2">
              <FontAwesomeIcon
                icon={faGear}
                className="w-14 h-14 rounded-full text-blue-900 bg-opacity-85"
              />
            </div>
            <header className="text-center">
              Full Stack Software Developer
            </header>
            <p className=" py-2">
              I possess expertise in both front-end and back-end development. I
              design, develop, and maintain web applications from end to end. I
              have proficiency in using the MERN stack (MongoDB, Express.js,
              React, Node.js) or similar technologies to build scalable and
              efficient solutions.
            </p>
          </div>

          <div className="bg-gray-500 block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4">
            <div className="item-center justify-center text-center pb-2">
              <FontAwesomeIcon
                icon={faCodepen}
                className="w-14 h-14 rounded-full text-blue-900 bg-opacity-85"
              />
            </div>
            <header className="text-center">Front-end Development</header>
            <p className=" py-2">
              I focus on creating the user interface and user experience of web
              applications. I utilize technologies such as React, HTML, CSS, and
              JavaScript to build responsive and interactive interfaces. I
              translate design mockups into functional components and ensuring
              seamless interactions between users and the application.
            </p>
          </div>

          <div className="bg-gray-500 block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4">
            <div className="item-center justify-center text-center pb-2">
              <FontAwesomeIcon
                icon={faKey}
                className="w-14 h-14 rounded-full text-blue-900 bg-opacity-85"
              />
            </div>
            <header className="text-center">Back-end Development</header>
            <p className=" py-2">
              I specialize in building the server-side logic and database
              management of web applications. I work with technologies like
              Node.js, Express.js, and databases such as MongoDB, SQL and
              similar ones.I implement APIs, handle data storage and retrieval,
              and ensure the overall performance and security of the
              application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

{
  /* <section class="bg-gray-700 py-16" id="skills">
    <div class="max-w-screen-lg mx-auto py-12">
      <div class="flex flex-col md:flex-row max-w-screen-lg mx-auto justify-around text-white">
        <div class="text-center items-center md:text-left border-white">
          <!-- <h1 class="text-3xl font-bold py-3 pb-2">My, <span class="text-blue-500">Intro</span></h1> -->
          <h4 class="font-bold text-sm">Favourite <span class="text-blue-500">Skills</span></h4>
          <h1 class="text-3xl font-bold pb-2">My Skills</h1>
          <p class="text-sm pb-6 bg-blend-lighten md:bg-blend-darken">
            With the knowledge I have in web development and design,<br> I offer the best projects resulting in quality work.
          </p>
          <button class="pb-8">
            <a href="#project" class="button rounded-md bg-blue-600 text-white p-2 text-2xl">See Projects</a>
          </button>
        </div>

        <div class="flex items-center justify-around space-x-10">
          <ol class="flex flex-col">
            <li>HTML $ CSS</li>
            <li>Javascript</li>
            <li>Bootsrap</li>
            <li>React.Js</li>
            <li>React Testing Library</li>
            <li>jQuery</li>
          </ol>
          
          <ol class="flex flex-col" start="6">
            <li>Typescript</li>
            <li>Node</li>
            <li>Express</li>
            <li>Postman</li>
            <li>Postgress</li>
            <li>Git & GitHub</li>
          </ol>
        </div>
      </div>
    </div>
  </section> */
}
