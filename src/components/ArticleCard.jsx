import { Link } from "react-router-dom";
import moment from "moment/moment";

const ArticleCard = (props) => {
  const date = moment(props.created_at).format("DD/MM/YYYY");
  const time = moment(props.created_at).format("hh:mm A");
  return (
    <div className="Card" style={{ position: "relative", height: "310px" }}>
      <div className="article-head-container">
        <div className="left">
          <p className="ArticleID">Article Id: {props.article_id}</p>
        </div>
        <div className="right">
          <p className="Topic">Topic: {props.topic}</p>
        </div>
      </div>
      <p className="Title">Title: {props.title}</p>

      <strong className="DateOfPost">
        Date of post: <br></br> {date} <br></br> at {time}
      </strong>

      <p>Votes: {props.votes}</p>
      <p>Comment count: {props.comment_count}</p>
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <Link to={`/articles/${props.article_id}`} className="btnReadArticle">
          Read article
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
