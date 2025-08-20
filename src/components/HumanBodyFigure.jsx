
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HumanBodyFigure = () => {
    const [hover, setHover] = useState('');
    const router = useRouter();
    // Colores
    const base = "#fde68a";
    const border = "#fb923c";
    const hoverColor = "#fdba74";

    // Popups
    const Popup = ({ text, style }) => (
        <div className="absolute z-50 px-3 py-1 bg-orange-400 text-white text-xs rounded shadow-lg animate-fade-in" style={style}>{text}</div>
    );

    // Mapeo de partes a categorías
    const partToCategory = {
        'Cuello': 'cuello',
        'Torso': 'torso',
        'Hombros': 'hombros',
        'Brazos': 'brazos',
        'Piernas': 'piernas',
    };

    // Handler de click
    const handlePartClick = (part) => {
        const categoria = partToCategory[part];
        if (categoria) {
            router.push(`/ejercicios/${categoria}`);
        }
    };

    return (
        <section className="flex-1 flex flex-col items-center gap-6">
            <h2 className="text-xl font-bold text-orange-900 mb-2 text-center">Selecciona la parte del cuerpo que quieras trabajar</h2>
            <div className='flex flex-col items-center gap-4 border-2 border-dashed border-orange-300 p-6 rounded-lg bg-white shadow-lg'>
                <div className="relative w-40 h-[28rem] flex items-center justify-center py-6 select-none">
                    {hover !== '' && <Popup text={hover} style={{ top: -20, right: -20 }} />}
                    {/* Cabeza */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 z-20"
                        style={{
                            top: 0,
                            width: 56,
                            height: 56,
                            background: "#fde68a",
                            border: "3px solid #fb923c",
                            borderRadius: "50%",
                        }}
                    />
                    {/* Cuello (recto en los lados) */}
                    <div
                        className="absolute cursor-pointer  left-1/2 -translate-x-1/2 z-10"
                        style={{
                            top: 50,
                            width: 15,
                            height: 22,
                            background: hover === 'Cuello' ? hoverColor : base,
                            border: `3px solid ${border}`,
                        }}
                        onMouseEnter={() => setHover('Cuello')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Cuello')}
                    />
                    {/* Tronco */}
                    <div
                        className="absolute cursor-pointer  left-1/2 -translate-x-1/2 z-10"
                        style={{
                            top: 66,
                            width: 60,
                            height: 120,
                            background: hover === 'Torso' ? hoverColor : base,
                            border: `3px solid ${border}`,
                            borderRadius: "25% 25% 30% 30% / 40% 40% 60% 60%",
                        }}
                        onMouseEnter={() => setHover('Torso')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Torso')}
                    />
                    {/* Hombro izquierdo (unido al tronco) */}
                    <div
                        className="absolute cursor-pointer  z-10"
                        style={{
                            top: 62,
                            left: 24,
                            width: 30,
                            height: 35,
                            background: hover === 'Hombros' ? hoverColor : base,
                            border: `3px solid ${border}`,
                            borderRadius: "50%",
                            transform: "rotate(80deg)",
                        }}
                        onMouseEnter={() => setHover('Hombros')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Hombros')}
                    />
                    {/* Hombro derecho (unido al tronco) */}
                    <div
                        className="absolute cursor-pointer  z-10"
                        style={{
                            top: 62,
                            right: 24,
                            width: 30,
                            height: 35,
                            background: hover === 'Hombros' ? hoverColor : base,
                            border: `3px solid ${border}`,
                            borderRadius: "50%",
                            transform: "rotate(80deg)",
                        }}
                        onMouseEnter={() => setHover('Hombros')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Hombros')}
                    />
                    {/* Brazo izquierdo superior (unido al hombro) */}
                    <div
                        className="absolute cursor-pointer  z-0"
                        style={{
                            top: 85,
                            left: 14,
                            width: 24,
                            height: 80,
                            background: hover === 'Brazos' ? hoverColor : base,
                            border: `3px solid ${border}`,
                            borderRadius: "50% / 60%",
                            transform: "rotate(12deg)",
                        }}
                        onMouseEnter={() => setHover('Brazos')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Brazos')}
                    />
                    {/* Brazo derecho superior (unido al hombro) */}
                    <div
                        className="absolute cursor-pointer  z-0"
                        style={{
                            top: 85,
                            right: 14,
                            width: 24,
                            height: 80,
                            background: hover === 'Brazos' ? hoverColor : base,
                            border: `3px solid ${border}`,
                            borderRadius: "50% / 60%",
                            transform: "rotate(-12deg)",
                        }}
                        onMouseEnter={() => setHover('Brazos')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Brazos')}
                    />
                    {/* Manos */}
                    <div
                        className="absolute cursor-pointer  z-10"
                        style={{
                            top: 160,
                            left: 7,
                            width: 19,
                            height: 22,
                            background: "#fde68a",
                            border: "3px solid #fb923c",
                            borderRadius: "90%",
                        }}
                    />
                    <div
                        className="absolute cursor-pointer  z-10"
                        style={{
                            top: 160,
                            right: 7,
                            width: 19,
                            height: 22,
                            background: "#fde68a",
                            border: "3px solid #fb923c",
                            borderRadius: "90%",
                        }}
                    />
                    {/* Pierna izquierda (unida a la cadera) */}
                    <div
                        className="absolute cursor-pointer  z-0"
                        style={{
                            top: 180,
                            left: 49,
                            width: 26,
                            height: 110,
                            background: hover === 'Piernas' ? hoverColor : base,
                            border: `3px solid ${border}`,
                            borderRadius: "40% 60% / 60% 80%",
                            transform: "rotate(5deg)",
                        }}
                        onMouseEnter={() => setHover('Piernas')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Piernas')}
                    />
                    {/* Pierna derecha (unida a la cadera) */}
                    <div
                        className="absolute cursor-pointer  z-0"
                        style={{
                            top: 180,
                            right: 49,
                            width: 26,
                            height: 110,
                            background: hover === 'Piernas' ? hoverColor : base,
                            border: `3px solid ${border}`,
                            borderRadius: "60% 40% / 60% 80%",
                            transform: "rotate(-5deg)",
                        }}
                        onMouseEnter={() => setHover('Piernas')}
                        onMouseLeave={() => setHover('')}
                        onClick={() => handlePartClick('Piernas')}
                    />
                    {/* Pies */}
                    <div
                        className="absolute cursor-pointer  z-10"
                        style={{
                            top: 288,
                            left: 40,
                            width: 28,
                            height: 16,
                            background: "#fde68a",
                            border: "3px solid #fb923c",
                            borderRadius: "60% 40% 80% 80%",
                            transform: "rotate(-8deg)",
                        }}
                    />
                    <div
                        className="absolute cursor-pointer  z-10"
                        style={{
                            top: 288,
                            right: 40,
                            width: 28,
                            height: 16,
                            background: "#fde68a",
                            border: "3px solid #fb923c",
                            borderRadius: "40% 60% 80% 80%",
                            transform: "rotate(8deg)",
                        }}
                    />
            </div>
        </div>
        </section >
    );
}

export default HumanBodyFigure