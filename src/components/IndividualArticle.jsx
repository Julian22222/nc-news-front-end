import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleLiker from "./ArticleLiker";
import Comments from "./Comments";
import moment from "moment/moment";
// import User from "./User";

const IndividualArticle = (props) => {
  const { user, setUser } = props;

  const date = moment(props.created_at).format("DD/MM/YYYY");
  const time = moment(props.created_at).format("hh:mm A");

  const [article, setArticle] = useState([]);
  const [commentIncrementCounter, setCommentIncrementCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [seeAllComments, setSeeAllComments] = useState(false);
  //see all comments when press a btn see all comments
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
        <div className="EachArticle">
          <p className="ArticleID">Article Id: {article.article_id}</p>
          <p className="Title">Title: {article.title}</p>
          <p className="Topic">Topic: {article.topic}</p>
          <p className="Author">Author: {article.author}</p>
          <p className="BodyOfEachArticle">Body: {article.body}</p>
          <p className="DateofP">
            Date of post: {date} at {time}
          </p>
        </div>
        <ArticleLiker
          votes={article.votes}
          article_id={article.article_id}
          comment_count={article.comment_count}
          commentIncrementCounter={commentIncrementCounter}
          setCommentIncrementCounter={setCommentIncrementCounter}
          setSeeAllComments={setSeeAllComments}
        />
        <Comments
          article_id={article.article_id}
          user={user}
          setUser={setUser}
          commentIncrementCounter={commentIncrementCounter}
          setCommentIncrementCounter={setCommentIncrementCounter}
          seeAllComments={seeAllComments}
        />
      </div>
    </>
  );
};

export default IndividualArticle;
