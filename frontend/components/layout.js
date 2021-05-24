// import Nav from "./nav";
import Toolbar from "./Navigation/Toolbar/Toolbar";
import Footer from "./Footer/Footer";

const Layout = ({ children, categories, seo, home }) => (
  <>
    {/* <Nav categories={categories} /> */}
    {home ? null : <Toolbar home={false} />}
    {/* <Toolbar /> */}
    {children}
    <Footer />
  </>
);

export default Layout;
