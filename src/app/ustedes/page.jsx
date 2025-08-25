import React from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';

function Testimonios() {
  const alumnos = [
    { nombre: "Vicky", edad: 28 },
    { nombre: "Tomi", edad: 18 },
    { nombre: "Mer", edad: 24 },
    { nombre: "Maca", edad: 31 },
    { nombre: "Meli", edad: 33 },
    { nombre: "Mati", edad: 38 },
    { nombre: "Lucas", edad: 28 },
    { nombre: "Leo", edad: 25 },
    { nombre: "Kathe", edad: 21 },
    { nombre: "Joaco", edad: 14 },
    { nombre: "Gino", edad: 22 },
    { nombre: "Emi", edad: 35 },
    { nombre: "Rodrigo", edad: 26 },
    { nombre: "Pablo", edad: 39 },
  ];

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-8 flex flex-col gap-10 my-10 lg:w-[85%]">
      <section>
        <h2 className="text-2xl font-bold text-orange-900 mb-6 text-center">ALUMNOS ACTIVOS</h2>
        <section className="flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 animate-fade-in">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {alumnos.map((alumno, idx) => (
                <li
                  key={alumno.nombre}
                  className="flex items-center gap-3 bg-orange-100 rounded-lg px-4 py-2 shadow hover:scale-105 transition-transform duration-200"
                >
                  <span className="text-orange-700 font-semibold">{alumno.nombre}</span>
                  <span className="text-orange-500 text-sm bg-orange-200 rounded-full px-2 py-1 ml-auto">{alumno.edad} años</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-orange-900 mb-4 text-center">SEGUIMIENTO DE ALUMNOS</h2>
        <div className="w-full flex justify-center my-8">
          <div className="w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Resultados - Looker Studio"
              src="https://lookerstudio.google.com/embed/reporting/92a5e064-9a3a-46e7-85a8-c283d2c8fcb2/page/page_12345"
              width="100%"
              height="auto"
              style={{ border: 0, borderRadius: '16px', minHeight: 400, height: "auto", maxWidth: 900 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-orange-900 mb-6 text-center">RESULTADOS</h2>
        <section className="flex flex-col gap-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 animate-fade-in">  
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <div className="relative flex flex-col items-center text-center">
              <span className="mt-4 text-orange-700 font-semibold text-lg">¡SECCIÓN EN PROGRESO!</span>
              <p className="text-orange-800 text-center mt-2">
                Volvé pronto para conocer los progresos de cada uno de los alumnos<br />
                <span className="inline-block mt-2 text-orange-500 font-semibold">- Construyendo progreso -</span>
              </p>
            </div>
          </div>
        </div>
        </section>
      </section>
      {/* <section>
        <div>
          <h2 className="text-xl font-bold text-orange-900 mb-4 text-center">Testimonios</h2>
          <section className="flex flex-col gap-6 max-w-2xl mx-auto">
            <blockquote className="bg-white rounded-xl shadow p-6 text-orange-800 italic border-l-4 border-orange-400">
              "Nunca pensé que cumplir una rutina a distancia me iba a motivar tanto."
              <span className="block mt-2 font-semibold">– Vicky</span>
            </blockquote>
          </section>
        </div>
      </section> */}
        {/* <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
          <h2 className="font-semibold mb-2">Cumplimiento semanal</h2>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between"><span>Lucas</span><span className="font-bold">100%</span></div>
            <div className="flex justify-between"><span>Gino</span><span className="font-bold">80%</span></div>
            <div className="flex justify-between"><span>Tomas</span><span className="font-bold">90%</span></div>
          </div>
        </div> */}
      
      <WhatsAppButton />
    </div>);
}

export default Testimonios;
