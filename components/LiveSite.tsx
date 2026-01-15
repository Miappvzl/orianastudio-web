import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram, MapPin, Calendar, Star, CheckCircle, Phone, ArrowRight, Check, Sparkles, Diamond } from 'lucide-react';

const services = [
  { 
    title: "Manicura Rusa & Nivelación", 
    promise: "Perfección y limpieza en cada detalle.",
    price: "$20", 
    desc: "Técnica de limpieza profunda de cutículas combinada con alineación de la base para una estructura impecable y superficie lisa.",
    benefits: ["Limpieza profunda de cutícula", "Acabado visualmente perfecto", "Crecimiento saludable"],
    cta: "Quiero este acabado"
  },
  { 
    title: "Sistema Acrílico Premium", 
    promise: "Resistencia y elegancia que perdura.",
    price: "$35", 
    desc: "Extensiones personalizadas esculpidas a mano para alargar y embellecer tus uñas con una arquitectura resistente y natural.",
    benefits: ["Durabilidad de +21 días", "Corrección de forma", "Diseños en tendencia"],
    cta: "Agenda tu set"
  },
  { 
    title: "Esmaltado Semipermanente", 
    promise: "Color vibrante y brillo espejo.",
    price: "$20", 
    desc: "Aplicación de color de larga duración sobre tu uña natural, ideal para mantener tus manos impecables sin dañar la base.",
    benefits: ["Brillo intacto por semanas", "Secado inmediato", "Gran variedad de tonos"],
    cta: "Ver colores disponibles"
  },
  { 
    title: "Pedicure Spa & Wellness", 
    promise: "Renovación total para tus pies.",
    price: "$25", 
    desc: "Experiencia relajante que combina limpieza profunda, exfoliación e hidratación intensiva para unos pies suaves y descansados.",
    benefits: ["Alivio de tensión", "Piel de seda", "Higiene absoluta"],
    cta: "Relajarme ahora"
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const LiveSite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroBgRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Handle scroll for navbar styling and parallax
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Parallax logic for Hero Background
      if (heroBgRef.current) {
        // Move background down at half the scroll speed to create depth
        heroBgRef.current.style.transform = `scale(1.05) translateY(${currentScrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/584120000000?text=Hola%20Oriana,%20quisiera%20agendar%20una%20Experiencia%20VIP.', '_blank');
  };

  return (
    <div className="font-sans text-gray-300 bg-black min-h-screen flex flex-col selection:bg-violet-700 selection:text-white">
      
      {/* 
        NAVBAR FLOTANTE (DARK THEME)
        - Transparente al inicio, Negro al scroll
      */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isMenuOpen ? 'bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(109,40,217,0.1)] border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <span className="font-serif text-2xl font-bold tracking-[0.15em] text-white group-hover:text-violet-300 transition-colors">
                ORIANA<span className="text-violet-500">STUDIO</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10 items-center">
              {['Inicio', 'Servicios', 'Galería', 'Ubicación'].map((item) => {
                // Normalize ID: remove accents (Galería -> galeria, Ubicación -> ubicacion)
                const sectionId = item.toLowerCase().replace('í', 'i').replace('ó', 'o');
                return (
                  <a 
                    key={item} 
                    href={`#${sectionId}`} 
                    onClick={(e) => scrollToSection(e, sectionId)}
                    className="text-sm font-medium text-gray-300 hover:text-white relative group transition-colors tracking-wide"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              })}
              <button 
                onClick={handleWhatsAppClick}
                className="px-6 py-2.5 rounded-none border border-violet-500/50 text-violet-100 font-medium text-sm transition-all hover:bg-violet-700 hover:border-violet-700 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Reservar VIP
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white hover:text-violet-400 transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-white/10 absolute w-full shadow-2xl">
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {['Inicio', 'Servicios', 'Galería', 'Ubicación'].map((item) => {
                const sectionId = item.toLowerCase().replace('í', 'i').replace('ó', 'o');
                return (
                  <a 
                    key={item} 
                    href={`#${sectionId}`} 
                    onClick={(e) => scrollToSection(e, sectionId)} 
                    className="block text-xl font-serif text-gray-300 hover:text-violet-400 hover:pl-2 transition-all"
                  >
                    {item}
                  </a>
                );
              })}
              <button onClick={handleWhatsAppClick} className="w-full text-center mt-6 bg-violet-700 text-white px-6 py-4 font-medium hover:bg-violet-600 transition-colors tracking-widest uppercase text-sm">
                Agendar Experiencia
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 
        HERO SECTION (DARK ELEGANCE)
      */}
      <section 
        id="inicio" 
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        {/* Imagen de Fondo (Dark Luxury Aesthetic) - Parallax Effect Enabled */}
        <div 
          ref={heroBgRef}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop')",
            transform: 'scale(1.05)' // Initial state matching the parallax logic
          }}
        ></div>
        
        {/* Overlay Oscuro Intenso (Black/70) */}
        <div className="absolute inset-0 z-10 bg-black/70 bg-gradient-to-t from-black via-black/40 to-black/30"></div>

        {/* Contenido Hero */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-10">
          <RevealOnScroll>
            {/* Subheadline (Ivory) */}
            <div className="inline-flex items-center gap-3 mb-8 opacity-90">
              <div className="h-[1px] w-8 bg-orange-50/50"></div>
              <span className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-orange-50">
                El estudio premium en C.C. Gran Bazar
              </span>
              <div className="h-[1px] w-8 bg-orange-50/50"></div>
            </div>

            {/* Headline (H1 - White & Impactful) */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8 text-white drop-shadow-2xl">
              La máxima expresión de <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-white to-violet-200">
                elegancia
              </span> en tus manos.
            </h1>

            {/* Description (Grey) */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Sumérgete en una atmósfera de exclusividad. Materiales de alta gama, técnica rusa impecable y diseños que definen tendencias.
            </p>

            {/* Botón CTA Principal (Blueviolet) - ANIMATED */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleWhatsAppClick}
                className="group relative bg-violet-700 hover:bg-violet-600 text-white text-lg px-10 py-4 font-medium transition-all duration-300 animate-glow-pulse overflow-hidden shadow-2xl"
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
                </div>

                <span className="relative z-10 flex items-center gap-3 tracking-wide">
                  Reservar mi Experiencia VIP
                  <Diamond size={18} className="text-violet-200 fill-violet-200/20" />
                </span>
                
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </button>
              
              <a 
                href="#galeria" 
                onClick={(e) => scrollToSection(e, 'galeria')}
                className="text-gray-300 hover:text-white underline-offset-8 hover:underline decoration-violet-500 transition-all uppercase text-sm tracking-widest"
              >
                Explorar Galería
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 bg-zinc-950 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative mb-12 lg:mb-0">
                 <div className="relative">
                    <div className="absolute inset-0 border border-violet-500/30 transform translate-x-4 translate-y-4"></div>
                    <div className="aspect-[4/5] overflow-hidden relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
                      <img src="https://picsum.photos/500/600?random=2" alt="Oriana Manicurista" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-violet-900/10 mix-blend-overlay"></div>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-7">
                <span className="text-violet-400 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">La Artista</span>
                <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">Hola, soy Oriana</h2>
                <div className="prose prose-lg prose-invert text-gray-400 font-light">
                  <p className="mb-6 leading-relaxed">
                    Más que una manicurista, me considero una <span className="text-violet-300">arquitecta de la belleza</span>. Con más de 5 años de experiencia perfeccionando técnicas en Valencia, fundé <strong>Orianastudio</strong> para elevar el estándar del cuidado de uñas.
                  </p>
                  <p className="mb-8 leading-relaxed">
                    Mi filosofía es simple: <strong className="text-white font-serif italic">"Lujo es salud y detalle"</strong>. Me especializo en manicura rusa y estructuras que respetan la anatomía natural, utilizando exclusivamente productos importados de grado premium.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mt-10">
                    <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 hover:border-violet-500/30 transition-colors">
                      <Star className="text-violet-500 shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="text-white font-medium mb-1">Manicura Rusa</h4>
                        <p className="text-sm text-gray-500">Limpieza quirúrgica y precisión milimétrica.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 hover:border-violet-500/30 transition-colors">
                      <CheckCircle className="text-violet-500 shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="text-white font-medium mb-1">Esterilización Clínica</h4>
                        <p className="text-sm text-gray-500">Tu seguridad es innegociable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 bg-black relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <span className="text-violet-400 font-medium tracking-[0.2em] text-xs uppercase mb-3 block">Menú Exclusivo</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Alta Costura en Uñas</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">Selección curada de servicios diseñados para la mujer moderna.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-white/5 hover:border-violet-500/50 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
                  <div className="mb-6">
                     <div className="w-12 h-12 bg-black border border-zinc-800 text-violet-400 flex items-center justify-center mb-6 group-hover:bg-violet-900/20 group-hover:border-violet-500/30 group-hover:text-violet-300 transition-colors">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="font-serif text-xl text-white mb-2">{service.title}</h3>
                    <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">{service.promise}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-gray-400">
                          <Check className="text-violet-500 shrink-0" size={14} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-serif text-white">{service.price}</span>
                       <button onClick={handleWhatsAppClick} className="text-xs font-bold text-white uppercase tracking-widest hover:text-violet-400 transition-colors flex items-center gap-2">
                         Reservar <ArrowRight size={14} />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Seal */}
            <div className="mt-20 flex justify-center">
               <div className="inline-flex items-center gap-4 text-gray-400 border border-white/10 px-8 py-4 bg-zinc-900/80">
                 <Diamond className="text-violet-500 animate-pulse" size={20} />
                 <p className="text-sm font-light tracking-wide">
                   Uso exclusivo de materiales importados y herramientas esterilizadas.
                 </p>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-serif text-white mb-2">Portfolio</h2>
                <p className="text-gray-500 font-light">Una muestra de nuestro arte.</p>
              </div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white border-b border-violet-500 pb-1 hover:text-violet-300 transition-colors text-sm tracking-widest uppercase">
                <Instagram size={18} />
                @orianastudio
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[3, 4, 5, 6].map((num) => (
                 <div key={num} className="aspect-square overflow-hidden relative group cursor-pointer">
                    <img 
                      src={`https://picsum.photos/400/400?random=${num}`} 
                      alt="Nail Art Work" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-violet-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-serif italic text-lg border border-white/30 px-4 py-2">Ver detalle</span>
                    </div>
                 </div>
              ))}
            </div>   
          </RevealOnScroll>
        </div>
      </section>

      {/* Location */}
      <section id="ubicacion" className="bg-black text-white py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-violet-500 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Ubicación</span>
                <h2 className="text-4xl lg:text-5xl font-serif mb-10">Visítanos</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <MapPin className="text-gray-500 group-hover:text-violet-500 transition-colors mt-1" size={28} />
                    <div>
                      <h3 className="font-serif text-xl mb-2 text-white">Dirección</h3>
                      <p className="text-gray-400 font-light leading-relaxed">C.C. Gran Bazar, Av. Lara<br/>Nivel Feria, Local 25.<br/>Valencia, Venezuela.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <Calendar className="text-gray-500 group-hover:text-violet-500 transition-colors mt-1" size={28} />
                    <div>
                      <h3 className="font-serif text-xl mb-2 text-white">Horario</h3>
                      <p className="text-gray-400 font-light leading-relaxed">Lunes a Sábado: 9:00 AM - 6:00 PM<br/><span className="text-violet-400">Domingos: Solo VIP (Previa Cita)</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <CheckCircle className="text-gray-500 group-hover:text-violet-500 transition-colors mt-1" size={28} />
                    <div>
                      <h3 className="font-serif text-xl mb-4 text-white">Pagos</h3>
                      <div className="flex flex-wrap gap-3">
                         <span className="border border-zinc-800 px-4 py-2 text-xs text-gray-400 uppercase tracking-wider">Pago Móvil</span>
                         <span className="border border-zinc-800 px-4 py-2 text-xs text-gray-400 uppercase tracking-wider">Zelle</span>
                         <span className="border border-zinc-800 px-4 py-2 text-xs text-gray-400 uppercase tracking-wider">Efectivo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[500px] w-full bg-zinc-900 border border-zinc-800 relative overflow-hidden group">
                 {/* Styled Map Placeholder */}
                 <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-zinc-900">
                    <MapPin size={64} className="mb-6 text-violet-900 group-hover:text-violet-600 transition-colors duration-500" />
                    <p className="font-serif text-2xl text-zinc-400 group-hover:text-white transition-colors">Google Maps</p>
                    <p className="text-sm mt-2 tracking-widest uppercase">Av. Lara, Valencia</p>
                    
                    <button className="mt-8 px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all">
                      Cómo llegar
                    </button>
                 </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="bg-black text-gray-600 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-serif text-3xl font-bold text-white mb-6 tracking-widest">ORIANA<span className="text-violet-700">STUDIO</span></p>
          <div className="flex justify-center gap-8 mb-10 text-xs uppercase tracking-widest">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="hover:text-white transition-colors">Servicios</a>
            <a href="#ubicacion" onClick={(e) => scrollToSection(e, 'ubicacion')} className="hover:text-white transition-colors">Contacto</a>
          </div>
          <p className="text-xs font-light tracking-wide opacity-50">&copy; {new Date().getFullYear()} Orianastudio. Todos los derechos reservados.</p>
        </div>
      </footer>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button onClick={handleWhatsAppClick} className="bg-violet-700 text-white p-4 shadow-2xl shadow-violet-900/50 flex items-center justify-center transform transition-transform active:scale-95 border border-white/10">
           <Phone size={24} />
        </button>
      </div>
    </div>
  );
};