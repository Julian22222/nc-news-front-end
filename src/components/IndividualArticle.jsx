import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IndividualArticle = () => {
  const [article, setArticle] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-news-julian.herokuapp.com/api/articles/${article_id}`
    ).then((res) => {
      res.json().then((data) => {
        setArticle(data);
      });
    });
  }, [article_id]);

  return (
    <>
      <div className="card">
        <p>Article Id: {article.article_id}</p>
        <p>Title: {article.title}</p>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Body: {article.body}</p>
        <p>Date of post:{article.created_at}</p>
        <p>Votes:{article.votes}</p>
        <p>Comment count:{article.comment_count}</p>
      </div>
    </>
  );
};

export default IndividualArticle;
