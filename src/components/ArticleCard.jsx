import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  return (
    <div className="card">
      <p>Article Id: {props.article_id}</p>
      <p>Title: {props.title}</p>
      <p>Topic: {props.topic}</p>
      <p>
        Date of post: {props.created_at.slice(0, 10)} at{" "}
        {props.created_at.slice(11, -8)}{" "}
      </p>

      <p>Votes:{props.votes}</p>
      <p>Comment count:{props.comment_count}</p>
      <button className="btnReadArticle">
        <Link to={`/articles/${props.article_id}`}>Read article</Link>
      </button>
    </div>
  );
};

export default ArticleCard;
