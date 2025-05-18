'use client';

import axios from "axios";
import { FormEvent, useState } from 'react';

function RegisterPage() {
  // Estado para mostrar mensajes de éxito o error
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await axios.post("/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      });

      console.log(res);
      setMessage("✅ Usuario registrado exitosamente.");
      setError(""); // Limpiar mensaje de error si existía
    } catch (err) {
      console.log(err);
      setError("❌ Ocurrió un error al registrar el usuario.");
      setMessage(""); // Limpiar mensaje de éxito si existía
    }
  };

  return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-gray-100 to-green-200">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border border-green-200">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8 tracking-wide">Registro</h1>
        
        {message && (
          <div className="mb-4 text-green-700 font-medium text-center bg-green-100 border border-green-300 py-2 px-4 rounded-xl">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 text-red-700 font-medium text-center bg-red-100 border border-red-300 py-2 px-4 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Ej: Juan Pérez"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-green-500 to-gray-400 text-white font-bold rounded-xl shadow-lg hover:from-green-600 hover:to-gray-500 transition"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;