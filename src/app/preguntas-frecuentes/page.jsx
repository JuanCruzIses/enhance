'use client'
import React, { useState } from 'react';

const faqs = [
  {
    question: '¿En qué consiste la asesoría?',
    answer: 'Plan de entrenamiento personalizado, plan de alimentación adaptado a tu rutina, seguimiento semana a semana, y gráficos de progreso para que veas cómo vas avanzando. Además, acompañamiento constante por WhatsApp.'
  },
  {
    question: '¿La asesoría es solo para personas con experiencia en entrenamiento?',
    answer: 'No, podés arrancar desde cero. El plan se adapta 100% a tu nivel actual, aunque no hayas entrenado nunca.'
  },
  {
    question: '¿Cómo recibo mis planificaciones?',
    answer: 'Todo lo vas a tener en una carpeta personal de Google Drive, con archivos claros, ordenados y con fácil acceso desde tu celular o computadora.'
  },
  {
    question: '¿Los planes de entrenamiento son para hacerse únicamente en gimnasios o con materiales?',
    answer: 'No necesariamente. El plan se adapta al lugar donde puedas entrenar: gimnasio, casa, plaza o club. Vos me contás qué tenés disponible, y armamos el plan de entrenamiento en función de eso.'
  },
  {
    question: '¿Y si tengo alguna lesión o limitación física?',
    answer: 'También se tiene en cuenta. Me contás todo en el formulario y adaptamos el entrenamiento a lo que tu cuerpo necesite.'
  },
  {
    question: '¿Cómo es el seguimiento?',
    answer: 'Vas a completar un formulario semanal para evaluar tu cumplimiento. Con eso generamos gráficos que reflejan tu progreso y detectamos rápido si hay que ajustar algo.'
  },
  {
    question: '¿Tengo que pesar la comida para los planes de alimentación?',
    answer: 'Idealmente sí, al menos durante las primeras semanas. No es para volverse loco, es para tener una idea real de lo que comemos y aprender a medir porciones.'
  },
  {
    question: '¿Puedo tener comidas libres?',
    answer: 'Sí, las comidas libres están contempladas. No se trata de prohibir cosas, sino de aprender a equilibrar. Te explico cómo usarlas sin perjudicar el esfuerzo realizado en la semana.'
  },
  {
    question: '¿Puedo cambiar mi objetivo durante la asesoría?',
    answer: 'Sí, los planes son adaptables y se ajustan a medida que tus objetivos y circunstancias van cambiando.'
  },
];

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-8 flex flex-col gap-10 my-10 lg:w-[85%]">
      <section className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold text-orange-900 mb-8 text-center">Preguntas Frecuentes</h1>
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
                key={idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="bg-white rounded-xl shadow p-4 transition-all hover:shadow-lg cursor-pointer">
              <button
                className="cursor-pointer transition-all transition-300 w-full text-left flex justify-between items-center font-semibold text-orange-800 text-lg focus:outline-none"
                aria-expanded={openIndex === idx}
              >
                {faq.question}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                style={{ pointerEvents: openIndex === idx ? 'auto' : 'none' }}
                aria-hidden={openIndex !== idx}
              >
                <div className="text-orange-700 text-base px-1">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
