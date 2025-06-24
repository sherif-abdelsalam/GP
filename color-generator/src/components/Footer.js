import "./Footer.css";
import Title from "./Title";

function Footer() {
  const textContent =
    "Generate beautiful color palettes effortlessly with our online tool. Want to recolor designs with AI or generate smart palettes? Try the Paletto Figma Plugin for advanced AI-powered features!";
  const btnText = "Get Paletto Figma Plugin";
  const title = "Smart Recoloring Made Easy";
  const copyright =
    "Copyright © 2024-2025 All rights reserved | made by Alpha Bit";
  return (
    <>
      <div className="footer-container">
        <Title
          onClick={() => {}}
          textContent={textContent}
          title={title}
          btnText={btnText}
        />
        <img src="/plugin.jpg" alt="Footer" />
      </div>
      <div className="footer">{copyright}</div>
    </>
  );
}

export default Footer;
