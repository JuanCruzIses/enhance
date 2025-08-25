'use client'
import React, { useState, useEffect } from 'react';

function RutinaModal({ open, onClose, categorias, onSubmit }) {
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [tipoEntrenamiento, setTipoEntrenamiento] = useState('Hipertrofia');
  const [volumenEntrenamiento, setVolumenEntrenamiento] = useState('Moderado');
  const [error, setError] = useState('');

  // Limpia los datos seleccionados al cerrar el modal o al abrirlo nuevamente
  useEffect(() => {
    if (!open) {
      setSeleccionadas([]);
      setTipoEntrenamiento('Hipertrofia');
      setVolumenEntrenamiento('Moderado');
      setError('');
    }
  }, [open]);

  // Maneja el toggle de selección de categorías
  const handleToggle = (cat) => {
    setSeleccionadas((prev) =>
      Array.isArray(prev)
        ? prev.includes(cat)
          ? prev.filter((c) => c !== cat)
          : [...prev, cat]
        : [cat]
    );
    setError('');
  };

  // Envía los datos seleccionados al padre y limpia el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Array.isArray(seleccionadas) || seleccionadas.length === 0) {
      setError('Debes seleccionar al menos una categoría de grupo muscular.');
      return;
    }

    let repeticiones = 10;
    if (tipoEntrenamiento === 'Fuerza') repeticiones = 5;
    if (tipoEntrenamiento === 'Resistencia') repeticiones = 20;

    let series = '3 - 4';
    if (volumenEntrenamiento === 'Bajo') series = '2 - 3';
    if (volumenEntrenamiento === 'Alto') series = '4 - 5';

    onSubmit({
      seleccionadas: Array.isArray(seleccionadas) ? seleccionadas : [],
      tipoEntrenamiento,
      volumenEntrenamiento,
      repeticiones,
      series
    });

    // Limpia los datos seleccionados
    setSeleccionadas([]);
    setTipoEntrenamiento('Hipertrofia');
    setVolumenEntrenamiento('Moderado');
    setError('');
    onClose();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div className="max-h-[90%] overflow-auto bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
        <button
          onClick={() => {
            setSeleccionadas([]);
            setTipoEntrenamiento('Hipertrofia');
            setVolumenEntrenamiento('Moderado');
            setError('');
            onClose();
          }}
          className="cursor-pointer absolute top-2 right-2 bg-orange-200 hover:bg-orange-400 text-orange-900 rounded-full p-2"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-orange-900 mb-4 text-center">
          Selecciona las categorías que quieres entrenar hoy
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categorias.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={cat}
                  checked={Array.isArray(seleccionadas) && seleccionadas.includes(cat)}
                  onChange={() => handleToggle(cat)}
                  className="accent-orange-600"
                />
                <span className="text-orange-900">{cat}</span>
              </label>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-semibold text-orange-900">Tipo de entrenamiento:</label>
            <select
              value={tipoEntrenamiento}
              onChange={e => setTipoEntrenamiento(e.target.value)}
              className="border rounded px-2 py-1 text-orange-900"
            >
              <option>Hipertrofia</option>
              <option>Fuerza</option>
              <option>Resistencia</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-orange-900">Volumen de entrenamiento:</label>
            <select
              value={volumenEntrenamiento}
              onChange={e => setVolumenEntrenamiento(e.target.value)}
              className="border rounded px-2 py-1 text-orange-900"
            >
              <option>Bajo</option>
              <option>Moderado</option>
              <option>Alto</option>
            </select>
          </div>
          {error && (
            <div className="text-red-600 text-sm text-center font-semibold mt-2">
              {error}
            </div>
          )}
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