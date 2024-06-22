import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Context from "./Context";
import React, { useContext } from "react";
import SortBar from "./SortBar";

const Homepage = () => {
  const value = useContext(Context);

  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nc-news-project-zorm.onrender.com/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticleList(data);
        setIsLoading(false);
      });
  }, [articleList, value.sortBy, value.order]);

  // console.log(articleList);

  if (isLoading) return <h2>Loading ...</h2>;

  if (value.sortBy === "commentCount" && value.order === "asc") {
    articleList.sort((a, b) => {
      return a.comment_count > b.comment_count ? -1 : 1;
    });
  }

  if (value.sortBy === "commentCount" && value.order === "desc") {
    articleList.sort((a, b) => {
      return a.comment_count > b.comment_count ? 1 : -1;
    });
  }

  if (value.sortBy === "votes" && value.order === "asc") {
    articleList.sort((a, b) => {
      return a.votes > b.votes ? -1 : 1;
    });
  }

  if (value.sortBy === "votes" && value.order === "desc") {
    articleList.sort((a, b) => {
      return a.votes > b.votes ? 1 : -1;
    });
  }

  if (value.sortBy === "publishedDate" && value.order === "asc") {
    articleList.sort((a, b) => {
      return a.created_at > b.created_at ? -1 : 1;
    });
  }

  if (value.sortBy === "publishedDate" && value.order === "desc") {
    articleList.sort((a, b) => {
      return a.created_at > b.created_at ? 1 : -1;
    });
  }

  return (
    <>
      <SortBar setArticleList={setArticleList} articleList={articleList} />
      <ul>
        {articleList?.map((article) => {
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
