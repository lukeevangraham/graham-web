// import Nav from "./nav";
import Toolbar from "./Navigation/Toolbar/Toolbar";

const Layout = ({ children, categories, seo, home }) => (
  <>
    {/* <Nav categories={categories} /> */}
    {home ? null : <Toolbar home={false} /> }
    {/* <Toolbar /> */}
    {children}
  </>
);

export default Layout;
