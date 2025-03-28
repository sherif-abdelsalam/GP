import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header(props) {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <div>
                <div className="logo-text">Paletto</div>
            </div>
            <nav className="nav-list">
                {/* HOME */}
                <li className={isActive("/") ? "active" : ""}>
                    <Link to="/">
                        <button onClick={props.scrollToHome}>Home</button>
                    </Link>
                </li>
                {/* ABOUT */}
                <li className={isActive("/about") ? "active" : ""}>
                    <Link to="/about">
                        <button onClick={props.scrollToAbout}>About</button>
                    </Link>
                </li>
                {/* DOCS */}
                <li className={isActive("/docs") ? "active" : ""}>
                    <Link to="/docs">
                        <button>Docs</button>
                    </Link>
                </li>
            </nav>
        </header>
    );
}

export default Header;