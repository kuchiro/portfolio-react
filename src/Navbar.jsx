import { useState } from "react";
import "./Navbar.css";

export default function NavBar({theme, langue, changeTheme, changeLangue}) {

  return (
    <nav>
      <span>Stephane WU</span>
      <ul>
        <li>
          <a href="#accueil">Accueil</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
        <li>
          <a href="#competences">Compétences</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
            <button onClick={changeLangue}>
                {langue === "fr" ? "EN" : "FR"}
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
