import React, { useState, useEffect } from "react";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simula progreso de carga
  useEffect(() => {
    let interval;
    try {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setLoading(false), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
    } catch (err) {
      console.error("Error en la animación de carga:", err);
      setLoading(false); // asegura que el contenido principal se muestre aunque falle algo
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center text-black relative overflow-hidden">
      
      {/* --- Loading Screen --- */}
      {loading && (
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white z-50"
          style={{
            opacity: loading ? 1 : 0,
            transition: 'opacity 0.8s ease-out'
          }}
        >
          {/* Círculos decorativos animados */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-black rounded-full"
              style={{
                animation: 'spin 8s linear infinite',
                opacity: 0.1
              }}
            ></div>
            <div 
              className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-black rounded-full"
              style={{
                animation: 'spin 6s linear infinite reverse',
                opacity: 0.1
              }}
            ></div>
          </div>

          {/* Texto Cargando con efecto de escritura */}
          <div className="text-6xl md:text-8xl font-bold mb-12 relative z-10">
            <span 
              className="inline-block"
              style={{
                animation: 'fadeInScale 0.6s ease-out'
              }}
            >
              CARGANDO
            </span>
            <span 
              className="inline-block ml-4"
              style={{
                animation: 'dots 1.5s infinite'
              }}
            >
              ...
            </span>
          </div>

          {/* Barra de progreso moderna */}
          <div className="w-80 md:w-96 relative z-10">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-2xl font-bold text-center mt-6">
              {progress}%
            </div>
          </div>

          {/* Líneas decorativas */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-black rounded-full"
                style={{
                  height: '40px',
                  animation: `wave 1s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* --- Hero Content --- */}
      <div 
        className="text-center px-8 md:px-20 lg:px-32 max-w-7xl w-full"
        style={{
          animation: loading ? "none" : "fadeInUp 1s ease-out"
        }}
      >
        {/* PORTAFOLIO - texto pequeño */}
        <div 
          className="text-lg md:text-2xl font-light tracking-widest mb-6 uppercase"
          style={{
            animation: loading ? "none" : "fadeIn 1s ease-out 0.3s both",
            letterSpacing: '0.3em'
          }}
        >
          Portafolio de
        </div>

        {/* NOMBRE - texto grande */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight"
          style={{
            animation: loading ? "none" : "fadeInScale 1s ease-out 0.6s both",
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          JACK PAUL
        </h1>
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight mt-2"
          style={{
            animation: loading ? "none" : "fadeInScale 1s ease-out 0.8s both",
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          ORTEGA RONCAL
        </h1>

        {/* Línea decorativa debajo */}
        <div className="flex justify-center mt-10">
          <div 
            className="h-1 bg-black rounded-full"
            style={{
              width: '0%',
              animation: loading ? "none" : "expandWidth 1s ease-out 1.2s both",
              maxWidth: '300px'
            }}
          ></div>
        </div>

        {/* Subtitle opcional */}
        <p 
          className="text-base md:text-xl font-light mt-8 tracking-wide"
          style={{
            animation: loading ? "none" : "fadeIn 1s ease-out 1.4s both"
          }}
        >
          Full Stack Developer & Creative Designer
        </p>
      </div>

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes wave { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.5); } }
        @keyframes expandWidth { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </section>
  );
};

export default Hero;
