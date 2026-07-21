function ProjectCard({ title, description, technologies, status }) {
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
        <a href="#" aria-label={`View ${title} details`}>
          View Project
        </a>

        <a href="#" aria-label={`View ${title} source code`}>
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;