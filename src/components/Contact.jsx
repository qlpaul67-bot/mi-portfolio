import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Preparamos los datos para EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      "service_noutldb",  // tu Service ID
      "template_3aia7i6",  // tu Template ID
      templateParams,
      "KNMeFg_IciVJSTeYe"    // tu Public Key
    )
    .then(
      (response) => {
        console.log("Correo enviado!", response.status, response.text);
        alert("¡Mensaje enviado con éxito!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log("Error al enviar correo:", error);
        alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-white px-6 relative overflow-hidden"
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black opacity-[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-[0.02] rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
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
            Contacto
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          
          {/* IMAGEN */}
          <div 
            className="relative order-1 md:order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) rotate(0deg)' : 'translateX(-50px) rotate(-5deg)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-black rounded-2xl opacity-10 animate-pulse-slow"></div>
              
              <img
                src="/registro.png"
                alt="Contacto"
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl border-4 border-black relative z-10 hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute -inset-2 border-2 border-black rounded-2xl opacity-5"></div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div 
            className="w-full max-w-lg order-2 md:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            <div className="bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.15)] p-6 md:p-8 border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-3 text-center">
                CONTÁCTAME
              </h2>
              <p className="text-gray-600 text-center mb-6 text-sm">
                ¿Tienes un proyecto en mente? ¡Hablemos! 💬
              </p>

              <div className="mb-4 relative">
                <label className="flex items-center gap-2 text-black font-bold mb-2 text-sm">
                  <User size={16} />
                  <span>Nombre</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border-2 border-gray-200 text-black focus:border-black focus:bg-white outline-none transition-all duration-300 text-sm"
                />
              </div>

              <div className="mb-4 relative">
                <label className="flex items-center gap-2 text-black font-bold mb-2 text-sm">
                  <Mail size={16} />
                  <span>Correo electrónico</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tuemail@ejemplo.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border-2 border-gray-200 text-black focus:border-black focus:bg-white outline-none transition-all duration-300 text-sm"
                />
              </div>

              <div className="mb-6 relative">
                <label className="flex items-center gap-2 text-black font-bold mb-2 text-sm">
                  <MessageSquare size={16} />
                  <span>Mensaje</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows="4"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border-2 border-gray-200 text-black focus:border-black focus:bg-white outline-none resize-none transition-all duration-300 text-sm"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
                >
                  <Send size={16} />
                  <span>Enviar mensaje</span>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-500 text-xs">
                  También puedes escribirme directamente a{" "}
                  <a
                    href="mailto:qlpaul67@gmail.com"
                    className="text-black font-semibold hover:underline"
                  >
                    qlpaul67@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.02);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
