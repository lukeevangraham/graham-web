import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import classes from "./Project.module.scss";

const Projects = ({ projects }) => (
  <>
    <h2>Projects</h2>
    {projects.map((project) => (
      <div key={project.id} className={classes.project}>
        {console.log("PROJECT", project)}
        <div className={classes.imageWrapper}>
          <div className={classes.image}>
            <Image
              src={getStrapiMedia(project.image)}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={classes.projectTextColumn}>
          <div className={classes.title}>{project.title}</div>
          <div className={classes.summary}>{project.summary}</div>
          <div className={classes.tools}>
            <div>
              <strong>Tools: </strong>
            </div>
            <div>{project.tools}</div>
          </div>
          <div className={classes.link}>Links</div>
        </div>
      </div>
    ))}
  </>
);

export default Projects;
