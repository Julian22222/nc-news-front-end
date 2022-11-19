import React, { useContext } from "react";
import Context from "./Context";
// import User from "./User";

const UserCard = (props) => {
  const { showAllUsers, details } = props;

  const value = useContext(Context);
  //   console.log(value);

  const handleUser = (event) => {
    event.preventDefault();
    // value.setIsDelete(true); //assign delete btn only for those
    // console.log(value.isDelete);
    value.setCardUser(event.target.previousSibling); //assign user to the name that we click
    // console.log(showAllUsers); //all 6 users
    //
    console.log(value.cardUser); //user nickName
    // console.log(event.target.previousSibling); //username

    // showAllUsers.map((user) => {
    //   console.log(user)
    // }

    if (details.nickName === value.user.nickName) {
      return value.setIsDelete(true);
    } else {
      return value.setIsDelete(false);
    }
    //login form name,nickname, password
  };

  return (
    <ul>
      {showAllUsers.map((user) => {
        // console.log(user.username);

        return (
          <button onClick={handleUser} className="UsercardButton">
            <li className="Usercard" key={user}>
              {user.username}
              <img
                className="PictureCard"
                src={user.avatar_url}
                alt="Userlogo"
              />
            </li>
          </button>
        );
      })}
    </ul>
  );
};

export default UserCard;
