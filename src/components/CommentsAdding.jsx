import { useState } from "react";

const CommentsAdding = (props) => {
  const {
    SetInput,
    input,
    setLeaveComment,
    article_id,
    commentIncrementCounter,
    setCommentIncrementCounter,
  } = props;

  const handleAddaComment = (event) => {
    event.preventDefault();
    setLeaveComment(input);
    setCommentIncrementCounter((currentComments) => currentComments + 1);
    // console.log(commentIncrementCounter);
    //new render of all all comments of this article
    SetInput("");

    fetch(
      `https://nc-news-julian.herokuapp.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        body: JSON.stringify({ username: "grumpy19", body: input }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
  };

  return (
    <>
      <button onClick={handleAddaComment}>submit</button>
    </>
  );
};

export default CommentsAdding;
