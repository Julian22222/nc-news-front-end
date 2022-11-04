import NavBarTopics from "./NavBarTopics";
import User from "./User";
const Header = (props) => {
  const { user, setUser } = props;
  return (
    <>
      <h1>NC News</h1>
      <User user={user} setUser={setUser} />
      <NavBarTopics />
    </>
  );
};

export default Header;
