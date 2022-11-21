import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import SortBar from "./SortBar";

const Homepage = (props) => {
  const { sortBy, setSortBy } = props;

  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nc-news-julian.herokuapp.com/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticleList(data);
        setIsLoading(false);
      });
  }, [articleList]);

  if (isLoading) return <h2>Loading ...</h2>;

  // if (sortBy === "") {
  //   return articleList;
  // }

  if (sortBy === "title") {
    articleList.sort((a, b) => {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });
  } else {
    articleList.sort((a, b) => {
      return a - b;
    });
  }

  return (
    <>
      <SortBar setSortBy={setSortBy} />
      <ul>
        {articleList.map((article) => {
          return (
            <li key={(article, article.article_id)} className="articlecards">
              <ArticleCard
                article_id={article.article_id}
                title={article.title}
                topic={article.topic}
                author={article.author}
                body={article.body}
                created_at={article.created_at}
                votes={article.votes}
                comment_count={article.comment_count}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Homepage;
