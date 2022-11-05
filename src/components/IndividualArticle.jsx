import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleLiker from "./ArticleLiker";
import Comments from "./Comments";
import User from "./User";

const IndividualArticle = ({ user, setUser }) => {
  const [article, setArticle] = useState([]);
  const [commentIncrementCounter, setCommentIncrementCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-news-julian.herokuapp.com/api/articles/${article_id}`
    ).then((res) => {
      res.json().then((data) => {
        setArticle(data);
        setIsLoading(false);
      });
    });
  }, [article_id]);

  if (isLoading) return <h2>Loading ...</h2>;

  return (
    <>
      <div className="card">
        <p>Article Id: {article.article_id}</p>
        <p>Title: {article.title}</p>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Body: {article.body}</p>
        <p>Date of post:{article.created_at}</p>
        <ArticleLiker
          votes={article.votes}
          article_id={article.article_id}
          comment_count={article.comment_count}
          commentIncrementCounter={commentIncrementCounter}
          setCommentIncrementCounter={setCommentIncrementCounter}
        />
        <Comments
          article_id={article.article_id}
          user={user}
          setUser={setUser}
          commentIncrementCounter={commentIncrementCounter}
          setCommentIncrementCounter={setCommentIncrementCounter}
        />
      </div>
    </>
  );
};

export default IndividualArticle;
