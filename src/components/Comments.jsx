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
  const [commentsIsLoading, setCommentsIsLoading] = useState(false);
  //show message comment is loading
  const [isRendering, setIsRendering] = useState(false);
  //isRendering show comments form
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
              commentsIsLoading={commentsIsLoading}
              setCommentsIsLoading={setCommentsIsLoading}
            />
          </form>
        </>
      ) : null}
      {commentsIsLoading ? <h2>Comment is uploading ...</h2> : null}

      <p>Comments:</p>
      <ul>
        {comments.map((myComment) => {
          return (
            <li key={myComment.comment_id} className="articlecards">
              <p>Author: {myComment.author}</p>
              {myComment.body}
              {value.user ? <button>delete comment</button> : null}

              {/* myComment.author===value.user -->correct*/}
              {/* myComment.author === value.user.nickName  */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
