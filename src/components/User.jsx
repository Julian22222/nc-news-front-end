import { useState } from "react";
import LoginForm from "./LoginForm";
import React, { useContext } from "react";
import Context from "./Context";

const User = (props) => {
  const { user, setUser } = props;
  //   console.log(user);
  const adminUser = {
    nickName: "grumpy19",
    password: "grumpy19",
  };
  //   const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const value = useContext(Context);

  const Login = (details) => {
    // console.log(details);
    if (
      details.nickName == adminUser.nickName &&
      details.password == adminUser.password
    ) {
      //   console.log("logged In");
      setUser({
        nickName: details.nickName,
        name: details.name,
      });
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ nickName: "", name: "" });
    value.setIsDelete(false);
  };

  return (
    <>
      {user.nickName != "" ? (
        <div className="welcome">
          <h3>
            Welcome, <span>{value.user.nickName}</span>
          </h3>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
};

export default User;
