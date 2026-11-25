import "../css/Projects.css";
import translations from "../data/translations";

export default function Projects({ language }) {
  const projects = translations.projects[language];
  const titles = translations.sections[language];

  return (
    <section id="projets" className="section">
      <h2 className="section-title">{titles.projects}</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            {/* Technos utilisées */}
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {titles.demo}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
