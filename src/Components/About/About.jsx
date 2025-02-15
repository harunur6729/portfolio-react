// import React from "react";
import AboutImg from "../../assets/Harun photo 1 copy.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 rounded-md" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Crafting responsive and dynamic user interfaces using React.js, Tailwind CSS, and modern UI libraries. I prioritize performance, accessibility, and a smooth user experience.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Building robust and scalable backend architectures using Node.js and Express.js. I focus on API development, authentication, and server-side logic to ensure seamless communication between the frontend and database.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Efficiently managing databases with MongoDB, designing schemas, and optimizing queries for high-performance applications. I ensure data integrity, security, and scalability.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
