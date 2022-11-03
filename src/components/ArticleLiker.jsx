import { useEffect, useState } from "react";

const ArticleLiker = (props) => {
  let { votes, article_id } = props;

  const [voteCounter, setVoteCounter] = useState(0);

  const handleIncrementVote = () => {
    setVoteCounter((currentLikes) => currentLikes + 1);

    fetch(`https://nc-news-julian.herokuapp.com/api/articles/${article_id}`, {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: 1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  console.log(voteCounter);

  const handleDecrementVote = () => {
    if (voteCounter !== 0) {
      setVoteCounter((currentLikes) => currentLikes - 1);
    }
  };

  return (
    <>
      <button disabled={voteCounter !== 0} onClick={handleIncrementVote}>
        Like this article
      </button>
      <button disabled={voteCounter == 0} onClick={handleDecrementVote}>
        Dislike this article
      </button>
    </>
  );
};

export default ArticleLiker;
