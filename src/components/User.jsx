import { useState } from "react";
import LoginForm from "./LoginForm";
import React, { useContext } from "react";
import Context from "./Context";

const User = () => {
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(false);

  const [error, setError] = useState("");

  const value = useContext(Context);

  const Logout = () => {
    value.setIsDelete(false);
    setShowLoginBtn(true);
    value.setCardUser("");
    setShowWelcomeMsg(false);
  };

  return (
    <>
      {value.cardUser !== "" ? <h4>Welcome, {value.cardUser}</h4> : null}
      {value.cardUser !== "" ? (
        <div className="welcome">
          <button onClick={Logout} className="LogoutBtn">
            Logout
          </button>
        </div>
      ) : (
        <LoginForm
          error={error}
          showLoginBtn={showLoginBtn}
          setShowLoginBtn={setShowLoginBtn}
          setShowWelcomeMsg={setShowWelcomeMsg}
          showWelcomeMsg={showWelcomeMsg}
        />
      )}
    </>
  );
};

export default User;
