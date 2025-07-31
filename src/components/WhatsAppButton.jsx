import React from 'react';
import Image from 'next/image';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/541123883960?text=Hola!%20Vi%20tu%20p%C3%A1gina%20y%20me%20interesa%20empezar%20mi%20asesor%C3%ADa."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-white text-white border-2 overflow-hidden border-solid border-[#2b8c00] rounded-full shadow-lg p-1 lg:p-4 flex items-center justify-center z-50 transition-colors"
    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
    aria-label="Contactar por WhatsApp"
  >
    <img src="/images/wpp.png" alt="WhatsApp Icon" className='bg-white' width={40} height={40} />
  </a>
);

export default WhatsAppButton;
