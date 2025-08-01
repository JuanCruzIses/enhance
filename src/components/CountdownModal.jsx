"use client"
import React, { useState, useEffect } from "react";

function CountdownModal() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false); // Controla la visibilidad del modal

  useEffect(() => {
    const modalClosed = localStorage.getItem("modalClosed"); // Verifica si el modal ya fue cerrado
    if (!modalClosed) {
      setIsVisible(true); // Muestra el modal si no fue cerrado previamente
    }

    const targetDate = new Date("2025-08-08T20:00:00"); // Sábado 8 de agosto a las 20:00 hs
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("modalClosed", "true"); // Guarda en localStorage que el modal fue cerrado
  };

  if (!isVisible) return null; // Si el modal está cerrado, no se renderiza

  return (
    <div className="fixed inset-0 z-50 bg-[#00000091] bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-orange-100 border border-orange-300 rounded-lg shadow-lg p-6 py-10 w-11/12 max-w-md">
        <button
          onClick={handleClose}
          className="absolute cursor-pointer top-2 right-2 bg-white text-orange-900 rounded-full p-2 shadow hover:bg-gray-200"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-orange-900 mb-4 text-center">
          15% de descuento en tu primera planificación
        </h3>
        <div className="text-center text-orange-800">
          <p className="text-sm">Tiempo restante:</p>
          <div className="flex justify-center gap-2 text-lg font-semibold">
            <div>
              <span>{timeLeft.days}</span>
              <span className="text-xs block">Días</span>
            </div>
            <div>
              <span>{timeLeft.hours}</span>
              <span className="text-xs block">Horas</span>
            </div>
            <div>
              <span>{timeLeft.minutes}</span>
              <span className="text-xs block">Min</span>
            </div>
            <div>
              <span>{timeLeft.seconds}</span>
              <span className="text-xs block">Seg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownModal;