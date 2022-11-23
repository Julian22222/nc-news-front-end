import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Context from "./Context";

const UserCard = (props) => {
  const { showAllUsers } = props;

  const value = useContext(Context);
  // console.log(value);

  const handleUser = (event) => {
    event.preventDefault();
    // console.log(event.target.previousSibling.data);
    value.setCardUser(event.target.previousSibling.data); // dosn't assign
    // value.setIsDelete(true); //assign delete btn only for those
    // console.log(value.isDelete);
    // console.log(showAllUsers); //all 6 users
  };

  //////WELCOME DOSN't WORK
  return value.cardUser !== "" ? (
    <h4>Welcome,{value.cardUser}</h4>
  ) : (
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
  );
};

export default UserCard;
