import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Context from "./Context";

const NavBarTopics = () => {
  const value = useContext(Context);
  const myTopics = ["all", "coding", "cooking", "football"];

  return (
    <ul className="topics-container">
      <strong className="topics-title">Topics:</strong>

      {myTopics.map((topic) =>
        topic === "all" ? (
          <li className="topic-chip" key={`${topic} ${value.cardUser}`}>
            <Link to="/">{topic}</Link>
          </li>
        ) : (
          <li className="topic-chip" key={`${topic} ${value.cardUser}`}>
            <Link to={`/${topic}`}>{topic}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default NavBarTopics;
