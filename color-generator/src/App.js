import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/Welcome";
import MainSectoin from "./components/Main";
import AboutApp from "./components/About";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Documentation from "./components/Documentation";

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [colorPalettes, setColorPalettes] = useState([]);
    const [colorPalette, setColorPalette] = useState([]);

    useEffect(() => {
        setColorPalette(colorPalettes[0]);
    }, [colorPalettes]);

    function ChangePalette() {
        if (!colorPalettes || colorPalettes.length === 0) {
            alert("No color palettes available.\nGenerate new one first !");
            return;
        }
        const nextIndex =
            (colorPalettes.indexOf(colorPalette) + 1) % colorPalettes.length;
        setColorPalette(colorPalettes[nextIndex]);
    }

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



    return (
        <Router>
            <div>
                <Header scrollToAbout={scrollToAbout} scrollToHome={scrollToHome} />

                <div id="content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>

                                    <WelcomeScreen scrollToMainArea={scrollToMainArea} ref={homeRf} />
                                    <MainSectoin
                                        ref={startNowRef}
                                        setSelectedFile={setSelectedFile}
                                        selectedFile={selectedFile}
                                        setColorPalette={setColorPalettes}
                                        ChangePalette={ChangePalette}
                                    >
                                        <Result colorPalette={colorPalette} />
                                    </MainSectoin>
                                    {/* <AboutApp ref={aboutRef} /> */}
                                    <Footer />
                                </>
                            }
                        />
                        <Route path="/docs" element={<Documentation />} />
                        <Route path="/about" element={<AboutApp />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;