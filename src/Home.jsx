import "./Home.css";

const translations = {
    fr: {
      tag: "Développeur Full Stack",
      sub: "Master Informatique · Sorbonne Paris Nord",
      desc: "À la recherche d'un stage full stack - Paris",
      btnCV: "Télécharger mon CV",
      btnProjects: "Voir mes projets",
    },
    en: {
      tag: "Full Stack Developer",
      sub: "Master's in Computer Science - Sorbonne Paris Nord",
      desc: "Looking for a full stack internship - Paris",
      btnCV: "Download my CV",
      btnProjects: "See my projects",
    },
  };

  const projects = [
    {
      titre: "Portfolio",
      description: "Mon portfolio personnel réalisé avec React.",
      tags: ["React", "JavaScript", "CSS"],
      lienGithub: "https://github.com/...",
      lienDemo: "https://..."
    },
    {
      titre: "Site Pizzeria",
      description: "Site web réalisé pour une pizzeria.",
      tags: ["Laravel", "PHP", "MySQL"],
      lienGithub: "https://github.com/...",
      lienDemo: "https://..."
    }
  ];

export default function Home({ langue }) {

  const t = translations[langue];

  return (
    <main>
      <section className="intro">
        <p className="intro-tag">
          {t.tag}
        </p>
        <h1 className="intro-title">Stephane WU</h1>
        <p className="intro-sub">{t.sub}</p>
        <p className="intro-desc">
            {t.desc}
        </p>
        <div className="intro-btns">
          <button className="btn-primary">{t.btnCV}</button>
          <a href="#projets" className="btn-secondary">
            {t.btnProjects}
          </a>
        </div>
      </section>

      <section id="projets">
        <h2>Mes projets</h2>

        <div className="projects-container">

          {projects.map((project) => (
            <div
              className="project-card"
              key={project.titre}
            >

              <h3>{project.titre}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span
                    className="tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.lienGithub}>
                  GitHub
                </a>

                <a href={project.lienDemo}>
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
