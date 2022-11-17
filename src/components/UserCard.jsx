import React, { useContext } from "react";
import Context from "./Context";

const UserCard = (props) => {
  const { showAllUsers, setDetails, details } = props;

  const value = useContext(Context);
  //   console.log(value);

  const handleUser = (event) => {
    event.preventDefault();
    value.setIsDelete(true); //assign delete btn only for those
    // console.log(value.isDelete);
    value.setUser(showAllUsers.username); //assign user to the name that we click

    console.log(event);
    if (details.nickName === value.user.nickName) {
      return value.setIsDelete(true);
    } else {
      return value.setIsDelete(false);
    }
    console.log(details);
  };

  return (
    <ul>
      {showAllUsers.map((user) => {
        return (
          <button onClick={handleUser} className="UsercardButton">
            <li className="Usercard" key={user}>
              <p>{user.username}</p>
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
