import React from 'react';
import { LiveSite } from './components/LiveSite';

export default function App() {
  // Ya no necesitamos estados ni botones de propuesta.
  // Renderizamos directamente el sitio web final.
  return (
    <LiveSite />
  );
}