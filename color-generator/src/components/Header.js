import { Link, useLocation } from "react-router-dom";

function Header(props) {
    const location = useLocation(); // Get the current location using useLocation

    // Function to check if the current route matches the given path
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <div className="logo-img-text">
                <img className="logo-img" src="logo.png" alt="logo" />
                <div className="logo-txt">PALETTO</div>
            </div>
            <nav>
                <ul>
                    {/* HOME */}
                    <li className={`btn-nav ${isActive("/") ? "active" : ""}`}>
                        <Link to="/">
                            <button onClick={props.scrollToHome}>HOME</button>
                        </Link>
                    </li>
                    {/* ABOUT */}
                    <li className={`btn-nav ${isActive("/about") ? "active" : ""}`}>
                        <Link to="/about">
                            <button onClick={props.scrollToAbout}>ABOUT</button>
                        </Link>
                    </li>
                    {/* DOCS */}
                    <li className={`btn-nav ${isActive("/docs") ? "active" : ""}`}>
                        <Link to="/docs">
                            <button>DOCS</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;