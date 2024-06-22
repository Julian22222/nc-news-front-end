import { useState, useEffect } from "react";
import React, { useContext } from "react";
import Context from "./Context";
import UserCard from "./UserCard";

function LoginForm({
  error,
  showLoginBtn,
  setShowLoginBtn,
  setShowWelcomeMsg,
  showWelcomeMsg,
}) {
  const [showAllUsers, setShowAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://nc-news-project-zorm.onrender.com/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowAllUsers(data.users);
        // setIsLoading(false);
      });
  }, []);

  const value = useContext(Context);
  // const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  //form card appear when click login

  const handleLogin = (event) => {
    event.preventDefault();
    // Login(details);
    setShowLoginForm(true);
    value.setPleaseLogin(false);
    setShowLoginBtn(false);
  };

  return (
    <div className="overlay">
      <form>
        <div className="form-inner">
          {showLoginForm ? (
            <>
              <UserCard
                showAllUsers={showAllUsers}
                setShowWelcomeMsg={setShowWelcomeMsg}
                setShowLoginForm={setShowLoginForm}
              />

              {error !== "" ? <div className="error">{error}</div> : ""}
            </>
          ) : null}
          {showLoginBtn ? (
            <button onClick={handleLogin} className="LoginBtn">
              Login
            </button>
          ) : null}
          {!showWelcomeMsg ? (
            <p className="welcome">Welcome, unauthorised user!</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
