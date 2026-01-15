import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram, MapPin, Calendar, Star, CheckCircle, Phone, ArrowRight, Check, Sparkles, Heart } from 'lucide-react';

const services = [
  { 
    title: "Manicura Masculina", 
    promise: "Limpieza perfecta.",
    price: "€8", 
    desc: "Técnica de limpieza profunda de cutículas y brillo semipermanente",
    benefits: ["Acabado pulcro", "Crecimiento saludable", "Piel suave"],
    cta: "Quiero este acabado"
  },
  { 
    title: "Recubrimiento en Gel", 
    promise: "Ideal para uñas naturales.",
    span: "A partir de:",
    price: "€13", 
    desc: "Nivelación sobre una uñas naturales con gel de construccion para fortalecerlas.",
    benefits: ["De 21 a 30 días de duración", "Corrección de forma", "Diseños modernos"],
    cta: "Agenda tu set"
  },
  { 
    title: "Semipermanente", 
    promise: "Color y brillo.",
    price: "€10", 
    desc: "Aplicación de color de larga duración sobre tu uña natural, ideal para el día a día.",
    benefits: ["Brillo espejo", "Secado inmediato", "Variedad de tonos"],
    cta: "Ver colores"
  },
{ 
    title: "Soft Gel", 
    promise: "Alargamiento y Durabilidad.",
    price: "€15", 
    desc: "Extensión y fortalecimiento con gel flexible, perfecto para uñas que necesitan un extra de resistencia.",
    benefits: ["Brillo espejo", "Estructura perfecta", "Variedad de diseños"],
    cta: "Ver diseños"
  },
{ 
    title: "Dual System", 
    promise: "Extensión y Versatilidad en diseños con difuminados.",
    price: "€15", 
    desc: "Estructura perfecta y resistente con gel y acrílico, ideal para uñas que requieren durabilidad y estilo.",
    benefits: ["Resistencia", "Aspecto elegante"],
    cta: "Ver diseños"
  },

  { 
    title: "Pedicure + Exfoliación", 
    promise: "Limpieza profunda.",
    price: "€12", 
    desc: "Experiencia relajante con exfoliación e hidratación intensiva para pies de seda.",
    benefits: ["Alivio de tensión", "Piel renovada", "Higiene absoluta"],
    cta: "Relajarme ahora"
  },

   { 
    title: "Retiro:(Semi, Soft Gel, Dual System)", 
    promise: "Cuidado para tu uña.",
    price: "€3, €5", 
    desc: "Eliminación segura de productos semipermanentes, soft gel o dual system.",
    benefits: ["Alivio de tensión", "Piel renovada", "Higiene absoluta"],
    cta: "Quiero retirar"
  },
];

const RevealOnScroll = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
      {children}
    </div>
  );
};

