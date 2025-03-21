import "../styles/about.css";

const About = () => {
    return (
        <section className="about">
            <div className="about-card">
                <img src="../src/assets/images/me.webp" alt="Michel Gomes" className="profile-pic"/>
                <div className="bio">
                    <h2>Michel Gomes</h2>
                    <p>
                        I am a Fullstack junior developer expanding my skills. 
                        This app showcases the projects I've worked on and the 
                        technologies I've learned.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
