import React, { useState, useRef } from "react";
import "./App.css";

import Header from "./components/Header";
import WelcomeScreen from "./components/Welcome";
import MainSectoin from "./components/Main";
import AboutApp from "./components/About";
import Footer from "./components/Footer";
import Result from "./components/Result";
function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [colorPalettes, setColorPalettes] = useState([]);
  // const [colorPalette, setColorPalette] = useState([]);

  // function ChangePalette() {
  //   if (!colorPalettes || colorPalettes.length === 0) {
  //     alert("No color palettes available.\n Gnerate new one first !");
  //     return;
  //   }
  //   const nextIndex =
  //     (colorPalettes.indexOf(colorPalette) + 1) % colorPalettes.length;
  //   setColorPalette(colorPalettes[nextIndex]);
  // }

  const startNowRef = useRef(null);
  const scrollToMainArea = () => {
    if (startNowRef.current) {
      startNowRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const homeRf = useRef(null);
  const scrollToHome = () => {
    if (homeRf.current) {
      homeRf.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  window.addEventListener(
    "scroll",
    function hideContent() {
      const h = document.getElementById("content");
      h.style.clipPath = "inset(" + this.window.pageYOffset + "px 0% 0% 0%)";
    },
    false
  );

  return (
    <div>
      <Header scrollToAbout={scrollToAbout} scrollToHome={scrollToHome} />

      <div id="content">
        <WelcomeScreen scrollToMainArea={scrollToMainArea} ref={homeRf} />
        <MainSectoin
          ref={startNowRef}
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          setColorPalette={setColorPalettes}
          // ChangePalette={ChangePalette}
        >
          <Result colorPalette={colorPalettes[0]} />
        </MainSectoin>
        <AboutApp ref={aboutRef} />
        <Footer />
      </div>
    </div>
  );
}
export default App;
