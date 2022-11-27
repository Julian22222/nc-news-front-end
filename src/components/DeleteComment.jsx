import React from "react";

export default function DeleteComment(props) {
  //   const [err, setErr] = useState(null);
  //   const [isLoading, setIsLoading] = useState(null);

  const {
    comment_id,
    setDeleteCommentIsLoading,
    setComments,
    setCommentIsDeleted,
    setCommentIncrementCounter,
  } = props;

  const handleDelete = () => {
    setDeleteCommentIsLoading(true);
    setCommentIsDeleted(false);
    // setErr(null);
    setCommentIncrementCounter((currentComments) => currentComments - 1);

    fetch(`https://nc-news-julian.herokuapp.com/api/comments/${comment_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      alert("Your comment has been deleted!");
    });
    // .catch((err) => {
    //   setErr("Your comment request has failed. Please try again");
    // });
    setDeleteCommentIsLoading(false);
    setCommentIsDeleted(true);
  };

  return (
    <>
      <br></br>
      <button onClick={handleDelete} className="DeleteBtn">
        DeleteComment
      </button>
    </>
  );
}
