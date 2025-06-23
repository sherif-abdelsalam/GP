import { Link } from "react-router-dom";
import "./About.css";

function AboutApp() {
  const teamMembers = [
    {
      name: "Salah Ayman Fawzi Mostafa",
      role: "Team Lead",
      avatar: "👨‍💻",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:salah@paletto.com",
      },
    },
    {
      name: "Basel Ashraf Ahmed Mohamed",
      role: "Backend Developer",
      avatar: "👨‍💻",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:basel@paletto.com",
      },
    },
    {
      name: "Aml Shehta Mohamed Elmonairy",
      role: "UI/UX Designer",
      avatar: "👩‍💻",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:aml@paletto.com",
      },
    },
    {
      name: "Mayar Mohamed Hassan Basuni",
      role: "Frontend Developer",
      avatar: "👩‍🎨",
      social: {
        linkedin: "#",
        behance: "#",
        email: "mailto:mayar@paletto.com",
      },
    },
    {
      name: "Nada Saied Ibrahim Mohamed",
      role: "Data Scientist",
      avatar: "👩‍🔬",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:nada@paletto.com",
      },
    },
    {
      name: "Sayed Ahmed Sayed Ahmed",
      role: "ML Engineer",
      avatar: "👨‍🔬",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:sayed@paletto.com",
      },
    },
    {
      name: "Sherif Mohamed Mohamed Abdelsalam",
      role: "Full Stack Developer",
      avatar: "👨‍💻",
      social: {
        linkedin: "https://www.linkedin.com/in/sherif-abdelsalam/",
        github: "https://github.com/sherif-abdelsalam",
        email: "mailto:sherif.abdelsalam@gmail.com",
      },
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Revolutionizing Color Selection with AI
            </h1>
            <p className="hero-subtitle">
              Paletto combines advanced machine learning with intuitive design
              to transform how you work with colors.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">90%</span>
                <span className="stat-label">Accuracy</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2s</span>
                <span className="stat-label">Processing Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Possibilities</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="color-palette-demo">
              <div className="palette-row">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#fb6564" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#a03cea" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#4ade80" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#fbbf24" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#60a5fa" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission</h2>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                Whether you're a graphic designer looking to create the perfect
                color combination, or a developer seeking harmonious palettes
                for your next project, Paletto provides the tools you need to
                extract and generate beautiful color schemes from any image.
              </p>
              <p>
                Our AI-powered platform analyzes images in seconds, identifying
                the most prominent colors and creating harmonious palettes that
                work perfectly for your design needs. No more guesswork, no more
                time-consuming manual color selection.
              </p>
            </div>
            <div className="mission-features">
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3>Smart Extraction</h3>
                <p>
                  Advanced algorithms identify the most important colors in any
                  image
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>Lightning Fast</h3>
                <p>Get your color palette in seconds, not minutes</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3>Perfect Harmony</h3>
                <p>AI ensures your colors work together beautifully</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
          </div>
          <div
            className={`team-grid ${
              teamMembers.length === 1
                ? "single-card"
                : teamMembers.length === 2
                ? "double-cards"
                : ""
            }`}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card"
                style={{ "--card-index": index }}
              >
                <div className="member-avatar">
                  <span className="avatar-emoji">{member.avatar}</span>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
                <div className="member-social">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="social-link"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="social-link"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={member.social.email}
                      className="social-link"
                      aria-label="Email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Color Workflow?</h2>

            <Link to="/" className="cta-button">
              Get Started Now
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutApp;
