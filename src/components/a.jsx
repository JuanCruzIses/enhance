import React, { useState, useEffect } from 'react';

const SectionRutina = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [usosRestantes, setUsosRestantes] = useState(5);
    const [bloqueado, setBloqueado] = useState(false);
    const [showLimiteModal, setShowLimiteModal] = useState(false);

    useEffect(() => {
        // Recupera el contador de usos del localStorage
        const usos = localStorage.getItem('rutinaUsos');
        if (usos !== null) {
            const restantes = 5 - parseInt(usos, 10);
            setUsosRestantes(restantes > 0 ? restantes : 0);
            if (restantes <= 0) setBloqueado(true);
        }
    }, []);

    const handleGenerarRutina = () => {
        if (bloqueado) {
            setShowLimiteModal(true);
            return;
        }
        setModalOpen(true);
        // Actualiza el contador de usos
        const usos = localStorage.getItem('rutinaUsos');
        const nuevoUsos = usos ? parseInt(usos, 10) + 1 : 1;
        localStorage.setItem('rutinaUsos', nuevoUsos);
        const restantes = 5 - nuevoUsos;
        setUsosRestantes(restantes > 0 ? restantes : 0);
        if (restantes <= 0) setBloqueado(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleCloseLimiteModal = () => {
        setShowLimiteModal(false);
    };

    return (
        <section className="w-full bg-orange-100 rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 mt-8">
            <h2 className="text-2xl font-bold text-orange-900 text-center">¡Armá tu rutina personalizada!</h2>
            <p className="text-orange-800 text-center max-w-xl">
                Selecciona los grupos musculares que quieras entrenar hoy y obtené una rutina sugerida para tu día.
            </p>
            <button
                onClick={handleGenerarRutina}
                disabled={bloqueado}
                className={`cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-semibold py-2 px-6 rounded-lg shadow transition ${bloqueado ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
                Obtener rutina
            </button>
            <span className="text-orange-700 text-sm mt-2">
                Usos restantes: {usosRestantes} / 5
            </span>
            {/* Modal de rutina (simulado) */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 bg-orange-200 hover:bg-orange-400 text-orange-900 rounded-full p-2"
                            aria-label="Cerrar"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <h3 className="text-lg font-bold text-orange-900 mb-4 text-center">Rutina generada</h3>
                        <p className="text-orange-800 text-center">Aquí iría el formulario y la rutina generada.</p>
                    </div>
                </div>
            )}
            {/* Modal de límite de usos */}
            {showLimiteModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                        <button
                            onClick={handleCloseLimiteModal}
                            className="absolute top-2 right-2 bg-orange-200 hover:bg-orange-400 text-orange-900 rounded-full p-2"
                            aria-label="Cerrar"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <h3 className="text-lg font-bold text-orange-900 mb-4 text-center">¡Llegaste al límite de usos!</h3>
                        <p className="text-orange-800 text-center">
                            Has alcanzado el máximo de 5 rutinas gratuitas.<br />
                            Si quieres seguir avanzando, solicita el servicio de rutina personalizada y da el siguiente paso en tu preparación física.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SectionRutina;