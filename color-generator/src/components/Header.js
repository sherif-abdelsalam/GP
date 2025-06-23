import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ scrollToMainArea }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-text">
          Paletto
        </Link>
      </div>
      <nav className="nav-center">
        <ul className="nav-list">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={isActive("/docs") ? "active" : ""}>
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </nav>
      {location.pathname === "/" && (
        <div className="nav-action">
          <button onClick={scrollToMainArea} className="get-in-touch-btn">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
