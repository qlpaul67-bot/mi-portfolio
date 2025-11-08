import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Sistema de Inventario",
    description:
      "Aplicación web completa para gestionar productos, usuarios y reportes en tiempo real con dashboard interactivo.",
    image: "/inventario1.jpg",
    link: "#",
    github: "#",
    tags: ["Flask", "MySQL", "Bootstrap", "Python"],
    category: "Web"
  },
  {
    title: "App de Registro de Estudiantes",
    description:
      "Aplicación móvil Android con base de datos SQLite que permite registrar, editar y eliminar información de alumnos de forma offline.",
    image: "/app1.jpg",
    link: "#",
    github: "#",
    tags: ["Android", "SQLite", "Java", "XML"],
    category: "Mobile"
  },
  {
    title: "Portafolio Personal",
    description:
      "Sitio web moderno y animado con diseño minimalista para mostrar proyectos, habilidades y experiencia profesional.",
    image: "/portafolio1.jpg",
    link: "#",
    github: "#",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "Web"
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = ["All", "Web", "Mobile"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-8 px-6 relative overflow-hidden flex items-center"
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-black opacity-[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-[0.02] rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block mb-2">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-light">
              Portafolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-3">
            MIS PROYECTOS
          </h2>
          <p className="text-gray-600 text-sm md:text-sm max-w-2xl mx-auto">
            Una selección de trabajos que demuestran mi experiencia en desarrollo web y móvil
          </p>

          {/* Filtros */}
          <div className="flex justify-center gap-2 mt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-black border-2 border-black hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 justify-items-center">
  {filteredProjects.map((project, index) => (
    <div
      key={index}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 w-72 md:w-72"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
              {/* Imagen con overlay */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay oscuro al hacer hover */}
                <div 
                  className="absolute inset-0 bg-black transition-opacity duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 0.7 : 0
                  }}
                ></div>

                {/* Botones de acción (aparecen en hover) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow"
                    title="Ver proyecto"
                  >
                    <Eye size={18} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow"
                    title="Ver código"
                  >
                    <Github size={18} />
                  </a>
                </div>

                {/* Badge de categoría */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-white text-black text-xs font-bold rounded-full shadow">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tags de tecnologías */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gray-100 text-black text-xs font-medium rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link principal */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-black text-sm font-semibold hover:gap-2 transition-all duration-300 group/link"
                >
                  <span>Ver más detalles</span>
                  <ExternalLink 
                    size={14} 
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* Borde animado en hover */}
              <div 
                className="absolute inset-0 border-2 border-black rounded-2xl transition-opacity duration-500 pointer-events-none"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0
                }}
              ></div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
