import { useState, useEffect } from "react";
import React, { useContext } from "react";
import Context from "./Context";
import UserCard from "./UserCard";

function LoginForm({ Login, error }) {
  const [showAllUsers, setShowAllUsers] = useState([]);
  //
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

  const [details, setDetails] = useState({
    nickName: "",
    // name: "",
    password: "",
  });

  const value = useContext(Context);

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    Login(details);
    setShowLoginForm(true);
    value.setPleaseLogin(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form-inner">
        {showLoginForm ? (
          <>
            {/* <form> */}
            <UserCard
              showAllUsers={showAllUsers}
              setDetails={setDetails}
              details={details}
            />
            {/*  */}
            {error != "" ? <div className="error">{error}</div> : ""}
            {/* <div className="from-group">
                <label htmlFor="name">nickName:</label>
                <input
                  type="text"
                  name="nickName"
                  id="nickName"
                  onChange={(event) => {
                    setDetails({ ...details, nickName: event.target.value });
                  }}
                  value={details.nickName}
                />
              </div> */}
            {/* <div className="from-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(event) => {
                    setDetails({ ...details, name: event.target.value });
                  }}
                  value={details.name}
                />
              </div>{" "} */}
            {/* <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(event) => {
                    setDetails({ ...details, password: event.target.value });
                  }}
                  value={details.password}
                />
              </div> */}
            {/* </form> */}
          </>
        ) : null}

        <button onCLick={handleLogin}>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
