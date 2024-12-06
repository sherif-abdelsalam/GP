import { forwardRef } from "react";

const WelcomeScreen = forwardRef(({ scrollToMainArea }, ref) => {
  return (
    <section className="welcome-screen" ref={ref}>
      <h1>
        WELCOME TO <span>PALETTO</span>
      </h1>
      <p>
        Upload an image and let our tool analyze the colors to generate a
        stunning color palette. You can use this palette for your design
        projects or share it with others
      </p>
      <div className="start-now">
        <button
          onClick={scrollToMainArea}
          style={{ textTransform: "uppercase" }}
        >
          Start Now
        </button>
      </div>
    </section>
  );
});

export default WelcomeScreen;
