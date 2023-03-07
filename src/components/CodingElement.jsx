import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import Context from "./Context";
import React, { useContext } from "react";
import SortBar from "./SortBar";

const CodingElement = (props) => {
  const value = useContext(Context);

  const [topicArticleList, setTopicArticleList] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-news-project-zuj8.onrender.com/api/articles?topic=${topic}`
    ).then((res) => {
      res.json().then((data) => {
        setTopicArticleList(data);
      });
    });
  }, [topic, value.sortBy, value.order]);

  if (value.sortBy === "commentCount" && value.order === "asc") {
    topicArticleList.sort((a, b) => {
      return a.comment_count > b.comment_count ? -1 : 1;
    });
  }

  if (value.sortBy === "commentCount" && value.order === "desc") {
    topicArticleList.sort((a, b) => {
      return a.comment_count > b.comment_count ? 1 : -1;
    });
  }

  if (value.sortBy === "votes" && value.order === "asc") {
    topicArticleList.sort((a, b) => {
      return a.votes > b.votes ? -1 : 1;
    });
  }

  if (value.sortBy === "votes" && value.order === "desc") {
    topicArticleList.sort((a, b) => {
      return a.votes > b.votes ? 1 : -1;
    });
  }

  if (value.sortBy === "publishedDate" && value.order === "asc") {
    topicArticleList.sort((a, b) => {
      return a.created_at > b.created_at ? -1 : 1;
    });
  }

  if (value.sortBy === "publishedDate" && value.order === "desc") {
    topicArticleList.sort((a, b) => {
      return a.created_at > b.created_at ? 1 : -1;
    });
  }

  return (
    <>
      <SortBar />
      <ul>
        {topicArticleList.map((item) => {
          return (
            <li key={item.article_id} className="articlecards">
              <ArticleCard
                article_id={item.article_id}
                title={item.title}
                topic={item.topic}
                created_at={item.created_at}
                votes={item.votes}
                comment_count={item.comment_count}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CodingElement;
