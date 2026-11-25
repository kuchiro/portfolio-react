import "../css/Skills.css";
import translations from "../data/translations";

export default function Skills({ language }) {
  const techStacks = translations.techStack[language];
  const titles = translations.sections[language];

  return (
    <section id="competences" className="section">
      <h2 className="section-title">{titles.skills}</h2>
      <div className="stacks-container">
        {techStacks.map((stack) => (
          <div className="tech-card" key={stack.category}>
            <h3>{stack.category}</h3>
            <div className="tech-items">
              {stack.techs.map((tech) => (
                <div key={tech.name} className="tech-item">
                  <i className={`${tech.icon} colored`}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
