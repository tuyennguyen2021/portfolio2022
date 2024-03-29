import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import bgVideo from "../assets/bgVideo.webm";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

function Home() {
  const [state, setState] = useState("");
  const handler = (event) => {
    console.log(state);
    setState(event.key);
  };
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: -100, opacity: 0, transition: { duration: 10 } }}
    >
      <div className="overlay"></div>
      <video src={bgVideo} autoPlay loop muted />
      <div className="about">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(30)
              .typeString("Hi, my mame is Tuyen")
              .pauseFor(1000)
              .deleteAll()
              .changeDelay(30)
              .typeString("welcome to my portfolio :)")
              .start();
          }}
        />
        <div className="linkTo">
          <Link to="/projects" onKeyPress={(event) => handler(event)}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .changeDelay(100)
                  .typeString("Click here to!")
                  .deleteAll()
                  .typeString("Enter")
                  .start();
              }}
            />
          </Link>
        </div>
      </div>

      <div className="footer">
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
          <p> &copy; 2023 by Tuyen Nguyen</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
