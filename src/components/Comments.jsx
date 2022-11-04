import { useState, useEffect } from "react";
import CommentAddButton from "./CommentAddButton";

const Comments = (props) => {
  //   console.log(props);
  const { article_id, user, setUser } = props;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRendering, setIsRendering] = useState(false);
  const [leaveComment, setLeaveComment] = useState([]);
  const [input, SetInput] = useState("");

  useEffect(() => {
    fetch(
      `http://nc-news-julian.herokuapp.com/api/articles/${article_id}/comments`
    ).then((res) => {
      res.json().then(({ comment }) => {
        setComments(comment);
        setIsLoading(false);
      });
    });
  }, [article_id]);

  const handleAddaComment = (event) => {
    event.preventDefault();
    const newComment = [...leaveComment];
    SetInput();
    setComments([newComment, ...comments]);
  };

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
      {/* if(user.name !=="" &&  user.password !=="") then-> */}

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
            <button onClick={handleAddaComment}>submit</button>
          </form>
        </>
      ) : null}

      <p>Comments:</p>
      <ul>
        {comments.map((myComment) => {
          return (
            <li key={myComment.comment_id} className="articlecards">
              {myComment.body}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
