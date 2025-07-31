import React from 'react'


const Footer = () => {
  return (
    <footer className="w-full bg-black text-orange-50 pt-8">
      <div className="max-w-5xl mx-auto px-10 pb- flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-bold text-lg tracking-tight flex items-center gap-1">ENHANCE</span>
          <span className="text-sm">Asesoría en entrenamiento y alimentación</span>
          <span className="text-xs text-orange-200">Buenos Aires, Argentina</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <a href="mailto:juancruzises@gmail.com" className="hover:underline text-orange-100 text-sm">juancruzises@gmail.com</a>
          <a href="https://wa.me/541123883960" target="_blank" rel="noopener noreferrer" className="hover:underline text-orange-100 text-sm">+54 11 2388-3960</a>
          <div className="flex gap-3 mt-2">
            <a href="https://www.instagram.com/juancruz.ises/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange-300 transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.5.2.8.5 1.1 1.1.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.5-.5.8-1.1 1.1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.5-.2-.8-.5-1.1-1.1-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.5.5-.8 1.1-1.1.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.4 3.9.7c-.8.3-1.5.8-2.1 1.4C1.1 3.3.6 4 .3 4.8.1 5.6 0 6.6 0 8c0 1.3 0 1.7.1 4.9s0 3.6.1 4.9c.1 1.4.2 2.4.4 3.2.3.8.8 1.5 1.4 2.1.6.6 1.3 1.1 2.1 1.4.8.3 1.8.5 3.2.6 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.4-.1 2.4-.2 3.2-.4.8-.3 1.5-.8 2.1-1.4.6-.6 1.1-1.3 1.4-2.1.3-.8.5-1.8.6-3.2.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.4-.2-2.4-.4-3.2-.3-.8-.8-1.5-1.4-2.1C20.7 1.1 20 0.6 19.2.3c-.8-.3-1.8-.5-3.2-.6C15.6.1 15.2 0 12 0z"/><path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2A4 4 0 1 1 12 7.8a4 4 0 0 1 0 8.2zm6.4-10.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
            </a>
            <a href="https://www.facebook.com/juancruz.ises/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-orange-300 transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/juan-cruz-ises/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-300 transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p className='m-0 bg-black text-white items-center justify-center w-full flex'>© {new Date().getFullYear()} | <a target='_blank' href='https://presentacionjc-juan-cruz-ises-projects.vercel.app/'><img className='w-[60px]' src={'/images/logo512.png'} alt="Logo Enhance"></img></a></p>
      </div>
    </footer>
  );
}

export default Footer