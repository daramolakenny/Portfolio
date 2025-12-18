import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="bg-[#1ab7fa] w-full relative pt-20 pb-10" id="service">
      <div className="container mx-auto py-8 md:pl-16">
        <h3 className="text-white px-14 font-bold text-1xl pb-2">
          My <span className="text-[#1F2937] text-lg">service</span>
        </h3>
        <h1 className="font-bold font-sans text-white px-14 text-4xl pb-4">
          What I Do
        </h1>

        <div className="flex flex-wrap gap-10 md:pl-20 px-14 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Card
              icon={<FontAwesomeIcon
                icon={faGear}
                className="w-14 h-14 rounded-full text-[#38BDF8] pb-8 bg-opacity-85"
              />}
              title="Full Stack Software Developer"
              description="I possess expertise in both front-end and back-end development. I
              design, develop, and maintain web applications from end to end. I
              have proficiency in using the MERN stack (MongoDB, Express.js,
              React, Node.js) or similar technologies to build scalable and
              efficient solutions."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -1 }}
            whileInView={{ opacity: 1, y:0, scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
              <Card
                icon={
                  <FontAwesomeIcon
                    icon={faCodepen}
                    className="w-14 h-14 rounded-full text-[#38BDF8] pb-6 bg-opacity-85"
                  />
                }
                title={"Front-end Development"}
                description="I focus on creating the user interface and user experience of web
              applications. I utilize technologies such as React, HTML, CSS, and
              JavaScript to build responsive and interactive interfaces. I
              translate design mockups into functional components and ensuring
              seamless interactions between users and the application."
              />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, y: 50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} 
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Card 
                icon={
                  <FontAwesomeIcon
                    icon={faKey}
                    className="w-14 h-14 rounded-full text-[#38BDF8] pb-6 bg-opacity-85"
                  />
                }
                title="Back-end Development"                
                description="I specialize in building the server-side logic and database
              management of web applications. I work with technologies like
              Node.js, Express.js, and databases such as MongoDB, SQL and
              similar ones.I implement APIs, handle data storage and retrieval,
              and ensure the overall performance and security of the
              application."
              />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Service;
