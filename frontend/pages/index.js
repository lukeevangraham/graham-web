import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Image from "next/image";
import Link from "next/link";
// import Logo from "../components/Logo/Logo"
import { fetchAPI } from "../lib/api";

import classes from "../assets/css/sass/pages/index.module.scss";

const Home = ({ articles, categories, homepage, projects, global }) => {
  return (
    <Layout categories={categories} home>
      <Seo seo={homepage.seo} />
      {/* <header className={classes.header}>
        <Image
          src="/logoBlack.svg"
          height={50}
          width={50}
          className={classes.logo}
        />
        <div className={classes.name}>Graham Web Works</div>
      </header> */}
      <section className={classes.heroWrap}>
        <div className={classes.aboveSVG}>
          <Toolbar home />
          {/* <div className={classes.topBrand}>
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
          <nav className={classes.nav}>
            <ul className={classes.navItems}>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav> */}
          <div className={classes.hero}>
            <div className={`${classes.heroText}`}>
              Hi, I'm <span className={classes.name}>Luke Graham</span>. <br />
              I'm a full-stack web developer.
            </div>
          </div>
          <ul className={classes.shapes}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f2f2f2"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
      </section>
      <section className={classes.projectsSection}>
        <Projects projects={projects} />
      </section>
      <Image src="/microphone.jpg" width={200} height={200} />
      {/* <section className={classes.textSection}>
        <div className={classes.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          a recusandae, atque velit eveniet et blanditiis assumenda, laborum
          dicta similique nostrum cumque qui laudantium dolores doloremque
          asperiores nihil cum voluptate!
        </div> */}
      {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#216077"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
      {/* </section> */}
      <section className={classes.contact}>
        <h2>Contact Me</h2>
        <Contact />
      </section>
      {/* <section className={classes.clients}>
        <div className={classes.clientTitle}>Satisfied Customers</div>
        <div className={classes.clientIcons}>
          <div className={classes.clientIcon}>
            <Image
              src="/clientLogos/walindwa.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={classes.clientIcon}>
            <Image
              src="/clientLogos/RBCommChurch_White.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={classes.clientIcon}>
            <Image
              src="/clientLogos/sanPedroLogo.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section> */}
      {/* <div className={`section group`}>
          <div className="col span_7_of_12">Column One</div>
          <div className="col span_5_of_12">Column Two</div>
        </div> */}
      {/* <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div> */}
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, projects] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/projects"),
  ]);

  return {
    props: { articles, categories, homepage, projects },
    revalidate: 1,
  };
}

export default Home;
