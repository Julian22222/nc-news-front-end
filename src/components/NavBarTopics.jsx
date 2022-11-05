import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const NavBarTopics = () => {
  //   const { article_id } = useParams();
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
