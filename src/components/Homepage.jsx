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

  //////
  // {topComments.map(({ author, body, comment_id, created_at, votes }) => {
  // key={`${comment_id} ${author}`}

  //////////////////////////////////

  // useEffect(() => {
  //   if (sortBy === "created_at") {
  //     if (order === "descending") {
  //       setSortedArticles(
  //         [...articles].sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
  //       );
  //     }
  //     if (order === "ascending") {
  //       setSortedArticles(
  //         [...articles].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
  //       );
  //     }
  //   } else if (sortBy !== "created_at" && order === "descending") {
  //     setSortedArticles([...articles].sort((a, b) => b[sortBy] - a[sortBy]));
  //   } else {
  //     setSortedArticles([...articles].sort((a, b) => a[sortBy] - b[sortBy]));
  //   }
  // }, [sortBy, order]);

  /////////////////////////////////////
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
