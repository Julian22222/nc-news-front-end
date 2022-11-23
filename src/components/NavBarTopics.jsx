import { Link } from "react-router-dom";
import React, { useContext } from "react";

import Context from "./Context";
// import { useParams } from "react-router-dom";

const NavBarTopics = () => {
  //   const { article_id } = useParams();
  const value = useContext(Context);
  const myTopics = ["all", "coding", "cooking", "football"];

  return (
    <div className="topicsTitle">
      <strong> Topics: </strong>
      {myTopics.map((topic) => {
        return topic === "all" ? (
          <li className="navBarTopics" key={`${topic} ${value.cardUser}`}>
            <Link to={`/`} key={`${topic}`}>
              {" "}
              {topic}
            </Link>
          </li>
        ) : (
          <Link to={`/${topic}`} key={`${value.pleaselogin} ${topic}`}>
            <li className="navBarTopics">{topic}</li>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBarTopics;
