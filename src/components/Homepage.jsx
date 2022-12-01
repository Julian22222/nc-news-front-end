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
    fetch("https://nc-news-julian.herokuapp.com/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticleList(data);
        setIsLoading(false);
      });
  }, [articleList]);

  // console.log(articleList);

  if (isLoading) return <h2>Loading ...</h2>;

  // if (sortBy === "") {
  //   return articleList;
  // }

  // if (value.sortBy === "commentCount" && value.order === "asc") {
  //   articleList.map((element) =>
  //     [...articleList].sort((a, b) => {
  //       return b[element.comment_count] - a[element.comment_count];
  //     })
  //   );
  // }
// console.log(articleList)

  if (value.sortBy === "commentCount" && value.order === "asc") {
    // articleList.map((element) =>
      [...articleList].sort((a, b) => {
        // const keyA = new Date(a[element.comment_count]);
        // const keyB = new Date(b[element.comment_count]);
        // if (keyA > keyB) return -1;
        // if (keyA < keyB) return 1;
        if(a.comment_count>b.comment_count){
          return 1
        }
        return 0;
      })
    // );
  }

  // var keyA = new Date(a.updated_at),
  //   keyB = new Date(b.updated_at);
  // // Compare the 2 dates
  // if (keyA > keyB) return -1;
  // if (keyA < keyB) return 1;
  // return 0;

  ////////////////////////////////////////////////
  // if (value.sortBy === "commentCount" && value.order === "asc") {
  //   articleList.sort((a, b) => {
  //     return a[value.sortBy] > b[value.sortBy] ? 1 : -1;
  //   });
  // }
  // else {
  //   articleList.sort((a, b) => {
  //     return a - b;
  //   });
  // }

  //////
  // {topComments.map(({ author, body, comment_id, created_at, votes }) => {
  // key={`${comment_id} ${author}`}

  //////////////////////////////////

  return (
    <>
      <SortBar setArticleList={setArticleList} articleList={articleList} />
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
