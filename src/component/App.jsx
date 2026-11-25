import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Secret from "./Secret";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("fr");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function changeLanguage() {
    setLanguage(language === "fr" ? "en" : "fr");
  }
  return (
    <BrowserRouter>
      <div className={theme}>
        <Navbar
          theme={theme}
          language={language}
          changeTheme={changeTheme}
          changeLanguage={changeLanguage}
        />
        <Routes>
          <Route path="/" element={<Main language={language} />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>

        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}
