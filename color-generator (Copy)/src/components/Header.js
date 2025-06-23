import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header({ scrollToMainArea }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkTheme(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkTheme(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo">
            <div className="logo-icon">🎨</div>
            <span className="logo-text">Paletto</span>
          </Link>
        </div>

        {/* Desktop navbarigation */}
        <navbar className="navbar-center">
          <ul className="navbar-list">
            <li className={isActive("/") ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={isActive("/about") ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={isActive("/docs") ? "active" : ""}>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </navbar>

        {/* Actions */}
        <div className="navbar-actions">
          {location.pathname === "/" && (
            <button onClick={scrollToMainArea} className="cta-button">
              <span>Get Started</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {isDarkTheme ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <navbar className="mobile-navbar">
            <ul className="mobile-navbar-list">
              <li className={isActive("/") ? "active" : ""}>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className={isActive("/about") ? "active" : ""}>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className={isActive("/docs") ? "active" : ""}>
                <Link to="/docs" onClick={() => setIsMobileMenuOpen(false)}>
                  Documentation
                </Link>
              </li>
            </ul>
            {location.pathname === "/" && (
              <button
                onClick={() => {
                  scrollToMainArea();
                  setIsMobileMenuOpen(false);
                }}
                className="mobile-cta-button"
              >
                Get Started
              </button>
            )}
          </navbar>
        </div>
      </div>
    </header>
  );
}

export default Header;
