import { useState, useEffect } from "react";
import CommentAddButton from "./CommentAddButton";
import CommentsAdding from "./CommentsAdding";
import React, { useContext } from "react";
import Context from "./Context";
import DeleteComment from "./DeleteComment";

const Comments = (props) => {
  const {
    article_id,
    user,
    setUser,
    commentIncrementCounter,
    setCommentIncrementCounter,
  } = props;
  const [comments, setComments] = useState([]);
  //all comments info
  const [isLoading, setIsLoading] = useState(true);
  const [commentsIsLoading, setCommentsIsLoading] = useState(false);
  //show message comment is loading
  const [deleteCommentIsLoading, setDeleteCommentIsLoading] = useState(false);
  //show msg comment is deleting, in poor connection
  const [isRendering, setIsRendering] = useState(false);
  //isRendering show comments form
  const [leaveComment, setLeaveComment] = useState([]);
  //list of all comments
  const [input, SetInput] = useState("");

  const value = useContext(Context);
  // console.log(comments);

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
              commentsIsLoading={commentsIsLoading}
              setCommentsIsLoading={setCommentsIsLoading}
            />
          </form>
        </>
      ) : null}
      {commentsIsLoading ? <p>Comment is uploading ...</p> : null}
      {deleteCommentIsLoading ? <p>Your comment is deleting...</p> : null}
      <p>Comments:</p>
      <ul>
        {comments.map((myComment) => {
          return (
            <li key={myComment.comment_id} className="articlecards">
              <p>Author: {myComment.author}</p>
              <p>
                Posted on {myComment.created_at.slice(0, 10)} at{" "}
                {myComment.created_at.slice(11, -8)}
              </p>
              {myComment.body}
              {value.cardUser === myComment.author ? (
                <DeleteComment
                  comments={comments}
                  setDeleteCommentIsLoading={setDeleteCommentIsLoading}
                  setComments={setComments}
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
