import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import SortBar from "./SortBar";

const CodingElement = (props) => {
  const { setSortBy } = props;

  const [topicArticleList, setTopicArticleList] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-news-julian.herokuapp.com/api/articles?topic=${topic}`
    ).then((res) => {
      res.json().then((data) => {
        setTopicArticleList(data);
      });
    });
  }, [topic]);

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
