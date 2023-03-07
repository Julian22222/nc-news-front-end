import React, { useContext } from "react";
import Context from "./Context";

const UserCard = (props) => {
  const { showAllUsers, setShowWelcomeMsg } = props;

  const value = useContext(Context);

  const handleUser = (event) => {
    event.preventDefault();

    // console.log(event.target.previousSibling.wholeText);
    // console.log(event.target.previousSibling.data);
    value.setCardUser(event.target.previousSibling.textContent);
    setShowWelcomeMsg(true);
  };

  return value.cardUser === "" ? (
    <ul>
      {showAllUsers.map((user) => {
        return (
          <button
            onClick={(e) => handleUser(e)}
            className="UsercardButton"
            key={user.username}
          >
            <li className="Usercard" key={`${value.cardUser} ${user.username}`}>
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
  ) : null;
};

export default UserCard;
