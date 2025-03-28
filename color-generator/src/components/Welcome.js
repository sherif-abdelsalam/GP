import { forwardRef } from "react";
import "./Welcome.css";

const WelcomeScreen = forwardRef(({ scrollToMainArea }, ref) => {
    return (
        <section className="welcome-screen" ref={ref}>
            <div className="background-circle"></div>
            <h1>
                Colors <span>reimagined</span><br />
                with AI
            </h1>
            <p>
                Paletto is your AI-powered color companion, helping designers generate, refine, and apply stunning palettes effortlessly. Unlock creativity and make your designs stand out with intelligent color suggestions and contrast optimization.
            </p>
            <div
                className="btn"
                onClick={scrollToMainArea}
            >
                Get Started
            </div>
        </section>
    );
});

export default WelcomeScreen;
