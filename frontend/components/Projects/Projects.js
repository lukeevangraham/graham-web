import Project from "./Project/Project"

import "animate.css";
import classes from "./Projects.module.scss";

const Projects = ({ projects }) => {
  

  return (
    <>
      <h2>Projects</h2>
      <div className={classes.projectWrapper}>
        {projects.map((project, index) => (
          <Project project={project} index={index} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
