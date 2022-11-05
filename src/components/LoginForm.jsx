import { useState, useEffect } from "react";
import React from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    nickName: "",
    name: "",
    password: "",
  });

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    Login(details);
    setShowLoginForm(true);
    // setPleaseLogin(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form-inner">
        {showLoginForm ? (
          <>
            <form>
              <p>nickName: grumpy19</p>
              {error != "" ? <div className="error">{error}</div> : ""}
              <div className="from-group">
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
              </div>
              <div className="from-group">
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
              </div>{" "}
              <div className="form-group">
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
              </div>
            </form>
          </>
        ) : null}

        {/* <p>nickName: grumpy19</p> */}
        {/* Eror */}
        {/* {error != "" ? <div className="error">{error}</div> : ""}
        <div className="from-group">
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
        </div>
        <div className="from-group">
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
        </div>{" "}
        <div className="form-group">
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
        {/* <input type="submit" value="LOGIN" /> */}
        <button onCLick={handleLogin}>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
