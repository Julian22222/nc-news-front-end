import { useState } from "react";
import LoginForm from "./LoginForm";
import React, { useContext } from "react";
import Context from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
      {value.cardUser !== "" ? (
        <h4 className="welcome">Welcome, {value.cardUser}</h4>
      ) : null}
      {value.cardUser !== "" ? (
        <div className="welcome">
          <button onClick={Logout} className="LogoutBtn">
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
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
