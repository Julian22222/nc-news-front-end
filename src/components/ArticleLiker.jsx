import { useState } from "react";

const ArticleLiker = (props) => {
  let { votes, article_id, commentIncrementCounter, comment_count } = props;

  const [voteIncrementCounter, setVoteIncrementCounter] = useState(0);
  const [voteDecrementCounter, setVoteDecrementCounter] = useState(0);
  const [err, setErr] = useState(null);

  const handleIncrementVote = () => {
    setVoteIncrementCounter((currentLikes) => currentLikes + 1);
    setErr(null);

    fetch(
      `https://nc-news-project-zuj8.onrender.com/api/articles/${article_id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ inc_votes: 1 }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .catch(err);
  };

  const handleDecrementVote = () => {
    setVoteDecrementCounter((currentLikes) => currentLikes - 1);
    setErr(null);

    // console.log(voteDecrementCounter);
    fetch(
      `https://nc-news-project-zuj8.onrender.com/api/articles/${article_id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ inc_votes: -1 }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => {
        setErr("Something went wrong");
      });
  };

  if (err) return <p>{err}</p>;

  return (
    <>
      <div className="CommentsAndVotes">
        <p>Comment count: {Number(comment_count) + commentIncrementCounter}</p>
        <p>Votes: {votes + voteIncrementCounter + voteDecrementCounter}</p>
      </div>
      <button
        disabled={voteIncrementCounter !== 0}
        onClick={handleIncrementVote}
      >
        <img
          src=" https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-button-png-11.png"
          alt="like button"
          className="LikeBtn"
        />
        Like
      </button>
      <button
        disabled={voteDecrementCounter !== 0}
        onClick={handleDecrementVote}
      >
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-png-icon-22.png"
          alt="dislike button"
          className="LikeBtn"
        />
        Dislike
      </button>
    </>
  );
};

export default ArticleLiker;
