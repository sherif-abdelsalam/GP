import React from "react";
import "./Documentation.css";

function Documentation() {
    return (
        <div className="documentation-container">
            <header className="doc-header">
                <h2>Empowering Design Excellence Through
                    Intelligent Color Selection and Recoloring
                </h2>
            </header>

            <section className="doc-section">
                <h2>
                    What is the main problem that you are solving?
                </h2>
                <p>
                    Choosing the right colors for design elements in UI/UX and graphic design is a complex but essential task. Studies show that color influences between 62% to 90% of consumer decisions, highlighting the critical role of color selection in achieving the desired emotional and visual impact. However, designers often face challenges in finding harmonious color palettes that align with their design goals. This process can be time-consuming and stressful, especially when managing multiple design elements and testing numerous combinations manually.
                </p>
                <br />
                <p>
                    <strong >Paletto</strong> was created to revolutionize this process, transforming color selection into an intuitive and creative experience.
                </p>

            </section>

            {/* <section className="doc-section">
                <h2>Team Members</h2>
                <ul className="team-list">
                    <li>Salah Ayman Fawzi Mostafa</li>
                    <li>Sherif Mohamed Mohamed</li>
                    <li>Basel Ashraf Ahmed Mohamed</li>
                    <li>El Sayed Ahmed ElSayed Ahmed</li>
                    <li>Aml Shehta Mohamed Elmonairy</li>
                    <li>Mayar Mohamed Hassan Basuni</li>
                    <li>Nada Saied Ibrahim Mohamed</li>
                </ul>
            </section> */}

            <section className="doc-section">
                <h2>Model Development</h2>
                <article className="model-article">
                    <h3>1. U2-NET Model</h3>
                    <p>
                        We use the U2-NET model to extract focal objects from images. It is a deep-learning model that excels at identifying important areas in images. This model will work well for our task of detecting key elements (focal objects) in designs. Its architecture is advanced, as shown in Figure 1.
                    </p>
                    <p><strong>Input:</strong> Preprocessing image</p>
                    <p><strong>Output:</strong> Focal object</p>
                    <div className="image-container">
                        <img src="u2_net.jpg" alt="Paletto" className="rounded-image" />
                        <p className="image-caption">Figure 1 : U2-NET Model Architecture</p>
                    </div>
                </article>

                <article className="model-article">
                    <h3>2. K-Mean Algorithm for Clustering</h3>
                    <p>
                        The K-Mean algorithm analyzes the extracted focal object from the U2-NET model to determine primary colors that form the foundation for palette creation.
                    </p>
                    <p><strong>Input:</strong> Focal object</p>
                    <p><strong>Output:</strong> Basic palette (3 colors)</p>
                </article>

                <article className="model-article">
                    <h3>3. Palette Model (GMM) and Palette Search (MCTS) Algorithms</h3>
                    <article>
                        <h4>3.1 Gaussian Mixture Models (GMM)</h4>
                        <p>
                            For effective color distribution modeling, GMM generates new colors to extend the basic palette.
                        </p>
                        <p><strong>Input:</strong> Basic palette</p>
                        <p><strong>Output:</strong> Generation of new colors (Extended palettes)</p>
                    </article>
                    <article>
                        <h4>3.2 Monte Carlo Tree Search (MCTS)</h4>
                        <p>
                            MCTS optimizes the selection process of color combinations to generate extended color palettes more efficiently.
                        </p>
                        <p><strong>Input:</strong> Basic palette, new colors (if found from GMM), and number of iterations</p>
                        <p><strong>Output:</strong> A set of improved colors for generating extended color palettes</p>
                    </article>
                </article>

                <article className="model-article">
                    <h3>4. Algorithms for Assigning Colors to Layers of Design</h3>
                    <article>
                        <h4>4.1 Color Contrast Enhancement Algorithm</h4>
                        <p>
                            Enhances color contrast, ensuring harmonious and comfortable color assignments for design layers.
                        </p>
                        <p><strong>Require:</strong> Extended palette, average-color, focal-object, layers</p>
                    </article>
                    <article>
                        <h4>4.2 PL Algorithm for Assigning Colors</h4>
                        <p>
                            Selects suitable colors for design layers based on the distance between colors in the palette and the focal objects.
                        </p>
                        <p><strong>Require:</strong> Extended palette, average-color, focal-object, layers</p>
                    </article>
                    <article>
                        <h4>4.3 Sequential Algorithm for Assigning Colors</h4>
                        <p>
                            Assigns new colors to design layers sequentially.
                        </p>
                        <p><strong>Require:</strong> Extended palette, layers</p>
                    </article>
                </article>
            </section>
        </div>
    );
}

export default Documentation;