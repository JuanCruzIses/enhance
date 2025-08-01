"use client"
import React from 'react';
import Image from 'next/image';



function SobreMi() {
  return (
    <>
      <div className="bg-orange-200 rounded-full my-10 mb-6 flex items-center justify-center shadow-lg">
        <Image src={"/images/yo-1.jpeg"} alt="Foto de JC" width={200} height={200} className="text-transparent w-[200px] h-[200px] object-[0_-10px] object-cover rounded-[50%] border-4 border-orange-800" />
      </div>
      <p className="max-w-xl text-center text-orange-800 mb-2 text-base sm:text-lg">
        Mi nombre es <span className="font-semibold">Juan Cruz Ises</span>, soy Profesor de Educación Física, entrenador y asesor nutricional. Toda mi vida estuve vinculado a la práctica deportiva y el entrenamiento físico, y desde hace más de 8 años me dedico a entrenar y acompañar a personas que quieren mejorar su físico, su salud o su rendimiento.</p>
      <p className="max-w-xl text-center text-orange-800 mb-2 text-base sm:text-lg">
        Mi objetivo consiste en ayudarte a encontrar y definir un sistema integral de entrenamiento y cuidado físico que realmente funcione, adaptándose a tus tiempos, necesidades y realidad.
      </p>
      <p className="text-lg font-bold text-orange-900 mt-8 text-center">No necesitás más motivación. Solo necesitás empezar.</p>
    </>
  );
}

export default SobreMi;
