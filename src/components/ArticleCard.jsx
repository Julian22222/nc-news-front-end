import { useState, useEffect } from "react";
import IndividualArticle from "./IndividualArticle";

const ArticleCard = (props) => {
  const [article, setArticle] = useState([]);

  const handleArticle = (event) => {
    event.preventDefault();
    // const newArticle= [
    //   {article.article_id}
    //   {article.title}
    //   {article.topic}
    //   {article.author}
    //   {article.body}
    //   {article.created_at}
    //   {article.votes}
    //   {article.comment_count}

    // ]
    // setArticle(newArticle);
  };

  return (
    <div className="card">
      <p>Article Id: {props.article_id}</p>
      <p>Title: {props.title}</p>
      <p>Topic: {props.topic}</p>
      <p>Date of post:{props.created_at}</p>
      <p>Votes:{props.votes}</p>
      <p>Comment count:{props.comment_count}</p>

      <button className="btnReadArticle" onClick={handleArticle}>
        Read article
      </button>
    </div>
  );
};

export default ArticleCard;
