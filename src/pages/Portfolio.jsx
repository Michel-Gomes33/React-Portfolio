import Project from "../components/Project";
 

const projects = [
    {title:"MyReads", image:"./assets/images/MyReads.png", url:"https://github.com/Michel-Gomes33/MyReads"}, 
    {title:"Readme Generator", image:"./assets/NodeProject.png", url:"https://github.com/Michel-Gomes33/READMEgenerator"}
]

const Portfolio = () => {
    return (
        <section>
            {projects.map((proj, index) => <Project key= {index} {...proj} />)}
        </section>
    );
};

export default Portfolio;