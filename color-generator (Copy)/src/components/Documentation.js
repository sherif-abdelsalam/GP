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
    <div className="docs-layout">
      {/* Sidebar Navigation */}
      <aside className="docs-sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🎨</span>
            <span className="logo-text">Paletto</span>
          </div>
          <p className="sidebar-subtitle">Documentation</p>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h4 className="nav-title">Getting Started</h4>
            <ul className="nav-list">
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
            </ul>
          </div>

          <div className="nav-section">
            <h4 className="nav-title">Technical Details</h4>
            <ul className="nav-list">
              <li className={activeSection === "u2net" ? "active" : ""}>
                <button onClick={() => scrollToSection("u2net")}>
                  U2-NET Model
                </button>
              </li>
              <li className={activeSection === "kmeans" ? "active" : ""}>
                <button onClick={() => scrollToSection("kmeans")}>
                  K-Means Clustering
                </button>
              </li>
              <li className={activeSection === "palette" ? "active" : ""}>
                <button onClick={() => scrollToSection("palette")}>
                  Palette Generation
                </button>
              </li>
              <li className={activeSection === "assignment" ? "active" : ""}>
                <button onClick={() => scrollToSection("assignment")}>
                  Color Assignment
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="docs-main">
        <div className="docs-container">
          {/* Overview Section */}
          <section id="overview" className="docs-section">
            <div className="section-header">
              <div className="breadcrumb">
                <span>Documentation</span>
                <span className="separator">/</span>
                <span>Overview</span>
              </div>
              <h1>Paletto Documentation</h1>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>AI-Powered</h3>
                <p>
                  Advanced machine learning models for intelligent color
                  extraction and palette generation.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast & Efficient</h3>
                <p>
                  Real-time color processing with optimized algorithms for quick
                  results.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Precise Selection</h3>
                <p>
                  Accurate focal object detection and harmonious color
                  assignment.
                </p>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section id="problem" className="docs-section">
            <div className="section-header">
              <div className="breadcrumb">
                <span>Documentation</span>
                <span className="separator">/</span>
                <span>Problem Statement</span>
              </div>
              <h2>Problem Statement</h2>
            </div>

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
              <div className="callout">
                <div className="callout-icon">💡</div>
                <div className="callout-content">
                  <strong>Paletto</strong> was created to revolutionize this
                  process, transforming color selection into an intuitive and
                  creative experience.
                </div>
              </div>
            </div>
          </section>

          {/* Model Development */}
          <section id="models" className="docs-section">
            <div className="section-header">
              <div className="breadcrumb">
                <span>Documentation</span>
                <span className="separator">/</span>
                <span>Technical Details</span>
                <span className="separator">/</span>
                <span>Model Development</span>
              </div>
              <h2>Model Development</h2>
            </div>

            {/* U2-NET Model */}
            <div id="u2net" className="model-section">
              <h3>U2-NET Model</h3>
              <div className="model-content">
                <p>
                  We use the U2-NET model to extract focal objects from images.
                  It is a deep-learning model that excels at identifying
                  important areas in images. This model works well for our task
                  of detecting key elements (focal objects) in designs.
                </p>

                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Input</span>
                    <span className="spec-value">Preprocessing image</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output</span>
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
            <div id="kmeans" className="model-section">
              <h3>K-Means Algorithm for Clustering</h3>
              <div className="model-content">
                <p>
                  The K-Means algorithm analyzes the extracted focal object from
                  the U2-NET model to determine primary colors that form the
                  foundation for palette creation.
                </p>

                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Input</span>
                    <span className="spec-value">Focal object</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output</span>
                    <span className="spec-value">Basic palette (3 colors)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Palette Generation */}
            <div id="palette" className="model-section">
              <h3>Palette Model (GMM) and Palette Search (MCTS) Algorithms</h3>

              <div className="sub-section">
                <h4>Gaussian Mixture Models (GMM)</h4>
                <p>
                  For effective color distribution modeling, GMM generates new
                  colors to extend the basic palette.
                </p>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Input</span>
                    <span className="spec-value">Basic palette</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output</span>
                    <span className="spec-value">
                      Generation of new colors (Extended palettes)
                    </span>
                  </div>
                </div>
              </div>

              <div className="sub-section">
                <h4>Monte Carlo Tree Search (MCTS)</h4>
                <p>
                  MCTS optimizes the selection process of color combinations to
                  generate extended color palettes more efficiently.
                </p>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Input</span>
                    <span className="spec-value">
                      Basic palette, new colors (if found from GMM), and number
                      of iterations
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Output</span>
                    <span className="spec-value">
                      A set of improved colors for generating extended color
                      palettes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Assignment */}
            <div id="assignment" className="model-section">
              <h3>Algorithms for Assigning Colors to Layers of Design</h3>

              <div className="sub-section">
                <h4>Color Contrast Enhancement Algorithm</h4>
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

              <div className="sub-section">
                <h4>PL Algorithm for Assigning Colors</h4>
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

              <div className="sub-section">
                <h4>Sequential Algorithm for Assigning Colors</h4>
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
