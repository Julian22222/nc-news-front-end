// import { useState, useEffect } from "react";
import React, { useContext } from "react";
import Context from "./Context";

const CommentAddButton = (props) => {
  //   const [pleaselogin, setPleaseLogin] = useState(false);

  const { setIsRendering, user, setUser } = props;

  const value = useContext(Context);

  const handleComment = () => {
    if (value.cardUser !== "") {
      setIsRendering(true);
      value.setPleaseLogin(false);
    } else {
      setIsRendering(false);
      value.setPleaseLogin(true);
    }
  };

  return (
    <>
      <button onClick={handleComment}>Add A Comment</button>
      {value.pleaselogin ? <h4 className="pleaseLogin">Please LogIn</h4> : null}
    </>
  );
};

export default CommentAddButton;
