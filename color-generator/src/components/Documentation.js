import React, { useState } from "react";
import "./Documentation.css";

function Documentation() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="documentation-layout">
      {/* Sidebar Navigation */}
      <nav className="docs-sidebar">
        <div className="sidebar-header">
          <h3>Documentation</h3>
        </div>
        <ul className="sidebar-nav">
          <li className={activeSection === "overview" ? "active" : ""}>
            <button onClick={() => scrollToSection("overview")}>
              Overview
            </button>
          </li>
          <li className={activeSection === "problem" ? "active" : ""}>
            <button onClick={() => scrollToSection("problem")}>
              Problem Statement
            </button>
          </li>
          <li className={activeSection === "models" ? "active" : ""}>
            <button onClick={() => scrollToSection("models")}>
              Model Development
            </button>
            <ul className="sub-nav">
              <li>
                <button onClick={() => scrollToSection("u2net")}>
                  U2-NET Model
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("kmeans")}>
                  K-Means Clustering
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("palette")}>
                  Palette Generation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("assignment")}>
                  Color Assignment
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="docs-content">
        <div className="docs-container">
          {/* Overview Section */}
          <section id="overview" className="doc-section">
            <div className="section-header">
              <h1>Paletto Documentation</h1>
              <p className="lead">
                Empowering Design Excellence Through Intelligent Color Selection
                and Recoloring
              </p>
            </div>
            <div className="overview-cards">
              <div className="feature-card">
                <div className="card-icon">🎨</div>
                <h3>AI-Powered</h3>
                <p>
                  Advanced machine learning models for intelligent color
                  extraction and palette generation.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon">⚡</div>
                <h3>Fast & Efficient</h3>
                <p>
                  Real-time color processing with optimized algorithms for quick
                  results.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon">🎯</div>
                <h3>Precise Selection</h3>
                <p>
                  Accurate focal object detection and harmonious color
                  assignment.
                </p>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section id="problem" className="doc-section">
            <h2>Problem Statement</h2>
            <div className="content-block">
              <p>
                Choosing the right colors for design elements in UI/UX and
                graphic design is a complex but essential task. Studies show
                that color influences between 62% to 90% of consumer decisions,
                highlighting the critical role of color selection in achieving
                the desired emotional and visual impact.
              </p>
              <p>
                However, designers often face challenges in finding harmonious
                color palettes that align with their design goals. This process
                can be time-consuming and stressful, especially when managing
                multiple design elements and testing numerous combinations
                manually.
              </p>
              <div className="highlight-box">
                <strong>Paletto</strong> was created to revolutionize this
                process, transforming color selection into an intuitive and
                creative experience.
              </div>
            </div>
          </section>

          {/* Model Development */}
          <section id="models" className="doc-section">
            <h2>Model Development</h2>

            {/* U2-NET Model */}
            <div id="u2net" className="model-subsection">
              <h3>1. U2-NET Model</h3>
              <div className="model-details">
                <p>
                  We use the U2-NET model to extract focal objects from images.
                  It is a deep-learning model that excels at identifying
                  important areas in images. This model works well for our task
                  of detecting key elements (focal objects) in designs.
                </p>
                <div className="io-specs">
                  <div className="spec-item">
                    <span className="spec-label">Input:</span>
                    <span className="spec-value">Preprocessing image</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output:</span>
                    <span className="spec-value">Focal object</span>
                  </div>
                </div>
                <div className="image-container">
                  <img
                    src="u2_net.jpg"
                    alt="U2-NET Model Architecture"
                    className="model-image"
                  />
                  <p className="image-caption">
                    Figure 1: U2-NET Model Architecture
                  </p>
                </div>
              </div>
            </div>

            {/* K-Means */}
            <div id="kmeans" className="model-subsection">
              <h3>2. K-Means Algorithm for Clustering</h3>
              <div className="model-details">
                <p>
                  The K-Means algorithm analyzes the extracted focal object from
                  the U2-NET model to determine primary colors that form the
                  foundation for palette creation.
                </p>
                <div className="io-specs">
                  <div className="spec-item">
                    <span className="spec-label">Input:</span>
                    <span className="spec-value">Focal object</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output:</span>
                    <span className="spec-value">Basic palette (3 colors)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Palette Generation */}
            <div id="palette" className="model-subsection">
              <h3>
                3. Palette Model (GMM) and Palette Search (MCTS) Algorithms
              </h3>

              <div className="sub-model">
                <h4>3.1 Gaussian Mixture Models (GMM)</h4>
                <p>
                  For effective color distribution modeling, GMM generates new
                  colors to extend the basic palette.
                </p>
                <div className="io-specs">
                  <div className="spec-item">
                    <span className="spec-label">Input:</span>
                    <span className="spec-value">Basic palette</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output:</span>
                    <span className="spec-value">
                      Generation of new colors (Extended palettes)
                    </span>
                  </div>
                </div>
              </div>

              <div className="sub-model">
                <h4>3.2 Monte Carlo Tree Search (MCTS)</h4>
                <p>
                  MCTS optimizes the selection process of color combinations to
                  generate extended color palettes more efficiently.
                </p>
                <div className="io-specs">
                  <div className="spec-item">
                    <span className="spec-label">Input:</span>
                    <span className="spec-value">
                      Basic palette, new colors (if found from GMM), and number
                      of iterations
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output:</span>
                    <span className="spec-value">
                      A set of improved colors for generating extended color
                      palettes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Assignment */}
            <div id="assignment" className="model-subsection">
              <h3>4. Algorithms for Assigning Colors to Layers of Design</h3>

              <div className="sub-model">
                <h4>4.1 Color Contrast Enhancement Algorithm</h4>
                <p>
                  Enhances color contrast, ensuring harmonious and comfortable
                  color assignments for design layers.
                </p>
                <div className="requirements">
                  <span className="req-label">Requirements:</span>
                  <span className="req-value">
                    Extended palette, average-color, focal-object, layers
                  </span>
                </div>
              </div>

              <div className="sub-model">
                <h4>4.2 PL Algorithm for Assigning Colors</h4>
                <p>
                  Selects suitable colors for design layers based on the
                  distance between colors in the palette and the focal objects.
                </p>
                <div className="requirements">
                  <span className="req-label">Requirements:</span>
                  <span className="req-value">
                    Extended palette, average-color, focal-object, layers
                  </span>
                </div>
              </div>

              <div className="sub-model">
                <h4>4.3 Sequential Algorithm for Assigning Colors</h4>
                <p>Assigns new colors to design layers sequentially.</p>
                <div className="requirements">
                  <span className="req-label">Requirements:</span>
                  <span className="req-value">Extended palette, layers</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Documentation;
