import classes from "./ArticleCard.module.scss";
import { getStrapiMedia, generateSrcSet } from "../../../lib/media";
import Link from "next/link";

const ArticleCard = ({ article }) => (
  <Link href={`/article/${article.slug}`}>
    <div className={classes.ArticleCard}>
      {console.log("ARTICLE: ", article)}
      <img
        src={getStrapiMedia(article.image)}
        alt={article.image.alternativeText}
        srcSet={generateSrcSet(article.image.formats)}
        sizes="30vw"
      />
      <div className={classes.ArticleCard__title}>{article.title}</div>
    </div>
  </Link>
);

export default ArticleCard;
