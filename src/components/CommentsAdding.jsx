import { useState } from "react";
import React, { useContext } from "react";
import Context from "./Context";

const CommentsAdding = (props) => {
  const {
    SetInput,
    input,
    setLeaveComment,
    article_id,
    // commentIncrementCounter,
    setCommentIncrementCounter,
    setCommentsIsLoading,
    setCommentIsPosted,
  } = props;

  const [err, setErr] = useState(null);

  const value = useContext(Context);
  //   console.log(value.user.nickName);

  const handleAddaComment = (event) => {
    event.preventDefault();
    setErr(null);
    // console.log(event);
    setCommentsIsLoading(true);
    setLeaveComment(input);

    setCommentIncrementCounter((currentComments) => currentComments + 1);
    SetInput("");

    fetch(
      `https://nc-news-project-0m8t.onrender.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        body: JSON.stringify({ username: value.cardUser, body: input }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
    setCommentsIsLoading(false);
    setCommentIsPosted(true)
    .catch((err) => {
      setErr("Your comment request timed out, please try again.");
    });
  };

  if (err) <p>{err}</p>;

  return (
    <>
      {input === "" ? (
        <button disabled>submit</button>
      ) : (
        <button onClick={handleAddaComment}>submit</button>
      )}
    </>
  );
};

export default CommentsAdding;
