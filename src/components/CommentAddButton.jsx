import { useState, useEffect } from "react";
const CommentAddButton = (props) => {
  const [pleaselogin, setPleaseLogin] = useState(true);

  const { setIsRendering, user, setUser } = props;

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

  return (
    <>
      <button onClick={handleComment}>add a comment...</button>;
      {pleaselogin ? <h4>Please LogIn</h4> : null}
    </>
  );
};

export default CommentAddButton;
