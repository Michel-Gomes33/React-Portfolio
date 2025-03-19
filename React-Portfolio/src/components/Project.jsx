const Project = ({ title, image, url, repo }) => {
    return (
      <div className="project">
        <h3>{title}</h3>
        <a href={url} target="_blank" >
          <img src={image} alt={title} width="200" />
        </a>
        <p><a href={repo} target="_blank" >GitHub Repo</a></p>
      </div>
    );
  };
  
  export default Project;