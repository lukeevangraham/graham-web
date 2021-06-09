// import Nav from "./nav";
import { useState } from "react";
import Toolbar from "./Navigation/Toolbar/Toolbar";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";
import Footer from "./Footer/Footer";

const Layout = ({ children, categories, seo, home }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      {/* <Nav categories={categories} /> */}
      {home ? (
        <Toolbar home={true} drawerToggleClicked={sideDrawerToggleHandler} showSideDrawer={showSideDrawer} />
      ) : (
        <Toolbar home={false} drawerToggleClicked={sideDrawerToggleHandler} showSideDrawer={showSideDrawer} />
      )}
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      {/* <Toolbar /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
