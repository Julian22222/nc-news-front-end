import { useState } from "react";

const ArticleLiker = (props) => {
  let { votes, article_id, commentIncrementCounter, comment_count } = props;

  // console.log(commentIncrementCounter);

  const [voteIncrementCounter, setVoteIncrementCounter] = useState(0);
  const [voteDecrementCounter, setVoteDecrementCounter] = useState(0);

  const handleIncrementVote = () => {
    setVoteIncrementCounter((currentLikes) => currentLikes + 1);

    fetch(`https://nc-news-julian.herokuapp.com/api/articles/${article_id}`, {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: 1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  const handleDecrementVote = () => {
    setVoteDecrementCounter((currentLikes) => currentLikes - 1);

    // console.log(voteDecrementCounter);
    fetch(`https://nc-news-julian.herokuapp.com/api/articles/${article_id}`, {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: -1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

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
          className="LikeBtn"
        />
        Dislike
      </button>
    </>
  );
};

export default ArticleLiker;
