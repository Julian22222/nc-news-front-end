import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const IndividualArticle = (props) => {
  const [article, setArticle] = useState([]);

  const { article_id } = useParams();
  const { articleList, setArticleList } = props;
  const aList = [...articleList];

  useEffect(() => {
    fetch(
      `https://nc-news-julian.herokuapp.com/api/articles/${article_id}`
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setArticle(data);
      });
    });
  }, [article_id]);

  return (
    <>
      <ul>
        {articleList.map((item) => {
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

export default IndividualArticle;
