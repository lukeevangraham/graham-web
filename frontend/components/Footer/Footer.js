import classes from "./Footer.module.scss";

const Footer = () => (
  <div className={classes.Footer}>
    <div>Copyright &copy; {new Date().getFullYear()} Luke Graham</div>
    <div className={classes.Footer__icons}>
      <a
        href="https://github.com/lukeevangraham"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className={classes.Footer__iconSingle}>
          <use xlinkHref="./sprite.svg#icon-github" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/luke-graham-1865693/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className={classes.Footer__iconSingle}>
          <use xlinkHref="./sprite.svg#icon-linkedin" />
        </svg>
      </a>
    </div>
  </div>
);

export default Footer;
