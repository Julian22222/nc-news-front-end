import { useState, useEffect } from "react";
import React, { useContext } from "react";
import Context from "./Context";
import UserCard from "./UserCard";

function LoginForm({
  Login,
  error,
  showLoginBtn,
  setShowLoginBtn,
  setShowWelcomeMsg,
  showWelcomeMsg,
}) {
  const [showAllUsers, setShowAllUsers] = useState([]);
  // const [showWelcomeMsg, setShowWelcomeMsg] = useState(false);
  //show msg welcome+ username
  useEffect(() => {
    fetch("https://nc-news-project-0m8t.onrender.com/api/users")
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
    <form>
      <div className="form-inner">
        {showLoginForm ? (
          <>
            <UserCard
              showAllUsers={showAllUsers}
              setShowWelcomeMsg={setShowWelcomeMsg}
              setShowLoginForm={setShowLoginForm}
            />

            {error != "" ? <div className="error">{error}</div> : ""}
          </>
        ) : null}
        {showLoginBtn ? (
          <button onClick={handleLogin} className="LoginBtn">
            Login
          </button>
        ) : null}
        {!showWelcomeMsg ? <p>Welcome, unauthorised user!</p> : null}
      </div>
    </form>
  );
}

export default LoginForm;
