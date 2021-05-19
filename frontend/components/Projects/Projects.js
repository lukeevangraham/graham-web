import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../../lib/media";
import Button from "../UI/Button/Button";
import Project from "./Project/Project"
import { Waypoint } from "react-waypoint";

import "animate.css";
import classes from "./Projects.module.scss";

const Projects = ({ projects }) => {
  const [animateProject, setAnimateProject] = useState("");

  return (
    <>
      <h2>Projects</h2>
      <div className={classes.projectWrapper}>
        {projects.map((project, index) => (
          <Project project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default Projects;
