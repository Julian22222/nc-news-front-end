import { useState } from "react";
import React, { useContext } from "react";
import Context from "./Context";

const CommentsAdding = (props) => {
  const {
    SetInput,
    input,
    setLeaveComment,
    article_id,
    commentIncrementCounter,
    setCommentIncrementCounter,
    setCommentsIsLoading,
    commentsIsLoading,
  } = props;

  const value = useContext(Context);
  //   console.log(value.user.nickName);

  // const [commentsIsLoading, setCommentsIsLoading] = useState(false);
  //show message comment is loading
  //

  const handleAddaComment = (event) => {
    event.preventDefault();
    // console.log(event);
    setCommentsIsLoading(true);
    setLeaveComment(input);

    setCommentIncrementCounter((currentComments) => currentComments + 1);
    SetInput("");

    fetch(
      `https://nc-news-julian.herokuapp.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        body: JSON.stringify({ username: value.cardUser, body: input }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
    setCommentsIsLoading(false);
  };

  // if (commentsIsLoading) return <h2>Comment is uploading ...</h2>;

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
