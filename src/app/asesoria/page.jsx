import React from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import Link from 'next/link';

function Asesoria() {
  return (
    <div className="min-h-screen bg-amber-50 px-4 py-8 flex flex-col gap-10 my-10 lg:w-[85%]">
      <section>
        <h2 className="text-2xl font-bold text-orange-900 mb-6 text-center">¿QUÉ INCLUYE LA ASESORÍA?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2">
            <span className="text-4xl">💪</span>
            <h2 className="font-semibold text-black text-center">Plan de entrenamiento</h2>
            <p className="text-center text-orange-800">Hecho a medida según tu nivel, tus objetivos y tu disponibilidad.<br></br>De forma 100% personalizada para lograr los mejores resultados.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2">
            <span className="text-4xl">🍽️</span>
            <h2 className="font-semibold text-black text-center">Plan de alimentación</h2>
            <p className="text-center text-orange-800">Práctico, personalizado y realista.<br></br>Alineando tu alimentación con tu entrenamiento para alcanzar los objetivos propuestos.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2">
            <span className="text-4xl">📈</span>
            <h2 className="font-semibold text-black text-center">Seguimiento visual del progreso</h2>
            <p className="text-center text-orange-800">Tablero de gráficos y datos que nos permiten observar el cumplimiento de los objetivos que te propusiste.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2">
            <span className="text-4xl">💬</span>
            <h2 className="font-semibold text-black text-center">Acompañamiento por WhatsApp</h2>
            <p className="text-center text-orange-800">Contacto diario a disposición para resolver cualquier tipo de inquietud, ajuste y feedback de avance.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-orange-900 mb-4 text-center">¿CÓMO FUNCIONA?</h2>
        <ol className="list-decimal list-inside space-y-2 max-w-lg mx-auto text-orange-800">
          <li>Completás un formulario de preguntas a partir del cual tomo toda la información necesaria para conocerte.</li>
          <li>En función de tus respuestas armo tu carpeta de alumno con tu plan de entrenamiento y/o alimentación.</li>
          <li>Conversamos para resolver cualquier tipo de dudas que tengas.</li>
          <li>Lo empezás a aplicar semana a semana mientras yo te acompaño y medimos juntos tu avance.</li>
        </ol>
        <div className="flex flex-wrap justify-center mt-4">
          <Link
            href="https://forms.gle/S492pAFqxVW2NzYM7"
            target='_blank'
            className="cursor-pointer mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-2xl shadow-lg transition-colors text-lg flex items-center gap-2"
          >
          Empecemos
        </Link>
        </div>   
      </section>
      <WhatsAppButton />
    </div>
  );
}

export default Asesoria;
