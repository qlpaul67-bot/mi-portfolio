import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Estado para dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Inicializamos dark mode solo en el cliente
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } catch (err) {
      console.error("Error accediendo a localStorage:", err);
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Actualizamos dark mode cuando cambie
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (err) {
      console.error("Error guardando theme:", err);
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
