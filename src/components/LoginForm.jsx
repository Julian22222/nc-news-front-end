import { useState, useEffect } from "react";
import React, { useContext } from "react";
import Context from "./Context";
import UserCard from "./UserCard";

function LoginForm({ Login, error, showLoginBtn, setShowLoginBtn }) {
  const [showAllUsers, setShowAllUsers] = useState([]);
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(false);
  //show msg welcome+ username
  useEffect(() => {
    fetch("https://nc-news-julian.herokuapp.com/api/users")
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
  console.log(showWelcomeMsg);

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
        {showLoginBtn ? <button onClick={handleLogin}>Login</button> : null}
        {!showWelcomeMsg ? <p>Welcome, unauthorised user!</p> : null}
        {showWelcomeMsg ? <h4>Welcome,{value.cardUser}</h4> : null}
      </div>
    </form>
  );
}

export default LoginForm;
