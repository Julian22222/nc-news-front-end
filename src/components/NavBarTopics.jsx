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
          <li className="navBarTopics" key={topic}>
            <Link to={`/`}> {topic}</Link>
          </li>
        ) : (
          <Link to={`/${topic}`}>
            <li className="navBarTopics" key={value.cardUser + topic}>
              {topic}
            </li>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBarTopics;
