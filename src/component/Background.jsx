import "../css/Timeline.css";
import translations from "../data/translations";

export default function Background({ language }) {
  const steps = translations.background[language];
  const titles = translations.sections[language];

  return (
    <section id="parcours" className="section">
      <h2 className="section-title">{titles.background}</h2>

      <ol className="timeline">
        {steps.map((step, index) => (
          <li
            className={`timeline-item ${step.type} ${step.side ?? ""}`}
            key={index}
          >
            <span className="timeline-date">{step.date}</span>
            <h3 className="timeline-title">{step.title}</h3>
            <p className="timeline-place">{step.place}</p>
            {step.desc && <p className="timeline-desc">{step.desc}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
