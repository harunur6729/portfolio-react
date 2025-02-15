// import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaMicrosoft, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiExpress,} from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
// import { RiMicrosoftLoopFill, RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
import { FaNode,  } from "react-icons/fa6";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Google</h2>
              {/* <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p> */}
              <ul className="text-sm p-2">
                <li>- Browser debugging, DevTools for web development</li>
                <li>- Developing scalable and efficient web applications.</li>
                <li>- Enhancing user experience with optimized frontend solutions.</li>
                <li>- Implementing secure and reliable backend services.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <SiAdobephotoshop color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight"> Adobe Photoshop</h2>
              {/* <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p> */}
              <ul className="text-sm p-2">
                <li>- UI/UX design, photo editing</li>
                <li>- photo editing</li>
                <li>- graphic design</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaMicrosoft color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Microsoft Office</h2>
              {/* <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p> */}
              <ul className="text-sm p-2">
                <li>- Microsoft Word</li>
                <li>- Microsoft Excel</li>
                <li>- Microsoft PowerPoint</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
