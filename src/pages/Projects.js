import React from "react";
import ProjectItem from "../components/ProjectItem";
import {
  projectCssList,
  projectMiniReactList,
  projectMainReactList,
} from "../helpers/ProjectList";
import "../styles/Project.css";
import bgImage from "../assets/bgImage.jpg";
import theGuy from "../assets/theguy.png";
import Typewriter from "typewriter-effect";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import myCv from "../assets/CVFE_final.pdf";
import { motion } from "framer-motion";

const contentStyle = {
  backgroundPosition: "top",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};

function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: -100, opacity: 0, transition: { duration: 10 } }}
      style={{ ...contentStyle, backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="theguyImg">
          <div className="move2">
            <img src={theGuy} alt="theguy" />
          </div>
        </div>
        <div className="info">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(30)
                .typeString("Hello, it's me again!!")
                .start();
            }}
          />
          <div className="title">
            <p>My full name: Nguyen Huynh Quang Tuyen</p>
            <p>28 years old</p>
            <p>Base in: District 12 , Ho Chi Minh City</p>
            <p>Contact number: (+84)985054958</p>
            <p>
              I’m a front-end developer, I love learning new technologies and
              building valuable application
            </p>
          </div>
          <div className="info__CV">
            <a className="downCv" href={myCv} download>
              Download CV
            </a>
          </div>
        </div>
      </div>
      <h1>CSS/JS Projects</h1>
      <div className="projectList">
        {projectCssList.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              skill={project.skill}
              demo={project.demo}
              src={project.src}
            />
          );
        })}
      </div>
      <h1>React Mini Projects</h1>
      <div className="projectList">
        {projectMiniReactList.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              skill={project.skill}
              demo={project.demo}
              src={project.src}
            />
          );
        })}
      </div>
      <h1>React Main Projects</h1>
      <div className="projectList">
        {projectMainReactList.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              skill={project.skill}
              demo={project.demo}
              src={project.src}
            />
          );
        })}
      </div>
      <div className="">
        <div className="socialMedia">
          <a href="">
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/tuyen-nguyen-7a0479220/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/tuyennguyen2021" target="_blank">
            <GithubIcon />
          </a>
          <p> &copy; 2022 by Tuyen Nguyen</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
