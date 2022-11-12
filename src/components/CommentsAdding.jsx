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
  } = props;

  const value = useContext(Context);
  //   console.log(value.user.nickName);

  const [commentsIsLoading, setCommentsIsLoading] = useState(true);
  //   const [emptyCOmment, setEmptyComment] = useState(true);

  const handleAddaComment = (event) => {
    console.log(event);
    event.preventDefault();
    setLeaveComment(input);

    setCommentIncrementCounter((currentComments) => currentComments + 1);
    SetInput("");

    fetch(
      `https://nc-news-julian.herokuapp.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        body: JSON.stringify({ username: value.user.nickName, body: input }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
    // setCommentsIsLoading(false);
  };

  return (
    //when empty comment it is updating the page ???
    <>
      {input === "" ? (
        <button disabled={handleAddaComment}>submit</button>
      ) : (
        <button onClick={handleAddaComment}>submit</button>
      )}
    </>
  );
};

export default CommentsAdding;
