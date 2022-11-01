import { Link } from "react-router-dom";

const NavBarTopics = () => {
  const myTopics = ["home", "coding", "cooking", "football"];

  return (
    <div className="topicsTitle">
      <strong> Topics: </strong>
      {myTopics.map((topic) => {
        return topic === "home" ? (
          <Link to={`/`}>
            <li className="navBarTopics" key={topic}>
              {topic}
            </li>
          </Link>
        ) : (
          <Link to={`/${topic}`}>
            <li className="navBarTopics" key={topic}>
              {topic}
            </li>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBarTopics;
