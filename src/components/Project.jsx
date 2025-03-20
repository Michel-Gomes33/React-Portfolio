const Project = ({ title, image, url, repo }) => {
  return (
      <div className="project-card">
          <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={`${title} screenshot`} className="project-image" />
          </a>
          <div className="project-info">
              <h3>{title}</h3>
              <div className="project-links">
                  
                  <a href={repo} target="_blank" rel="noopener noreferrer" className="project-btn">
                      GitHub Repo
                  </a>
              </div>
          </div>
      </div>
  );
};

export default Project;