export const LiveSite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/584144003533?text=Hola%20Oriana,%20quisiera%20agendar%20una%20cita.', '_blank');
  };

  return (
    // CAMBIO: Fondo base blanco y texto gris oscuro
    <div className="font-sans text-gray-600 bg-white min-h-screen flex flex-col selection:bg-lilac-200 selection:text-lilac-900">
      
      {/* NAVBAR: Glassmorphism Blanco */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              {/* CAMBIO: Logo en Negro y Lila */}
              <span className={`font-serif text-2xl font-bold tracking-widest transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                ORIANA<span className="text-lilac-500">STUDIO</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-10 items-center">
              {['Inicio', 'Servicios', 'Galería', 'Ubicación'].map((item) => {
                const sectionId = item.toLowerCase().replace('í', 'i').replace('ó', 'o');
                return (
                  <a 
                    key={item} 
                    href={`#${sectionId}`} 
                    onClick={(e) => scrollToSection(e, sectionId)}
                    className={`text-sm font-medium hover:text-lilac-500 transition-colors tracking-wide ${scrolled ? 'text-gray-600' : 'text-gray-800'}`}
                  >
                    {item}
                  </a>
                );
              })}
              {/* CAMBIO: Botón Redondo (rounded-full) */}
              <button 
                onClick={handleWhatsAppClick}
                className="px-8 py-3 rounded-full bg-black text-white font-medium text-sm transition-all hover:bg-lilac-500 hover:shadow-lg hover:-translate-y-0.5"
              >
                Reservar Cita
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-900 hover:text-lilac-500 transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {['Inicio', 'Servicios', 'Galería', 'Ubicación'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => scrollToSection(e, item.toLowerCase())} className="text-xl font-serif text-gray-800 hover:text-lilac-500">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Reemplaza la sección del HERO con esto optimizado para móvil */}
<section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-ivory py-20 md:py-0">
  {/* ... (deja los fondos/backgrounds igual que antes) ... */}

  <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-0 md:mt-10">
    <RevealOnScroll>
      <span className="inline-block py-1.5 px-4 rounded-full bg-lilac-100 text-lilac-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 border border-lilac-200">
        Estudio Profesional en Valencia
      </span>

      {/* AJUSTE CLAVE: text-4xl para móvil, text-7xl para PC */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 text-gray-900">
        Belleza que <br />
        <span className="italic text-lilac-500">inspira</span> confianza.
      </h1>

      {/* AJUSTE: Padding lateral para que el texto no toque los bordes en móvil */}
      <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed px-4">
        Cuidado experto de uñas en un ambiente relajante. Diseños minimalistas y técnicas avanzadas en el C.C. Gran Bazar.
      </p>

      {/* AJUSTE: Botones ancho completo en móvil (w-full) */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
        <button 
          onClick={handleWhatsAppClick}
          className="w-full sm:w-auto group relative bg-gray-900 text-white text-base md:text-lg px-8 py-4 rounded-full font-medium transition-all hover:bg-lilac-500 hover:shadow-xl hover:-translate-y-1"
        >
          <span className="flex items-center justify-center gap-2">
            Agendar Cita <Heart size={18} className="fill-current" />
          </span>
        </button>
        
        <button 
          onClick={(e) => scrollToSection(e as any, 'galeria')}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-600 font-medium hover:border-lilac-300 hover:text-lilac-600 transition-all shadow-sm hover:shadow-md"
        >
          Ver Portafolio
        </button>
      </div>
    </RevealOnScroll>
  </div>
</section>

      {/* ABOUT: Fondo Blanco Puro */}
      <section id="sobre-mi" className="py-12 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 mb-12 lg:mb-0">
                 <div className="relative">
                    {/* CAMBIO: Bordes redondeados en fotos (rounded-3xl) */}
                    <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] relative z-10 shadow-2xl shadow-lilac-100">
                      <img src="https://picsum.photos/500/600?random=2" alt="Oriana" className="w-full h-full object-cover" />
                    </div>
                    {/* Decoración Lila detrás */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-lilac-200 rounded-[2.5rem] -z-0"></div>
                 </div>
              </div>
              <div className="lg:col-span-7">
                <span className="text-lilac-500 font-bold tracking-widest text-xs uppercase mb-4 block">Sobre Mí</span>
                <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-8">Hola, soy Oriana</h2>
                <div className="prose prose-lg text-gray-500">
                  <p className="mb-6">
                    Apasionada por el arte y diseño en uñas. Mi objetivo es que cada visita a <span className="text-gray-900 font-medium">OrianaValentina Studio</span> sea un momento de desconexión, belleza y cuidado para tus manos.
                  </p>
                  <p className="mb-8">
                    Me especializo en acabados profesionales y salud de tu uña. Utilizo herramientas esterilizadas y productos de alta calidad para garantizar tu seguridad.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* CAMBIO: Tarjetas info redondeadas */}
                    <div className="p-6 bg-ivory rounded-3xl border border-lilac-100">
                      <Star className="text-lilac-500 mb-3" size={24} />
                      <h4 className="text-gray-900 font-bold mb-1">Detallista</h4>
                      <p className="text-sm">Perfección en cada cutícula.</p>
                    </div>
                    <div className="p-6 bg-ivory rounded-3xl border border-lilac-100">
                      <CheckCircle className="text-lilac-500 mb-3" size={24} />
                      <h4 className="text-gray-900 font-bold mb-1">Higiene 100%</h4>
                      <p className="text-sm">Esterilización hospitalaria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICES: Fondo Marfil Claro (Ivory) */}
      <section id="servicios" className="py-12 md:py-24 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-lilac-500 font-bold tracking-widest text-xs uppercase mb-3 block">Menú</span>
              <h2 className="text-4xl font-serif text-gray-900 mb-4">Mis Servicios</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Calidad premium para tus manos y pies. Cada servicio brinda: Herramientas esterilizadas, exfoliación + masaje e hidratacion, Snack y garantia de 5 dias</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                // CAMBIO: Cards Blancas, Redondeadas y con Sombra suave
                <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-lilac-100/50 transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-2 group">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-lilac-50 rounded-2xl text-lilac-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-xs font-bold text-lilac-400 uppercase tracking-widest mb-3">{service.promise}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                       <span className="text-2xl font-serif text-gray-900">{service.price}</span>
                       <button onClick={handleWhatsAppClick} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-lilac-500 hover:text-white transition-colors">
                         <ArrowRight size={18} />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* GALLERY: Fondo Blanco */}
      <section id="galeria" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-serif text-gray-900 mb-2">Galería</h2>
                <p className="text-gray-500">Un vistazo a mi trabajo.</p>
              </div>
              <a href="https://www.instagram.com/byorianavalentina?igsh=b2JuZXZyaWQxMWli" className="flex items-center gap-2 text-gray-900 font-medium hover:text-lilac-500 transition-colors">
                <Instagram size={20} /> @orianavalentinastudio
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[3, 4, 5, 6].map((num, i) => (
                 // CAMBIO: Fotos con bordes redondeados
                 <div key={num} className={`aspect-square rounded-3xl overflow-hidden relative group cursor-pointer ${i % 2 === 0 ? 'mt-0' : 'md:mt-8'}`}>
                    <img 
                      src={`https://picsum.photos/400/400?random=${num}`} 
                      alt="Nail Art" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur rounded-full p-3">
                        <ArrowRight size={20} className="text-gray-900" />
                      </div>
                    </div>
                 </div>
              ))}
            </div>   
          </RevealOnScroll>
        </div>
      </section>

     {/* LOCATION: Fondo Marfil/Lila Muy Claro */}
      <section id="ubicacion" className="bg-lilac-50 py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            {/* Contenedor Principal: Ajustado rounded y padding para móvil */}
            <div className="bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 shadow-xl shadow-lilac-100 overflow-hidden relative">
              
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
                {/* Columna de Texto */}
                <div>
                  <span className="text-lilac-500 font-bold tracking-widest text-xs uppercase mb-4 block text-center md:text-left">Visítanos</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center md:text-left">Tu espacio de belleza</h2>
                  
                  <div className="space-y-6 md:space-y-8">
                    {/* Item: Ubicación */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 text-center md:text-left">
                      <div className="p-3 bg-ivory rounded-full text-lilac-500 flex-shrink-0"><MapPin size={24}/></div>
                      <div>
                        <h3 className="font-serif text-lg text-gray-900">Ubicación</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          C.C. Gran Bazar, Av. Lara<br/>
                          Nivel Feria, Local 25.<br/>
                          Valencia, Venezuela.
                        </p>
                      </div>
                    </div>
                    
                    {/* Item: Horario */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 text-center md:text-left">
                      <div className="p-3 bg-ivory rounded-full text-lilac-500 flex-shrink-0"><Calendar size={24}/></div>
                      <div>
                        <h3 className="font-serif text-lg text-gray-900">Horario</h3>
                        <p className="text-gray-500 text-sm">Lun - Sáb: 9:00 AM - 6:00 PM</p>
                        <p className="text-lilac-400 text-xs mt-1 font-medium">Domingos Previa Cita</p>
                      </div>
                    </div>
                  </div>

                  {/* Métodos de Pago */}
                  <div className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-3">
                     {['Pago Móvil', 'Zelle', 'Efectivo'].map(method => (
                       <span key={method} className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50 hover:bg-lilac-50 hover:text-lilac-600 transition-colors cursor-default">
                         {method}
                       </span>
                     ))}
                  </div>
                </div>
                
                {/* Columna de Mapa (Google Maps Real) */}
                <div className="h-[300px] md:h-[400px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-inner bg-gray-100 relative group mt-6 md:mt-0 border border-gray-100">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.5029844833246!2d-67.9942858249684!3d10.139626389973216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8067713d317075%3A0x6291619472648710!2sC.C.%20Gran%20Bazar%20Valencia!5e0!3m2!1ses-419!2sve!4v1709228300000!5m2!1ses-419!2sve" 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0 }} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Mapa OrianaValentina Studio"
                     className="grayscale hover:grayscale-0 transition-all duration-700"
                   ></iframe>
                </div>

              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <footer className="bg-white border-t border-gray-100 py-12 text-center">
        <p className="font-serif text-2xl font-bold text-gray-900 tracking-widest mb-6">ORIANA<span className="text-lilac-500">STUDIO</span></p>
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Orianavalentina Studio. Valencia, Venezuela.</p>
      </footer>
      
      {/* Botón Flotante WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40">
        <button onClick={handleWhatsAppClick} className="bg-green-500 text-white p-4 rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition-transform flex items-center justify-center">
           <Phone size={24} />
        </button>
      </div>
    </div>
  );
};