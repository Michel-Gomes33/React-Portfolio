import "../styles/resume.css";

const Resume = () => {
  return (
      <section className="resume-section">
          <div className="resume-container">
              <a href="/resume.pdf" download className="resume-download">
                  Download Resume
              </a>
              <h2 className="resume-title">Proficiencies</h2>
              <ul className="resume-list">
                  {["JavaScript", "React", "CSS", "Node.js", "TypeScript", "XML", "SQL", "HTML"].map((skill, index) => (
                      <li key={index} className="resume-skill">{skill}</li>
                  ))}
              </ul>
          </div>
      </section>
  );
};

export default Resume;
