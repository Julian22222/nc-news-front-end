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
    seeAllComments,
  } = props;
  const [comments, setComments] = useState([]);
  //all comments info
  const [isLoading, setIsLoading] = useState(true);
  const [commentsIsLoading, setCommentsIsLoading] = useState(false);
  //show message comment is loading
  const [comentIsPosted, setCommentIsPosted] = useState(false);
  //show msg when comment is posted
  const [deleteCommentIsLoading, setDeleteCommentIsLoading] = useState(false);
  //show msg comment is deleting, in poor connection
  const [commentIsDeleted, setCommentIsDeleted] = useState(false);
  //message to show when comment is deleted
  const [isRendering, setIsRendering] = useState(false);
  //isRendering show comments form
  const [leaveComment, setLeaveComment] = useState([]);
  //list of all comments
  const [input, SetInput] = useState("");

  const value = useContext(Context);
  // console.log(comments);

  useEffect(() => {
    fetch(
      `https://nc-news-project-zuj8.onrender.com/api/articles/${article_id}/comments`
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
              placeholder="leave you comment here"
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
              setCommentsIsLoading={setCommentsIsLoading}
              setCommentIsPosted={setCommentIsPosted}
            />
          </form>
        </>
      ) : null}
      {commentsIsLoading ? <p>Your comment is posting...</p> : null}
      {deleteCommentIsLoading ? <p>Your comment is deleting...</p> : null}
      {commentIsDeleted ? <p>Your comment has been deleted!</p> : null}
      {comentIsPosted ? <p>Your comment has been posted!</p> : null}

      <p>Comments:</p>
      <ul>
        {comments.map((myComment) => {
          return (
            <li key={myComment.comment_id} className="EachCommentlecard">
              <p className="AuthorComment">Author: {myComment.author}</p>
              <p className="DateofComment">
                Posted on {myComment.created_at.slice(0, 10)} at{" "}
                {myComment.created_at.slice(11, -8)}
              </p>
              {myComment.body}
              {value.cardUser === myComment.author ? (
                <DeleteComment
                  comment_id={myComment.comment_id}
                  setDeleteCommentIsLoading={setDeleteCommentIsLoading}
                  setComments={setComments}
                  setCommentIsDeleted={setCommentIsDeleted}
                  setCommentIncrementCounter={setCommentIncrementCounter}
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
