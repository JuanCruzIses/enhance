'use client'

import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { ejerciciosPorCategoria } from '@/utils/ejerciciosData';

export default function CategoriaEjercicioPage() {
  const params = useParams();
  const router = useRouter();

  // Decodificar la categoría para mostrar tildes y caracteres especiales correctamente
  let categoriaParam = params?.categoria;
  let categoria = categoriaParam;
  if (categoria) {
    try {
      categoria = decodeURIComponent(categoria).replace(/-/g, ' ');
    } catch {
      categoria = categoria.replace(/-/g, ' ');
    }
  }

  // Normalizar clave para buscar en el objeto (sin tildes, minúsculas, sin espacios)
  const normalizarClave = (str) =>
    decodeURIComponent(str || "")
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/ /g, '')
      .toLowerCase();

  const categoriaKey = normalizarClave(categoriaParam);

  // Buscar la categoría en el objeto de datos
  const ejercicios = ejerciciosPorCategoria[categoriaKey];
  return (
    <section className="relative min-h-screen bg-amber-50 px-4 py-8 flex flex-col items-center gap-8">
      {/* Botón volver */}
      <button
        className="hidden cursor-pointer absolute top-4 left-4 sm:flex items-center gap-2 px-3 py-1 bg-orange-200 hover:bg-orange-300 text-orange-900 rounded shadow transition"
        onClick={() => router.back()}
        aria-label="Volver"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <h1 className="text-3xl font-bold text-orange-900 mb-4 text-center">
        {categoria ? `Ejercicios de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}` : 'Ejercicios'}
      </h1>
      <p className="text-orange-800 text-center max-w-2xl mx-auto mb-8">
        Aquí encontrarás información, ejemplos y recomendaciones para entrenar el grupo muscular o categoría seleccionada.
      </p>
      {/* Render dinámico de ejercicios */}
      <div className="w-full max-w-2xl flex flex-col gap-8">
        {Array.isArray(ejercicios) && ejercicios.length > 0 ? (
          ejercicios.map((ej, idx) => (
            <div key={ej.nombre + idx} className="bg-white rounded-xl shadow p-6 text-orange-700 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-orange-900 mb-1">{ej.nombre}</h2>
              <p className="mb-1"><span className="font-semibold">Descripción:</span> {ej.descripcion}</p>
              <p className="mb-1"><span className="font-semibold">Material:</span> {ej.material}</p>
              <div className="mb-1">
                <span className="font-semibold">Errores comunes:</span>{" "}
                {Array.isArray(ej.errores) ? (
                  <ul className="list-disc ml-6">
                    {ej.errores.map((error, i) => (
                      <li key={i}>{error}</li>
                    ))}
                  </ul>
                ) : (
                  <span>{ej.errores}</span>
                )}
              </div>
              {/* <p className="mb-1"><span className="font-semibold">Errores comunes:</span> {ej.errores}</p> */}
              {ej.src && (
                <div className="mt-2">
                  <div className="aspect-video w-full max-w-xl mx-auto rounded overflow-hidden shadow">
                    <iframe
                      width="100%"
                      height="315"
                      src={ej.src}
                      title={`Video ejercicio: ${ej.nombre}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl shadow p-6 text-center text-orange-700">
            <span>Próximamente contenido para <b>{categoria}</b>.</span>
          </div>
        )}
      </div>
    </section>
  );
}