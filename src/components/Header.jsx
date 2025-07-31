"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/asesoria', label: '¿Qué incluye la asesoría?' },
  { href: '/ustedes', label: 'Ustedes' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/preguntas-frecuentes', label: 'FAQs' },
  { href: '/contacto', label: 'Contacto' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color de fondo principal del sitio (ejemplo: from-amber-100 to-orange-200)
  const baseBg = 'bg-gradient-to-b from-amber-100 to-orange-200';

  return (
    <header className={`w-full fixed top-0 left-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-white/80 backdrop-blur shadow-md' : baseBg}`}>
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-orange-700 font-bold text-xl tracking-tight flex items-center gap-2">
          ENHANCE
        </Link>
        <button
          className="sm:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="w-7 h-1 bg-orange-700 rounded"></span>
          <span className="w-7 h-1 bg-orange-700 rounded"></span>
          <span className="w-7 h-1 bg-orange-700 rounded"></span>
        </button>
        <ul className="hidden sm:flex gap-6 items-center">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="text-orange-800 hover:text-orange-600 font-medium transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-white/95 shadow-md px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-orange-800 hover:text-orange-600 font-medium transition-colors block" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
// ...existing code...
}

export default Header;
