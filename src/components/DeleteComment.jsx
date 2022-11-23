import React from "react";

export default function DeleteComment(props) {
  //   const [err, setErr] = useState(null);
  //   const [isLoading, setIsLoading] = useState(null);

  const { comment_id, setDeleteCommentIsLoading, setComments } = props;

  const handleDelete = () => {
    setDeleteCommentIsLoading(true);

    // setDeletedComment(null);
    // setErr(null);
    // setIsLoading(true);

    fetch(`https://nc-news-julian.herokuapp.com/api/comments/${comment_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      //   setDeleteCommentIsLoading(false);
      alert("Your comment has been deleted!");
    });
    // .catch((err) => {
    //   setErr("Your comment request has failed. Please try again");
    // });
  };

  return <button onClick={handleDelete}>DeleteComment</button>;
}
