import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navItems = [
  { id: 1, name: "Inicio", to: "home", icon: <FaHome /> },
  { id: 2, name: "Sobre mí", to: "about", icon: <FaUser /> },
  { id: 3, name: "Proyectos", to: "projects", icon: <FaProjectDiagram /> },
  { id: 4, name: "Contacto", to: "contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error("Error en visibilidad Navbar:", err);
      setIsVisible(true); // asegura renderizado en móviles
    }
  }, []);

  if (!isVisible) return null; // evita renderizar antes de tiempo

  return (
    <nav className="fixed w-full flex justify-center z-50 mt-4">
      <div className="bg-white text-black rounded-3xl px-8 py-3 flex space-x-8 shadow-[0_0_15px_rgba(0,0,0,0.6)]">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="relative cursor-pointer font-medium text-lg transition-colors duration-300"
            onSetActive={() => setActive(item.to)}
          >
            <motion.div
              className={`relative flex items-center space-x-2 justify-center px-3 py-1 rounded-2xl 
                ${
                  active === item.to
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-300"
                }`}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="relative z-10">{item.name}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
