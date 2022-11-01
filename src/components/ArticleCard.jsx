const ArticleCard = (props) => {
  return (
    <div className="card">
      <p>Article Id: {props.article_id}</p>
      <p>Title: {props.title}</p>
      <p>Topic: {props.topic}</p>
      <p>Date of post:{props.created_at}</p>
      <p>Votes:{props.votes}</p>
      <p>Comment count:{props.comment_count}</p>

      <button className="btnReadArticle">Read article</button>
    </div>
  );
};

export default ArticleCard;
