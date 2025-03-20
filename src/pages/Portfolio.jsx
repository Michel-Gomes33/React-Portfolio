import Project from "../components/Project";
import "../styles/portfolio.css";

const projects = [
    { title: "MyReads", image: "../src/assets/images/MyReads.png", url: "https://github.com/Michel-Gomes33/MyReads" }, 
    { title: "Readme Generator", image: "../src/assets/images/NodeProject.png", url: "https://github.com/Michel-Gomes33/READMEgenerator" }
];

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>My Projects</h2>
            <div className="portfolio-grid">
                {projects.map((proj, index) => <Project key={index} {...proj} />)}
            </div>
        </section>
    );
};

export default Portfolio;
