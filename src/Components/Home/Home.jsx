// import React from "react";
import harun1 from "../../assets/profile_png1.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I  am a Computer Science and Engineering graduate from Daffodil
 International University. I am very passionate about web development. I
 have developed a strong foundation in MERN stack technologies,
 including MongoDB, Express.js, React.js, and Node.js. My goal is to create
 user-centric, efficient, and scalable web applications. I am now seeking
 an internship opportunity to apply my skills and contribute to impactful
 projects while continuing to grow as a developer.
        </p>
        <a href="#Footer">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>
      </div>
      <div className="md:w-2/4 flex justify-center">
        <img className="w-1/4 rounded-full" src={harun1} alt="" />
      </div>
    </div>
  );
};

export default Home;
