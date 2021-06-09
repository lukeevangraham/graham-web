import classes from "./DrawerToggle.module.scss";

const DrawerToggle = ({ clicked, sideDrawerShown }) => (
  <div className={classes.DrawerToggle} onClick={clicked}>
    <div className={classes.DrawerToggle__wrapper}>
      <span className={sideDrawerShown ? [classes.DrawerToggle__icon, classes.DrawerToggle__iconOpen].join(" ") : classes.DrawerToggle__icon}>&nbsp;</span>
    </div>
    <div className={classes.DrawerToggle__background}></div>
  </div>
);

export default DrawerToggle;
