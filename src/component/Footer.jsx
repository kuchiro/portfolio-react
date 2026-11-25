import "../css/Footer.css";
import socials from "../data/socials";
import translations from "../data/translations";


export default function Footer({ language }) {
  const t = translations.footer[language];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-brand">
        <strong>Stephane WU</strong>
        <span>{t.role}</span>
      </p>

      <p className="footer-copy">
        © {year} Stephane WU. {t.rights}
      </p>

      <ul className="footer-socials">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
