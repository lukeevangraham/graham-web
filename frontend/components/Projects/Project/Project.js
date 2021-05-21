import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Waypoint } from "react-waypoint";
import { getStrapiMedia } from "../../../lib/media";
import Button from "../../UI/Button/Button";

import classes from "./Project.module.scss";

const Project = ({ project, index }) => {
  const [animateProject, setAnimateProject] = useState("");

  let attachedClasses = [classes.project];
  index % 2 ? attachedClasses.push(classes.projectFlipped) : null;

  return (
    <div key={project.id} className={attachedClasses.join(" ")}>
      <Link href={project.launchLink}>
        <a
          className={[classes.imageWrapper, animateProject].join(" ")}
          target="_blank"
        >
          <Waypoint
            onEnter={() =>
              setAnimateProject("animate__animated animate__fadeInUp")
            }
            bottomOffset={"300px"}
          />
          <div className={classes.image}>
              {/* src={`https://admin.lukegraham.us${project.image.url}`} */}
            <Image
              src="https://admin.lukegraham.us/uploads/seat_Save_Big_1532c466f5.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>
      </Link>
      <div className={classes.projectTextColumn}>
        <div className={classes.title}>{project.title}</div>
        <div className={classes.summary}>{project.summary}</div>
        <div className={classes.tools}>
          <div>
            <strong>Tools: </strong>
          </div>
          <div>{project.tools}</div>
          {/* <div className={classes.linkLabel}>
              <strong>Links: </strong>
            </div> */}
          <div className={classes.links}>
            <Button
              text={"Launch site"}
              link={project.launchLink}
              target="_blank"
              color="white"
            />
            <Button
              text={"View code"}
              link={project.codeLink}
              target="_blank"
              color="white"
              ghost
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
