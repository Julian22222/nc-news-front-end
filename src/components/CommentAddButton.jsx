import { useState, useEffect } from "react";
const CommentAddButton = (props) => {
  const [pleaselogin, setPleaseLogin] = useState(false);

  const { setIsRendering, user, setUser } = props;

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
    {
      user.nickName !== "" && user.password !== ""
        ? setIsRendering(true)
        : setIsRendering(false);
      setPleaseLogin(true);
      console.log(pleaselogin);
    }
  };

  //   const allComments = [newComment, ...comments];

  //   return allComments;
  //     });
  //   };

  return (
    <>
      <button onClick={handleComment}>add a comment...</button>;
      {pleaselogin ? <h4>Please LogIn</h4> : null}
    </>
  );
};

export default CommentAddButton;
