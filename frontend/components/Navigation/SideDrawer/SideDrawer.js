import Link from "next/link";
import classes from "./SideDrawer.module.scss";

const SideDrawer = ({ open, closed }) => (
  <div className={classes.sideDrawerWrapper}>
    <div
      className={
        open
          ? `${classes.SideDrawer} ${classes.Open}`
          : `${classes.SideDrawer} ${classes.Close}`
      }
    ></div>
    <div className={classes.SideDrawerBackground}>&nbsp;</div>
    <div
      className={
        open
          ? `${classes.SideDrawer__content}  ${classes.OpenContent}`
          : `${classes.SideDrawer__content}  ${classes.ClosedContent}`
      }
    >
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default SideDrawer;
