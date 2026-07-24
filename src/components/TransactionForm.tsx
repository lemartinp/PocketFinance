import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const TransactionForm: React.FC = () => {
  // Estado local para manejar el formulario antes de conectar con Redux
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'ingreso' | 'gasto'>('gasto');
  const [category, setCategory] = useState('Hogar');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Más adelante aquí despacharás la acción de Redux (addTransaction)
    console.log({ description, amount, type, category });
  };

  return (
    <div className="bg-[#131d21] border border-gray-800 rounded-2xl p-6 shadow-lg w-full">
      {/* Título de la tarjeta */}
      <h3 className="text-cyan-400 font-bold tracking-wider text-sm flex items-center gap-2 mb-6 uppercase">
        <FiPlus className="text-lg" />
        Registrar Movimiento
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo: Descripción */}
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-400 text-xs font-medium">Descripción</label>
          <input
            type="text"
            placeholder="Ej. Mercar en el Éxito"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full bg-[#1c282d] border border-gray-700/60 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Campo: Monto */}
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-400 text-xs font-medium">Monto</label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-gray-400 text-sm">$</span>
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full bg-[#1c282d] border border-gray-700/60 rounded-xl pl-8 pr-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Campo: Tipo (Radio Buttons) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-400 text-xs font-medium">Tipo</label>
          <div className="flex items-center gap-6 py-1">
            <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="ingreso"
                checked={type === 'ingreso'}
                onChange={() => setType('ingreso')}
                className="accent-cyan-400 w-4 h-4 cursor-pointer"
              />
              Ingreso
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="gasto"
                checked={type === 'gasto'}
                onChange={() => setType('gasto')}
                className="accent-cyan-400 w-4 h-4 cursor-pointer"
              />
              Gasto
            </label>
          </div>
        </div>

        {/* Campo: Categoría */}
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-400 text-xs font-medium">Categoría</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#1c282d] border border-gray-700/60 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
          >
            <option value="Hogar">Hogar</option>
            <option value="Comida">Comida</option>
            <option value="Transporte">Transporte</option>
            <option value="Salario">Salario</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full mt-2 bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-bold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-200 text-sm tracking-wide uppercase"
        >
          Guardar Registro
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;