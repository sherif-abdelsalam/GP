import { forwardRef } from "react";
import "./Welcome.css";
import Title from "./Title";

const WelcomeScreen = forwardRef(({ scrollToMainArea }) => {
    const textContent = "Paletto is your AI-powered color companion, helping designers generate, refine, and apply stunning palettes effortlessly. Unlock creativity and make your designs stand out with intelligent color suggestions and contrast optimization.";
    const title = "Colors reimagined with AI";
    const btnText = "Get Started";

    return (
        <div className="welcome-screen-container">
            <div className="background-circle"></div>
            <Title onClick={scrollToMainArea} textContent={textContent} title={title} btnText={btnText} />
        </div>
    );
});

export default WelcomeScreen;

