import React, { useState, useEffect, useRef } from 'react';
import { Play, Menu, X, Instagram, MapPin, Calendar, Star, CheckCircle, Phone, ArrowRight, Sparkles, Heart } from 'lucide-react';

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

// DATOS DE LA GALERÍA (IDs corregidos para evitar errores de React)
const galleryItems = {
  systems: [
    { id: 101, img: "/images/systems/foto1 (1).webp", tag: "System" },
    { id: 102, img: "/images/systems/foto1 (6).webp", tag: "System" },
    { id: 103, img: "/images/systems/foto1 (5).webp", tag: "System" },
    { id: 104, img: "/images/systems/foto1 (3).webp", tag: "System" },
    { id: 105, img: "/images/systems/foto1 (8).webp", tag: "System" },
    { id: 106, img: "/images/systems/foto1 (9).webp", tag: "System" },
    { id: 107, img: "/images/systems/foto1 (11).webp", tag: "System" },
    { id: 108, img: "/images/systems/foto1 (12).webp", tag: "System" },
    { id: 109, img: "/images/systems/foto1 (13).webp", tag: "System" },
    { id: 110, img: "/images/systems/foto1 (16).webp", tag: "System" },
    { id: 111, img: "/images/systems/foto1 (18).webp", tag: "System" },
  ],
  art: [
    { id: 201, img: "/images/nailart/foto1 (7).webp", tag: "NailArt" },
    { id: 202, img: "/images/nailart/foto1(20).webp", tag: "NailArt"  },
    { id: 203, img: "/images/nailart/foto1(21).webp", tag: "NailArt" },
    { id: 204, img: "/images/nailart/foto1 (19).webp", tag: "NailArt" },
    { id: 205, img: "/images/nailart/foto1 (15).webp", tag: "NailArt"  },
    { id: 206, img: "/images/nailart/foto1 (14).webp", tag: "NailArt"  },
    { id: 207, img: "/images/nailart/foto1 (10).webp", tag: "NailArt"  },
  ]
};

