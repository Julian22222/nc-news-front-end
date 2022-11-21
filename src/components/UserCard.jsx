import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Context from "./Context";

const UserCard = (props) => {
  const { showAllUsers, details } = props;

  const value = useContext(Context);
  //   console.log(value);

  const handleUser = (event) => {
    event.preventDefault();
    console.log(event.target.previousSibling.data);
    value.setCardUser(event.target.previousSibling.data);
    // value.setIsDelete(true); //assign delete btn only for those
    // console.log(value.isDelete);
    // setLogedUser({ event.target.previousSibling.data }); //assign user to the name that we click
    // console.log(showAllUsers); //all 6 users
  };

  //////WELCOME DOSN't WORK
  return value.cardUser !== false ? (
    <h4>Welcome,{value.cardUser}</h4>
  ) : (
    <ul>
      {showAllUsers.map((user) => {
        // console.log(user.username);

        return (
          <button onClick={(e) => handleUser(e)} className="UsercardButton">
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
