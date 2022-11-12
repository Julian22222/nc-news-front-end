import { useState, useEffect } from "react";
import CommentAddButton from "./CommentAddButton";
import CommentsAdding from "./CommentsAdding";
import React, { useContext } from "react";
import Context from "./Context";

const Comments = (props) => {
  const {
    article_id,
    user,
    setUser,
    commentIncrementCounter,
    setCommentIncrementCounter,
  } = props;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRendering, setIsRendering] = useState(false);
  const [leaveComment, setLeaveComment] = useState([]);
  const [input, SetInput] = useState("");

  const value = useContext(Context);

  useEffect(() => {
    fetch(
      `http://nc-news-julian.herokuapp.com/api/articles/${article_id}/comments`
    ).then((res) => {
      res.json().then(({ comment }) => {
        setComments(comment);
        setIsLoading(false);
      });
    });
  }, [comments]);

  //[article_id]

  if (isLoading) return <h2>Loading ...</h2>;

  return (
    <>
      <CommentAddButton
        comments={comments}
        setComments={setComments}
        setIsRendering={setIsRendering}
        user={user}
        setUser={setUser}
      />

      {isRendering ? (
        <>
          <form>
            <textarea
              className="mytextarea"
              onChange={(event) => {
                SetInput(event.target.value);
              }}
              value={input}
            ></textarea>
            <CommentsAdding
              SetInput={SetInput}
              input={input}
              setLeaveComment={setLeaveComment}
              article_id={article_id}
              commentIncrementCounter={commentIncrementCounter}
              setCommentIncrementCounter={setCommentIncrementCounter}
            />
          </form>
        </>
      ) : null}

      <p>Comments:</p>
      <ul>
        {comments.map((myComment) => {
          return (
            <li key={myComment.comment_id} className="articlecards">
              <p>Author: {myComment.author}</p>
              {myComment.body}
              {value.isDelete ? <button>delete comment</button> : null}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
