import React from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import StartFormModal from '@/components/StartFormModal';

function Contacto() {
  return (
    <div className='min-h-screen bg-amber-50 px-4 py-8 flex flex-col gap-10 my-10 lg:w-[85%]'>
      <section>
        <h1 className="text-3xl font-bold text-orange-900 mb-8 text-center">Contacto</h1>
        <StartFormModal open={true} />
        <WhatsAppButton />
      </section>
    </div>
  );
}

export default Contacto;
