import classes from "./Toolbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = ({ home, drawerToggleClicked, showSideDrawer }) => (
  <header
    className={
      home ? [classes.Toolbar, classes.Special].join(" ") : [classes.Toolbar, classes.notHome].join(" ")
    }
  >
    <Link href="/">
      <div className={classes.topBrand}>
        <Image
          src="/logoBlack.svg"
          height={50}
          width={50}
          className={classes.logo}
        />
        <div className={classes.topBrandName}>
          Graham
          <br />
          <span className={classes.webWorks}>Web Works</span>
        </div>
      </div>
    </Link>
    <DrawerToggle clicked={drawerToggleClicked} sideDrawerShown={showSideDrawer} />
    <nav className={classes.nav}>
      <ul className={classes.navItems}>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        {/* <li>
          <Link href="#">
            <a>Projects</a>
          </Link>
        </li> */}
        {/* <li>
          <Link href="#">
            <a>Services</a>
          </Link>
        </li> */}
        {/* <li>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  </header>
);

export default Toolbar;