const tiktokVideos = [
  { id: 301, img: "/images/tiktok/foto1.1 (1).webp" },
  { id: 302, img: "/images/tiktok/foto1.1 (2).webp" },
  { id: 303, img: "/images/tiktok/foto1.1 (3).webp" },
  { id: 304, img: "/images/tiktok/foto1.1 (4).webp" },
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
  const [galleryTab, setGalleryTab] = useState<'systems' | 'art'>('systems');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
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
    // FIX CLAVE: overflow-x-hidden en el contenedor principal elimina el scroll horizontal fantasma
    <div className="font-sans text-gray-600 bg-white min-h-screen flex flex-col selection:bg-lilac-200 selection:text-lilac-900 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              {/* FIX NAVBAR NAME: Ajuste de tamaño responsivo para que quepa "ORIANAVALENTINA" */}
              <span className={`font-serif font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'} 
                text-sm sm:text-xl md:text-2xl tracking-wider md:tracking-widest`}>
                ORIANAVALENTINA<span className="text-lilac-500">STUDIO</span>
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

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-ivory py-20 md:py-0">
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-0 md:mt-10">
          <RevealOnScroll>
            <span className="inline-block py-1.5 px-4 rounded-full bg-lilac-100 text-lilac-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 border border-lilac-200">
              Estudio Profesional en Valencia
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 text-gray-900">
              Belleza que <br />
              <span className="italic text-lilac-500">inspira</span> confianza.
            </h1>

            <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed px-4">
              Cuidado experto de uñas en un ambiente relajante. Diseños minimalistas y técnicas avanzadas en el C.C. Gran Bazar.
            </p>

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

      {/* MARQUEE INFINITO */}
      {/* FIX: Se mantiene el overflow-hidden aquí también para asegurar */}
      <div className="bg-lilac-500 py-3 overflow-hidden relative -rotate-1 shadow-lg border-y-4 border-white z-30 -mt-8 mb-12 mx-[-20px]">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 mx-4">
              {["MANICURA RUSA", "•", "VALENCIA", "•", "NAIL ART", "•", "AV. LARA", "•", "CLEAN LOOK", "•"].map((text, j) => (
                <span key={j} className="text-white font-bold tracking-[0.2em] text-sm md:text-base italic">
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="sobre-mi" className="py-12 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 mb-12 lg:mb-0">
                 <div className="relative">
                    <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] relative z-10 shadow-2xl shadow-lilac-100">
                      <img src="/images/yo.webp" alt="Oriana Manicurista Profesional Valencia" className="w-full h-full object-cover" />
                    </div>
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

      {/* SERVICES SECTION */}
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

      {/* GALERÍA DINÁMICA CON TABS */}
      <section id="galeria" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-serif text-gray-900 mb-4">Nuestro Portafolio</h2>
              <p className="text-gray-500 max-w-2xl mx-auto mb-8">Explora la precisión técnica y la creatividad artística.</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setGalleryTab('systems')}
                  className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all border border-transparent ${
                    galleryTab === 'systems' 
                    ? 'bg-gray-900 text-white shadow-lg scale-105' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:border-gray-200'
                  }`}
                >
                  SISTEMAS
                </button>
                <button 
                  onClick={() => setGalleryTab('art')}
                  className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all border border-transparent ${
                    galleryTab === 'art' 
                    ? 'bg-lilac-500 text-white shadow-lg scale-105' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:border-gray-200'
                  }`}
                >
                  NAIL ART
                </button>
              </div>
            </div>

            {/* CARRUSEL */}
            <div 
              key={galleryTab}
              className="flex overflow-x-auto pb-8 gap-4 md:gap-6 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>

              {galleryItems[galleryTab].map((item) => (
                  <div 
                    key={item.id} 
                    className="w-40 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-pointer shadow-md snap-start shrink-0 border border-gray-100"
                    style={{ minWidth: '160px' }}
                  >
                    <img 
                      src={item.img} 
                      alt={item.tag} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <span className="text-lilac-300 text-[10px] font-bold uppercase tracking-wider mb-0.5">{item.tag}</span>
                      <span className="text-white font-serif italic text-sm">Ver foto</span>
                    </div>
                  </div>
              ))}
              
              {/* Tarjeta Final */}
              <div className="min-w-[150px] md:min-w-[200px] flex flex-col items-center justify-center snap-center shrink-0">
                 <a href="https://www.instagram.com/orianavalentinastudio?igsh=b2JuZXZyaWQxMWli&utm_source=qr" target="_blank" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-lilac-100 text-lilac-500 flex items-center justify-center mb-4 hover:scale-110 transition-transform shadow-sm">
                    <ArrowRight size={20} />
                 </a>
                 <span className="text-xs md:text-sm font-medium text-gray-400 text-center px-4">Más en<br/>Instagram</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TIKTOK TRENDS */}
      <section className="py-12 md:py-24 bg-lilac-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-lilac-500 font-bold tracking-widest text-xs uppercase mb-2 block">Social Proof</span>
                <h2 className="text-3xl font-serif text-gray-900">En Tendencia @nails_orianavalentina</h2>
              </div>
              <a 
                href="https://www.tiktok.com/@nails_orianavalentina?_r=1&_t=ZM-936AbpsRwWe" 
                target="_blank" 
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1"
              >
                <Play size={16} fill="currentColor" /> Seguir a Oriana
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tiktokVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-[2rem] p-2 shadow-lg hover:shadow-xl hover:shadow-lilac-200/50 transition-all duration-300 border border-gray-100 group relative">
                   <div className="aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-gray-900 relative">
                      <img 
                        src={video.img} 
                        alt="TikTok Video Thumbnail" 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                             <Play size={20} fill="currentColor" />
                          </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-xs font-medium line-clamp-2">Ver video en TikTok</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="ubicacion" className="bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 shadow-xl shadow-lilac-100 overflow-hidden relative border border-gray-100">
              
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
                {/* COLUMNA IZQUIERDA */}
                <div>
                  <span className="text-lilac-500 font-bold tracking-widest text-xs uppercase mb-4 block text-center md:text-left">Visítanos</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center md:text-left">Tu espacio de belleza</h2>
                  
                  <div className="space-y-6 md:space-y-8">
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
                    
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 text-center md:text-left">
                      <div className="p-3 bg-ivory rounded-full text-lilac-500 flex-shrink-0"><Calendar size={24}/></div>
                      <div>
                        <h3 className="font-serif text-lg text-gray-900">Horario</h3>
                        <p className="text-gray-500 text-sm">Lun - Sáb: 9:00 AM - 6:00 PM</p>
                        <p className="text-lilac-400 text-xs mt-1 font-medium">Domingos Previa Cita</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-3">
                     {['Pago Móvil', 'Zelle', 'Efectivo'].map(method => (
                       <span key={method} className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50 hover:bg-lilac-50 hover:text-lilac-600 transition-colors cursor-default">
                         {method}
                       </span>
                     ))}
                  </div>
                </div>
                
                {/* COLUMNA DERECHA */}
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                   <div 
                     className="h-48 w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group cursor-pointer"
                     onClick={() => setIsLightboxOpen(true)}
                   >
                      <img 
                        src="/images/studio.webp"
                        alt="Fachada Orianastudio C.C. Gran Bazar" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-gray-900 shadow-sm flex items-center gap-2">
                        <Sparkles size={12} className="text-lilac-500"/> Click para ampliar
                      </div>
                   </div>

                   <div className="h-48 md:h-56 w-full rounded-3xl overflow-hidden shadow-inner bg-gray-100 relative border border-gray-100">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.0352240612015!2d-68.00615979999999!3d10.177792300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8067b30aeb49a3%3A0xa287464e9d05afea!2sGran%20bazar%20Av%20Lara.!5e0!3m2!1ses-419!2sve!4v1768506569753!5m2!1ses-419!2sve" 
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
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-12 text-center">
        <p className="font-serif text-1.3xl font-bold text-gray-900 tracking-widest mb-6">ORIANAVALENTINA<span className="text-lilac-500">STUDIO</span></p>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} OrianaValentina Studio. Valencia, Venezuela.</p>
      </footer>
      
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={handleWhatsAppClick} className="bg-green-500 text-white p-4 rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition-transform flex items-center justify-center">
           <Phone size={24} />
        </button>
      </div>

      {/* LIGHTBOX (Z-INDEX 60 PARA ESTAR SOBRE TODO) */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
            <X size={32} />
          </button>
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
             <img 
               src="/images/studio.webp"
               alt="Fachada Completa OrianaValentina Studio" 
               className="w-full h-full object-contain"
             />
          </div>
        </div>
      )}
    </div>
  );
};