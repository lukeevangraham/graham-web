import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";
import Link from "next/link";
import Layout from "../components/layout";
// import Articles from "../components/articles";
import Articles from "../components/Articles/Articles"

import classes from "../assets/css/sass/pages/blog.module.scss";

export async function getStaticProps() {
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles?status=published&_sort=id:DESC"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { articles, categories },
    revalidate: 1,
  };
}

const Blog = ({ articles, categories }) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      {/* <div className={classes.categoryList}>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link as={`/category/${category.slug}`} href="/category/[id]">
                <a>{category.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
      <Articles articles={articles} />
    </Layout>
  );
};

export default Blog;
