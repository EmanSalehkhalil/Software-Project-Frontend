import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      ELLE TICKETING 
    </span>
  );
};

export default Header;