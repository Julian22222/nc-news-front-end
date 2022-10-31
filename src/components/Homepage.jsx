import { useState, useEffect } from "react";

import ArticleCard from "./ArticleCard";

const Homepage = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch("https://nc-news-julian.herokuapp.com/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setArticleList(data);
      });
  }, []);

  return (
    <>
      <ul>
        {articleList.map((article) => {
          return (
            <li className="articlecards">
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
