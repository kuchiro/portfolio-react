import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Secret from "./Secret";
import NavBar from "./Navbar";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [langue, setLangue] = useState("fr");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function changeLangue() {
    setLangue(langue === "fr" ? "en" : "fr");
  }
  return (
    <BrowserRouter>
      <div className={theme === "light" ? "dark" : "light"}>
        <NavBar
          theme={theme}
          langue={langue}
          changeTheme={changeTheme}
          changeLangue={changeLangue}
        />
        <Routes>
          <Route path="/" element={<Home 
          langue ={langue}
          />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
