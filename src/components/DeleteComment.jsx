import React from "react";

export default function DeleteComment(props) {
  //   const [err, setErr] = useState(null);
  //   const [isLoading, setIsLoading] = useState(null);

  const { comments } = props;
  //   console.log(comments);
  //comment_id -->332
  //comments --> vse commenti togo articlja na kotorom ja sejchas
  //destucturisation
  const handleDelete = (event) => {
    event.preventDefault();
    console.log(event);
    // setDeletedComment(null);
    // setErr(null);
    // setIsLoading(true);

    fetch(`https://nc-news-julian.herokuapp.com/api/comments/${comment_id}`, {
      method: "DELETE",
      //   body: JSON.stringify({ username: value.cardUser, body: input }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setDeletedComment(true);
      alert("Your comment has been deleted!");
    });
    //   .catch((err) => {
    //     setErr("Your comment request has failed. Please try again");
    //   });
  };

  return <button onClick={handleDelete}>DeleteComment</button>;
}
