'use client'
import React, { useState } from 'react';

function RutinaModal({ open, onClose, categorias, onSubmit }) {
  const [seleccionadas, setSeleccionadas] = useState([]);

  const handleToggle = (cat) => {
    setSeleccionadas((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(seleccionadas);
    onClose();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-2 bg-orange-200 hover:bg-orange-400 text-orange-900 rounded-full p-2"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-orange-900 mb-4 text-center">Selecciona las categorías que quieres entrenar hoy</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categorias.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={cat}
                  checked={seleccionadas.includes(cat)}
                  onChange={() => handleToggle(cat)}
                  className="accent-orange-600"
                />
                <span className="text-orange-900">{cat}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-semibold py-2 px-6 rounded-lg shadow mt-4"
          >
            Obtener rutina
          </button>
        </form>
      </div>
    </div>
  );
}

export default RutinaModal;