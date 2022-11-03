import { useState, useEffect } from "react";
const CommentAddButton = (props) => {
  const { comments, setComments } = props;

  const [postNewComment, setPostNewComment] = useState([]);

  //   const submitComment = (event) => {
  //     console.log(event.target[0].value);
  //     const finishedComment = event.target[0].value;
  //     setComments((current) => {
  //       const show = [...current, finishedComment];
  //       setPostNewComment([]);
  //       return show;
  //     });
  //   };

  const handleComment = (event) => {
    event.preventDefault();
    setPostNewComment(() => {
      const newComment = (
        <>
          <form>
            <textarea></textarea>
            <button>submit</button>
          </form>
        </>
      );

      return newComment;
    });
  };

  return <button onClick={handleComment}>add a comment...</button>;
};

export default CommentAddButton;
