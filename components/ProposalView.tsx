import React, { useState } from 'react';
import { ProposalSection } from '../types';
import { Layout, FileText, Search, CreditCard, Palette, ArrowRight, Check } from 'lucide-react';

const sections: ProposalSection[] = [
  {
    id: 'sitemap',
    title: '1. Estructura & Navegación',
    icon: <Layout className="w-6 h-6" />,
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Mapa del Sitio (Sitemap)</h3>
        <p className="text-gray-600">Diseño "One-Page" (Landing Page) para maximizar la conversión móvil, con anclajes suaves.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
            <span className="bg-brand-100 text-brand-600 font-bold px-2 py-1 rounded text-xs mt-1">HERO</span>
            <div>
              <strong className="block text-gray-800">Inicio</strong>
              <span className="text-sm text-gray-500">Promesa de valor, foto impactante y CTA principal.</span>
            </div>
          </li>
          <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
             <span className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded text-xs mt-1">INFO</span>
            <div>
              <strong className="block text-gray-800">Servicios</strong>
              <span className="text-sm text-gray-500">Lista de tratamientos con precios base para filtrar clientes.</span>
            </div>
          </li>
          <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
             <span className="bg-purple-100 text-purple-600 font-bold px-2 py-1 rounded text-xs mt-1">TRUST</span>
            <div>
              <strong className="block text-gray-800">Sobre Mí</strong>
              <span className="text-sm text-gray-500">Humanización de la marca (Oriana) y experiencia.</span>
            </div>
          </li>
          <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
             <span className="bg-green-100 text-green-600 font-bold px-2 py-1 rounded text-xs mt-1">CONV</span>
            <div>
              <strong className="block text-gray-800">Contacto/Ubicación</strong>
              <span className="text-sm text-gray-500">Mapa (Google Maps), Horarios y Botón WhatsApp.</span>
            </div>
          </li>
        </ul>
        <div className="bg-slate-50 p-4 rounded-lg mt-4">
          <h4 className="font-bold text-gray-800 mb-2">Flujo de Usuario Ideal</h4>
          <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <span className="bg-white px-3 py-1 border rounded">Llega a la Home</span>
            <ArrowRight size={16} />
            <span className="bg-white px-3 py-1 border rounded">Ve fotos en Galería</span>
            <ArrowRight size={16} />
            <span className="bg-white px-3 py-1 border rounded">Revisa Precios</span>
            <ArrowRight size={16} />
            <span className="bg-green-100 text-green-700 px-3 py-1 border border-green-200 rounded font-bold">Clic en WhatsApp</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'copy',
    title: '2. Estrategia de Contenido (Copy)',
    icon: <FileText className="w-6 h-6" />,
    content: (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-l-4 border-l-brand-500">
          <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">Título Principal (H1)</h3>
          <p className="text-2xl font-serif text-gray-900">"Arte y Elegancia en tus Manos en Valencia"</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">Propuesta de Valor (H2)</h3>
            <p className="text-gray-700 italic">"Experiencia exclusiva de manicura en C.C. Gran Bazar, Av. Lara. Diseños que resaltan tu personalidad."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
             <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">Call to Actions (CTAs)</h3>
             <ul className="space-y-2">
               <li className="flex items-center gap-2 text-brand-600 font-medium"><Check size={16}/> "Agenda tu Cita Hoy"</li>
               <li className="flex items-center gap-2 text-brand-600 font-medium"><Check size={16}/> "Ver mi Galería"</li>
               <li className="flex items-center gap-2 text-brand-600 font-medium"><Check size={16}/> "Quiero un Diseño Único"</li>
             </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">Estrategia "Sobre Mí"</h3>
          <p className="text-gray-600 text-sm">
            Enfocarse no solo en los certificados, sino en la <strong>seguridad e higiene</strong> (puntos de dolor comunes en Venezuela) y en la <strong>personalización</strong>. Usar un tono cercano pero experto.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'seo',
    title: '3. SEO Local (Valencia)',
    icon: <Search className="w-6 h-6" />,
    content: (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
           <div className="flex-1">
             <h3 className="font-bold text-gray-800 mb-4">Top 10 Keywords Objetivo</h3>
             <div className="flex flex-wrap gap-2">
                {['Uñas acrílicas Valencia', 'Manicura C.C. Gran Bazar', 'Pedicure Spa Av Lara', 'Diseño de uñas Valencia', 'Sistema de uñas Carabobo', 'Manicurista profesional Valencia', 'Esmaltado semipermanente', 'Mantenimiento uñas acrílicas', 'Uñas esculpidas Venezuela', 'Salón de uñas norte Valencia'].map(k => (
                  <span key={k} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">{k}</span>
                ))}
             </div>
           </div>
           <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">Snippet de Google (Simulación)</h3>
              <div className="font-sans">
                <div className="text-blue-800 text-lg hover:underline cursor-pointer">Orianastudio | Manicura y Uñas Acrílicas en Valencia Av. Lara</div>
                <div className="text-green-700 text-xs mb-1">www.orianastudio.com</div>
                <div className="text-gray-600 text-sm">
                  Realza tu belleza con OrianasValentina Studio. Especialistas en <strong>uñas acrílicas</strong>, sistemas y diseños modernos en el <strong>C.C. Gran Bazar, Valencia</strong>. ¡Agenda tu cita hoy!
                </div>
              </div>
           </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h4 className="font-bold text-yellow-800">Google My Business Strategy</h4>
          <p className="text-sm text-yellow-700 mt-1">
            Es vital registrar el negocio en Google Maps con la dirección exacta "C.C. Gran Bazar, Av. Lara". Solicitar reseñas a clientas felices para subir en el "Local Pack".
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'functionality',
    title: '4. Funcionalidad Regional',
    icon: <CreditCard className="w-6 h-6" />,
    content: (
      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-white p-5 rounded-lg border shadow-sm">
           <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
             <span className="bg-green-100 p-1 rounded text-green-600"><Check size={16}/></span>
             Sistema de Reservas
           </h3>
           <p className="text-gray-600 text-sm mb-4">
             En Venezuela, los sistemas automáticos a veces generan fricción. Se recomienda <strong>WhatsApp API</strong> con un mensaje pre-llenado.
           </p>
           <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-600">
             Hola Oriana, vi tu web y quiero agendar una cita para [Servicio].
           </div>
         </div>
         
         <div className="bg-white p-5 rounded-lg border shadow-sm">
           <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
             <span className="bg-brand-100 p-1 rounded text-brand-600"><Check size={16}/></span>
             Métodos de Pago
           </h3>
           <p className="text-gray-600 text-sm mb-4">
             Mostrar flexibilidad es clave para cerrar la venta.
           </p>
           <ul className="space-y-2 text-sm">
             <li className="flex justify-between border-b pb-1">
               <span>Pago Móvil</span>
               <span className="text-gray-400">Bs. Tasa BCV</span>
             </li>
             <li className="flex justify-between border-b pb-1">
               <span>Zelle</span>
               <span className="text-gray-400">USD</span>
             </li>
             <li className="flex justify-between border-b pb-1">
               <span>Efectivo</span>
               <span className="text-gray-400">USD / Euros</span>
             </li>
           </ul>
         </div>
      </div>
    )
  },
  {
    id: 'tech',
    title: '5. Técnica & Visual',
    icon: <Palette className="w-6 h-6" />,
    content: (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg border">
            <h3 className="font-bold text-gray-800 mb-2">Paleta de Colores</h3>
            <div className="flex gap-2">
               <div className="w-10 h-10 rounded-full bg-rose-500 shadow-sm" title="Brand Pink"></div>
               <div className="w-10 h-10 rounded-full bg-pink-100 shadow-sm" title="Soft Pink"></div>
               <div className="w-10 h-10 rounded-full bg-slate-900 shadow-sm" title="Elegant Dark"></div>
               <div className="w-10 h-10 rounded-full bg-yellow-500 shadow-sm" title="Gold Accent"></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Transmite feminidad, lujo accesible y limpieza.</p>
          </div>
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg border">
            <h3 className="font-bold text-gray-800 mb-2">Plataforma Recomendada</h3>
            <div className="flex items-center gap-2 mb-2">
               <span className="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-xs">REACT + TAILWIND</span>
               <span className="text-gray-400 text-xs">o WordPress (Elementor)</span>
            </div>
            <p className="text-sm text-gray-600">
              Para Orianastudio, recomiendo una <strong>Single Page Application (SPA)</strong> en React (como este prototipo) por velocidad y SEO, o WordPress si Oriana desea editar texto frecuentemente sin programador.
            </p>
          </div>
        </div>
      </div>
    )
  }
];

export const ProposalView: React.FC<{ onSwitchToLive: () => void }> = ({ onSwitchToLive }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-white border-r border-gray-200 flex-shrink-0 h-auto md:h-screen sticky top-0 overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <h1 className="font-serif text-2xl font-bold text-gray-900">Propuesta Web</h1>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Cliente: Orianastudio</p>
        </div>
        <nav className="p-4 space-y-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id 
                  ? 'bg-brand-50 text-brand-700 border border-brand-100' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={`${activeSection === section.id ? 'text-brand-500' : 'text-gray-400'}`}>
                {section.icon}
              </span>
              {section.title.split('. ')[1]} {/* Removes the number for cleaner sidebar */}
            </button>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-gray-100">
          <button 
            onClick={onSwitchToLive}
            className="w-full bg-slate-900 text-white py-3 rounded-lg shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-medium"
          >
            <Search size={18} /> Ver Prototipo Web
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">v1.0 - Actualizado Hoy</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {sections.map(section => (
            section.id === activeSection && (
              <div key={section.id} className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-brand-500">
                     {section.icon}
                   </div>
                   <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="prose prose-slate max-w-none">
                  {section.content}
                </div>
              </div>
            )
          ))}
        </div>
      </main>
    </div>
  );
};