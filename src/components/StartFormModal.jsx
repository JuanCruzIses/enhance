"use client"
import React, { useState } from 'react';

const StartFormModal = () => {
  const [form, setForm] = useState({ nombre: '', edad: '', telefono: '', objetivo: 'Salud general' });
  const [error, setError] = useState(''); 

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('')
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
  };

const validateForm = () => {
  if (!form.nombre.trim()) return false;
  if (!form.edad || form.edad < 10 || form.edad > 100) return false;
  if (!/^(\+?\d{7,15})$/.test(form.telefono)) return false;
  if (!form.objetivo) return false;
  return true;
};

  const handleWhatsApp = () => {
    if (!validateForm()) {
      setError('Por favor, completa todos los campos correctamente.');
      return;
    }
    const numero = "541123883960";
    const mensaje = `Hola! Quiero comenzar mi asesoría.\n\nNombre: ${form.nombre}\nEdad: ${form.edad}\nTeléfono: ${form.telefono}\nObjetivo: ${form.objetivo}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative text-black bg-[#feebbe] rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col gap-4 animate-fade-in">
        <p className="font-bold">Completa el formulario y comenzá tu proceso</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1">
            Nombre
            <input name="nombre" value={form.nombre} onChange={handleChange} required className="border rounded px-3 bg-amber-50 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            Edad
            <input name="edad" value={form.edad} onChange={handleChange} type="number" required className="border rounded px-3 bg-amber-50 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            Teléfono
            <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" required className="border rounded px-3 bg-amber-50 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            Objetivo principal
            <select name="objetivo" value={form.objetivo} onChange={handleChange} className="border rounded px-3 bg-amber-50 py-2">
              <option>Salud general</option>
              <option>Estético</option>
              <option>Deportivo</option>
              <option>Rehabilitación</option>
              <option>Recuperación física</option>
            </select>
          </label>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="bg-amber-700 cursor-pointer hover:bg-orange-700 text-white font-semibold w-[50%] m-auto py-3 px-8 rounded-full shadow-lg transition-colors text-lg mt-2"
          >
            Enviar
          </button>
          {error && <div className="text-red-600 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default StartFormModal;
