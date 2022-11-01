import { Link } from "react-router-dom";

const NavBarTopics = () => {
  const myTopics = ["coding", "cooking", "football"];

  return (
    <div className="topicsTitle">
      <strong> Topics: </strong>
      {myTopics.map((topic) => {
        return (
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
