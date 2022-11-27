import { Link } from "react-router-dom";
import moment from "moment/moment";

const ArticleCard = (props) => {
  const date = moment(props.created_at).format("DD/MM/YYYY");
  const time = moment(props.created_at).format("hh:mm A");
  return (
    <div className="Card">
      <p className="ArticleID">Article Id: {props.article_id}</p>
      <p className="Title">Title: {props.title}</p>
      <p className="Topic">Topic: {props.topic}</p>
      <p className="DateOfPost">
        Date of post: <br></br> {date} <br></br> at {time}
      </p>

      <p>Votes: {props.votes}</p>
      <p>Comment count: {props.comment_count}</p>
      <button className="btnReadArticle">
        <Link to={`/articles/${props.article_id}`}>Read article</Link>
      </button>
    </div>
  );
};

export default ArticleCard;
