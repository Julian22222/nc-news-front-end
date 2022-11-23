import NavBarTopics from "./NavBarTopics";
import User from "./User";

const Header = () => {
  return (
    <>
      <img
        src="https://www.pngall.com/wp-content/uploads/2016/05/Newspaper-PNG-Clipart.png"
        alt="News logo"
        className="NClogo"
      />
      <h1>NC News</h1>
      <User />
      <NavBarTopics />
    </>
  );
};

export default Header;
