import "../css/About.css";
import "../css/Button.css";
import socials from "../data/socials";
import translations from "../data/translations";

export default function About({ language }) {
  const t = translations.intro[language];

  return (
    <section id="about" className="intro">
      <p className="intro-tag">{t.tag}</p>
      <h1 className="intro-title">Stephane WU</h1>
      <p className="intro-sub">{t.sub}</p>
      <p className="intro-desc">{t.desc}</p>
      <div className="intro-btns">
        <button className="btn-primary">{t.btnCV}</button>
        <a href="#projets" className="btn-secondary">
          {t.btnProjects}
        </a>
      </div>

      <ul className="intro-socials">
        {socials.map((social) => (
          <li key={social.name}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={social.icon}></i>
              <span>{social.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
