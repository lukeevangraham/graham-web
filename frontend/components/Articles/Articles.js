import classes from "./Articles.module.scss";
import ArticleCard from "./ArticleCard/ArticleCard";

const Articles = ({ articles }) => (
  <div className={classes.Articles}>
    {articles.map((article) => (
      <ArticleCard key={article.id} article={article} />
    ))}
  </div>
);

export default Articles;
