'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HumanBodyFigure from '@/components/HumanBodyFigure';
import RutinaModal from '@/components/RutinaModal';
import handleRutina from '@/hooks/handlerRutina';

function Page() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [usosRestantes, setUsosRestantes] = useState(5);
  const [bloqueado, setBloqueado] = useState(false);
  const [showLimiteModal, setShowLimiteModal] = useState(false);

  const categorias = [
    'Hombros',
    'Bíceps',
    'Tríceps',
    'Espalda',
    'Pectoral',
    'Core',
    'Glúteos',
    'Cuádriceps',
    'Isquiotibiales',
    'Gemelos',
    'OLY',
    'Pliometricos',
    'Estiramientos',
    'HIIT'
  ];

  useEffect(() => {
    // Recupera el contador de usos del localStorage
    const usos = localStorage.getItem('rutinaUsos');
    if (usos !== null) {
      const restantes = 5 - parseInt(usos, 10);
      setUsosRestantes(restantes > 0 ? restantes : 0);
      if (restantes <= 0) setBloqueado(true);
    }
  }, []);

  // Solo abre el modal, no descuenta el uso aquí
  const handleAbrirRutina = () => {
    if (bloqueado) {
      setShowLimiteModal(true);
      return;
    }
    setModalOpen(true);
  };

  const handleCloseLimiteModal = () => {
    setShowLimiteModal(false);
  };

  // Esta función se pasa a RutinaModal y descuenta el uso solo cuando el usuario confirma la rutina
  const handleRutinaConDescuento = (...args) => {
    // Actualiza el contador de usos
    const usos = localStorage.getItem('rutinaUsos');
    const nuevoUsos = usos ? parseInt(usos, 10) + 1 : 1;
    localStorage.setItem('rutinaUsos', nuevoUsos);
    const restantes = 5 - nuevoUsos;
    setUsosRestantes(restantes > 0 ? restantes : 0);
    if (restantes <= 0) setBloqueado(true);
    handleRutina(...args); // Llama la lógica original de rutina
    setModalOpen(false);   // Cierra el modal después de generar la rutina
  };

  return (
    <main className="min-h-screen bg-amber-50 px-4 py-8 flex flex-col gap-10 my-10 lg:w-[85%] mx-auto">
      <h1 className="text-3xl font-bold text-orange-900 mb-4 text-center">Ejercicios</h1>
      <p className="text-orange-800 text-center max-w-2xl mx-auto mb-8">
        En esta sección encontrarás un glosario completo de ejercicios, organizados por grupo muscular y categoría.
        Explora cada zona del cuerpo para descubrir ejercicios, técnicas y recomendaciones para tu entrenamiento.
      </p>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sección 1: Figura humana */}
        <section className="flex-1 flex flex-col items-center">
          <HumanBodyFigure />
        </section>
        {/* Sección 2: Selección de grupo muscular */}
        <section className="flex-1 flex flex-col items-center gap-6">
          <h2 className="text-xl font-bold text-orange-900 mb-2 text-center">Selecciona el grupo muscular que quieras entrenar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xs">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => router.push(`/ejercicios/${cat.toLowerCase().replace(/\s+/g, '-')}`)}
                className="cursor-pointer bg-orange-200 hover:bg-orange-400 text-orange-900 font-semibold py-2 px-4 rounded-lg shadow transition-colors text-base w-full"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      </div>
      <section className="w-full bg-orange-100 rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 mt-8">
        <h2 className="text-2xl font-bold text-orange-900 text-center">¡Armá tu rutina personalizada!</h2>
        <p className="text-orange-800 text-center max-w-xl">
          Selecciona los grupos musculares que quieras entrenar hoy y obtené una rutina sugerida para tu día.
        </p>
        <button
          onClick={handleAbrirRutina}
          disabled={bloqueado}
          className={`cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-semibold py-2 px-6 rounded-lg shadow transition ${bloqueado ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          Obtener rutina
        </button>
        <span className="text-orange-700 text-sm mt-2">
          Usos restantes: {usosRestantes} / 5
        </span>
      </section>
      <RutinaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        categorias={categorias}
        onSubmit={handleRutinaConDescuento}
      />
      {/* Modal de límite de usos */}
      {showLimiteModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
            <button
              onClick={handleCloseLimiteModal}
              className="absolute top-2 right-2 bg-orange-200 hover:bg-orange-400 text-orange-900 rounded-full p-2"
              aria-label="Cerrar"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-orange-900 mb-4 text-center">¡Llegaste al límite de usos!</h3>
            <p className="text-orange-800 text-center">
              Has alcanzado el máximo de 5 rutinas gratuitas.<br />
              Si quieres seguir avanzando, solicita el servicio de rutina personalizada y da el siguiente paso en tu preparación física.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Page;