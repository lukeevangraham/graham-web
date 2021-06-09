import Link from "next/link";
import classes from "./SideDrawer.module.scss";

const SideDrawer = ({ open, closed, home }) => (
  <>
    <div className={home ? classes.Wrapper : [classes.Wrapper, classes.notHome].join(" ")}>
      <div
        className={
          open
            ? `${classes.SideDrawer} ${classes.Open}`
            : `${classes.SideDrawer} ${classes.Close}`
        }
      ></div>
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
  </>
);

export default SideDrawer;
