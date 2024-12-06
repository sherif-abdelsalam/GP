function Header(props) {
  return (
    <header className="header">
      <div className="logo-img-text">
        <img className="logo-img" src="logo.png" alt="logo" />
        <div className="logo-txt">PALETTO</div>
      </div>

      <nav>
        <ul>
          <li className="btn-nav">
            <button onClick={props.scrollToHome}>HOME</button>
          </li>
          <li className="btn-nav">
            <button onClick={props.scrollToAbout}>ABOUT</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
