import React, { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart, FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // For mobile initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 pt-16 pb-8 mt-20 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Sección 1: Sobre mí */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                PaúL O.R.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Desarrollador Full Stack apasionado por crear experiencias web increíbles. Transformando ideas en código desde 2023.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <FaCode className="text-blue-400" />
                <span className="text-sm">Si puedes imaginarlo, puedes programarlo</span>
              </div>
            </div>

            {/* Sección 2: Enlaces Rápidos */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {["home","about","projects","skills","contact"].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300"></span>
                      <span className="capitalize">{section === "about" ? "Sobre Mí" : section}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sección 3: Servicios */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Servicios</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaLaptopCode className="text-blue-400 text-xl flex-shrink-0" />
                  <span>Desarrollo Web</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaPalette className="text-purple-400 text-xl flex-shrink-0" />
                  <span>Diseño UI/UX</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaCode className="text-green-400 text-xl flex-shrink-0" />
                  <span>Desarrollo Frontend</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaCode className="text-yellow-400 text-xl flex-shrink-0" />
                  <span>Desarrollo Backend</span>
                </li>
              </ul>
            </div>

            {/* Sección 4: Contacto */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400">
                  <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                  <a href="mailto:qlpaul67@gmail.com" className="hover:text-blue-400 transition-colors duration-300 break-words">
                    qlpaul67@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <FaPhone className="text-green-400 mt-1 flex-shrink-0" />
                  <span>+51 965900680</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
                  <span>Pichanaki, Perú</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divisor decorativo */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Sección inferior */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start space-x-2 flex-wrap">
                <span>© {currentYear} PaúL O.R. Hecho con</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>y mucho código</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">Todos los derechos reservados</p>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center space-x-6 flex-wrap justify-center md:justify-end">
              <span className="text-gray-400 text-sm hidden md:block">Sígueme en:</span>
              <div className="flex space-x-4 flex-wrap justify-center">
                {[
                  { href:"https://github.com/qlpaul67-bot", icon:FaGithub },
                  { href:"https://www.facebook.com/shandee.roncal?locale=es_LA", icon:FaFacebook },
                  { href:"https://x.com/LPaul_05", icon:FaTwitter },
                  { href:"https://www.instagram.com/qlpaul67/", icon:FaInstagram }
                ].map(({href, icon: Icon}, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 text-gray-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    aria-label="Red social"
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante "Volver arriba" */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 sm:right-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl text-xl z-50 transform hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
