import { useState } from "react";
import LoginForm from "./LoginForm";
import React, { useContext } from "react";
import Context from "./Context";

const User = (props) => {
  const [showLoginBtn, setShowLoginBtn] = useState(true);

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
    value.setIsDelete(false);

    setShowLoginBtn(true);
    //login button to show
  };

  return (
    <>
      {value.cardUser != "" ? (
        <div className="welcome">
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm
          Login={Login}
          error={error}
          showLoginBtn={showLoginBtn}
          setShowLoginBtn={setShowLoginBtn}
        />
      )}
    </>
  );
};

export default User;
