import React, { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaDownload, FaBriefcase } from "react-icons/fa";

const titles = ["Desarrollador Web", "Programador Creativo", "Apasionado por el Código"];

const About = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para asegurar que la animación se ejecute al cargar
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setCurrentTitle(titles[titleIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === titles[titleIndex].length) setDeleting(true);
      } else {
        setCurrentTitle(titles[titleIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, deleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center px-6 bg-white relative overflow-hidden"
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-black opacity-[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-[0.02] rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Etiqueta superior */}
        <div className="text-center mb-6">
          <span 
            className="text-xs uppercase tracking-widest text-gray-500 font-light inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            Sobre Mí
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          
          {/* TEXTO */}
          <div className="text-center md:text-left max-w-xl order-2 md:order-1">
            
            {/* Título principal */}
            <h1 
              className="text-4xl md:text-5xl font-black text-black mb-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              👋 Hola, soy <span className="inline-block">Paul</span>
            </h1>

            {/* Subtítulo animado */}
            <h2 
              className="text-2xl md:text-3xl font-bold text-gray-700 h-10 mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              {currentTitle}
              <span className="border-r-2 border-black ml-1 animate-pulse"></span>
            </h2>

            {/* Descripción */}
            <p 
              className="text-gray-600 leading-relaxed text-sm md:text-base mb-5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.8s'
              }}
            >
              Estudiante de <strong>Arquitectura de Plataformas y Servicios de TI</strong> y desarrollador web. 
              Me apasiona crear, aprender y llevar mis ideas a la realidad a través de la programación y la creatividad.
            </p>

            {/* BOTONES */}
            <div 
              className="flex flex-col sm:flex-row gap-3 mb-5 justify-center md:justify-start"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 1s'
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white font-bold rounded-full text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaBriefcase size={14} />
                <span>Contratar</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1qnyWrBL37TJARuVGskOSmS_Bd3S3wcCD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black border-2 border-black font-bold rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaDownload size={14} />
                <span>Descargar CV</span>
              </a>
            </div>

            {/* SEPARADOR */}
            <div 
              className="border-t border-gray-300 mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                width: isVisible ? '100%' : '0%',
                transition: 'all 0.8s ease-out 1.2s'
              }}
            ></div>

            {/* REDES SOCIALES */}
            <div 
              className="flex space-x-5 justify-center md:justify-start text-black"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 1.4s'
              }}
            >
              <a 
                href="https://github.com/qlpaul67-bot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.facebook.com/shandee.roncal?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="https://x.com/LPaul_05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                title="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/qlpaul67/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* IMAGEN */}
          <div 
            className="relative order-1 md:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
            }}
          >
            <div className="relative">
              {/* Anillo decorativo animado */}
              <div className="absolute -inset-4 border-2 border-black rounded-full opacity-20 animate-ping"></div>
              
              <img
                src="/usuario.png"
                alt="Jack Paul Ortega Roncal"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-black relative z-10 hover:scale-105 transition-transform duration-300"
              />
              
              {/* Borde decorativo */}
              <div className="absolute -inset-2 border-2 border-black rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos adicionales */}
      <style>{`
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default About;