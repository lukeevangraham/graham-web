import classes from "./Button.module.scss";
import Link from "next/link";

const Button = ({ text, link, target, ghost }) => {
  let attachedClasses = [classes.Button];

  ghost ? attachedClasses.push(classes.Ghost) : null;

  return (
    <Link href={link}>
      {target === "_blank" ? (
        <a target="_blank" className={attachedClasses.join(" ")}>
          {text}
        </a>
      ) : (
        <a className={classes.Button}>{text}</a>
      )}
    </Link>
  );
};

export default Button;
