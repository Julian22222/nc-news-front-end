import NavBarTopics from "./NavBarTopics";
import User from "./User";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img
          src="https://www.pngall.com/wp-content/uploads/2016/05/Newspaper-PNG-Clipart.png"
          alt="News logo"
          className="NClogo"
        />
        <h1 className="NCheader">NC News</h1>
      </div>

      <div className="header-right">
        <User />
      </div>

      <nav className="navbar">
        <NavBarTopics />
      </nav>
    </header>
  );
};

export default Header;
