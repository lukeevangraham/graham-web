import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia, generateSrcSet } from "../../lib/media";
import { useRouter } from "next/router";

import classes from "../../assets/css/sass/pages/articleSlug.module.scss";

const Article = ({ article, categories }) => {
  // const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout categories={categories}>
      <main>
        <Seo seo={seo} />
        <div className={classes.ArticleSlug}>
          <img
            src={article.image.url}
            alt={article.image.alternativeText}
            srcSet={generateSrcSet(article.image.formats)}
            sizes="98vw"
          />
          <h1>{article.title}</h1>
        </div>
        {/* <div className="uk-section"> */}
        <div className={classes.Body}>
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <hr className={classes.Body__divider} />
          <div className={classes.Body__authorInfo}>
            <div className={classes.authorImage}>
              {article.author.picture && (
                <Image
                  image={article.author.picture}
                  style={{
                    borderRadius: "50%",
                    height: 30,
                    margin: "auto",
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By <strong> {article.author.name}</strong>
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.publishedAt}</Moment>
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles?status=published");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
