import React from "react";
import { useState } from "react";

export default function DeleteComment(props) {
  const {
    comment_id,
    setDeleteCommentIsLoading,
    setCommentIsDeleted,
    setCommentIncrementCounter,
  } = props;

  const [err, setErr] = useState(null);

  const handleDelete = () => {
    setDeleteCommentIsLoading(true);
    setCommentIsDeleted(false);
    setErr(null);
    setCommentIncrementCounter((currentComments) => currentComments - 1);

    fetch(
      `https://nc-news-project-zuj8.onrender.com/api/comments/${comment_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((response) => {
      alert("Your comment has been deleted!");
    });
    setDeleteCommentIsLoading(false);
    setCommentIsDeleted(true).catch((err) => {
      setErr("Your comment request has failed. Please try again");
    });
  };

  if (err) <p>{err}</p>;

  return (
    <>
      <br></br>
      <button onClick={handleDelete} className="DeleteBtn">
        DeleteComment
      </button>
    </>
  );
}
