'use client'
import React, { useState } from 'react';
import { ejerciciosPorCategoria } from '@/utils/ejerciciosData';

function generarRutina(categoriasSeleccionadas) {
  const rutina = [];
  categoriasSeleccionadas.forEach((cat) => {
    // Normaliza la clave para buscar en el objeto
    const clave = cat
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/ /g, '')
      .toLowerCase();
    const ejercicios = ejerciciosPorCategoria[clave];
    if (Array.isArray(ejercicios)) {
      // Toma los primeros 3 ejercicios de la categoría
      rutina.push({
        categoria: cat,
        ejercicios: ejercicios.slice(0, 3),
      });
    }
  });
  return rutina;
}

function RutinaPreview({ rutina, categorias }) {
  return (
    <div className="min-h-screen bg-amber-50 px-4 py-8 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold text-orange-900 mb-2 text-center">Rutina sugerida para hoy</h1>
      <p className="text-orange-800 text-center max-w-xl mb-4">
        Te recomendamos realizar 3 series de 10 repeticiones para cada ejercicio.<br />
        <span className="font-semibold text-orange-700">Tip:</span> ¡Haz una captura de pantalla para tener tu rutina a mano durante el entrenamiento!
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-8">
        {rutina.map((bloque, idx) => (
          <div key={bloque.categoria + idx} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold text-orange-900 mb-2">{bloque.categoria}</h2>
            <ul className="list-decimal ml-6 text-orange-800">
              {bloque.ejercicios.map((ej, i) => (
                <li key={ej.nombre + i} className="mb-2">
                  <span className="font-semibold">{ej.nombre}</span>
                  <span className="block text-sm">{ej.descripcion}</span>
                  <span className="block text-xs text-orange-600">3 series x 10 repeticiones</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default generarRutina