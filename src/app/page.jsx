"use client"
import React from 'react';
import Link from 'next/link';
import WhatsAppButton from '../components/WhatsAppButton';


function Home() {
  return (
    <>
      <div className="w-full max-w-xl flex flex-col items-center gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-900 text-center">Entrená mejor</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-900 text-center">Comé mejor</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-900 text-center">Sentite mejor</h2>
        </div>
        <h3 className="text-lg sm:text-xl text-orange-800 text-center font-medium">Asesorías a distancia en entrenamiento y alimentación, personalizadas, acompañadas y pensadas para durar.</h3>
        <Link
          href="/asesoria"
          className="cursor-pointer mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-2xl shadow-lg transition-colors text-lg flex items-center gap-2"
        >
          Conoce el sistema
        </Link>
      </div>
      <WhatsAppButton />
    </>
  );
}

export default Home;
