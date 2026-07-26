function ProjectCard({
  title,
  description,
  technologies,
  status,
  githubUrl,
  projectUrl,
}) {
  return (
    <article className="project-card">
      <p className="project-status">{status}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="technology-list">
        {technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noreferrer">
            View Project
          </a>
        )}

        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;