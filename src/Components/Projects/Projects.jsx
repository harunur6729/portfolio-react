// import React from "react";
import ProjectCard from "./ProjectCard";
import healthcare from "../../assets/Project_img/FinalYearProject.png";
import dragonNews from "../../assets/Project_img/DragonNews.png";
import school from "../../assets/Project_img/school_manegement_system.png";
import wordTour from "../../assets/Project_img/wordTour.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
        bannerImg={healthcare}
          title="Public Healthcare System"
          main=" This is my final year web-based project "
          demoLink="https://public-healthcare-system-client.vercel.app/" 
          sourceLink="https://github.com/harunur6729/Public-Healthcare-System-Client"
        />

        <ProjectCard
          bannerImg={dragonNews}
          title="Dragon News "
          main=" This is a News Paper demo "
          demoLink="https://dragon-news-code.vercel.app/category/01"
          sourceLink="https://github.com/harunur6729/dragon-news-code"
        />

        <ProjectCard
          bannerImg={school}
          title=" School Management System "
          main=" This is my first static project "
          demoLink="https://islampur-girls-school.web.app/"
          sourceLink="https://github.com/harunur6729/Islampur-Girls-School"
        />
        <ProjectCard
          bannerImg={wordTour}
          title=" Word Tour "
          main=" This is Word Tour Project "
          demoLink="https://dragon-news-code-snou.vercel.app/"
          sourceLink="https://github.com/harunur6729/react-world-tour"
        />

        
      
      </div>
    </div>
  );
};

export default Projects;
