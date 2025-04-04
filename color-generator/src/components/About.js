import "./About.css";
function AboutApp() {
    return (
        <section className="about-container">
            <div className="title">
                <h2>
                    Identify Color Palette from Any Image in Seconds
                </h2>
            </div>

            <div className="about-content">
                <div className="about-info">
                    <p>
                        Whether you are a graphic designer looking to create the perfect
                        color combination, or simply came across an image with a color
                        scheme you love, there are multiple reasons you may need to extract
                        color palettes from images. Picsart offers a completely free and
                        user-friendly color palette generator from images to identify the
                        color scheme and use it as needed. Create beautiful images of your
                        own, or learn color combinations that work for you or your app or
                        website viewers and users. No matter why you need to receive the
                        color palette from any picture, Picsart can help.
                    </p>
                </div>

            </div>

            <div className="team-members">
                <div className="team-title">Team <br />Members</div>
                <ul>
                    <li>Salah Ayman Fawzi Mostafa</li>
                    <li>Basel Ashraf Ahmed Mohamed </li>
                    <li>Aml Shehta Mohamed Elmonairy</li>
                    <li>Mayar Mohamed Hassan Basuni</li>
                    <li>Nada Saied Ibrahim Mohamed</li>
                    <li>Sayed Ahmed Sayed Ahmed</li>
                    <li>Sherif Mohamed Mohamed Abdelsalam</li>
                </ul>
            </div>
        </section>
    );
}

export default AboutApp;
