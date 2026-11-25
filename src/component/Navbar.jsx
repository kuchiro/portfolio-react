import "../css/Navbar.css";
import translations from "../data/translations";

export default function Navbar({theme, language, changeTheme, changeLanguage}) {
  const t = translations.navbar[language];

  return (
    <nav>
      <span><a href="">Stephane WU</a></span>
      <ul>
        <li>
          <a href="#about">{t.about}</a>
        </li>
        <li>
          <a href="#competences">{t.skills}</a>
        </li>
        <li>
          <a href="#projets">{t.projects}</a>
        </li>
        <li>
          <a href="#parcours">{t.background}</a>
        </li>

        <li>
            <button onClick={changeLanguage}>
                {language === "fr" ? "EN" : "FR"}
            </button>

        </li>
        <li>
          <button onClick={changeTheme}>
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </li>
      </ul>
    </nav>
  );
}
