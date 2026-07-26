import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store'; // Ajusta la ruta a tu store

const RecentTransactions: React.FC = () => {
  // Datos de prueba (mock) basados en la imagen del PDF
  // Más adelante estos datos vendrán directamente del financeSlice de Redux con un .slice(0, 5)
  const transactions = useSelector((state: RootState) => state.finance.transactions)

  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="bg-[#131d21] border border-gray-800 rounded-2xl p-6 shadow-lg w-full flex flex-col justify-between">
      <div>
        {/* Título de la tarjeta */}
        <h3 className="text-amber-400 font-bold tracking-wider text-sm flex items-center gap-2 mb-6 uppercase">
          <FiBell className="text-lg" />
          Últimos Movimientos
        </h3>

        {/* Lista de Movimientos */}
        <div className="space-y-4">
          {recentTransactions.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-sm py-1 border-b border-gray-800/40 last:border-0"
            >
              {/* Descripción con la viñeta de asterisco */}
              <div className="flex items-center gap-2 text-gray-200 font-medium">
                <span className="text-amber-400 font-bold">*</span>
                <span>{item.description}</span>
              </div>

              {/* Monto coloreado según tipo */}
              <span
                className={`font-semibold tracking-wide ${
                  item.type === 'Ingreso' ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {item.type === 'Ingreso' ? '+' : '-'}$ {item.amount.toLocaleString('es-CO')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Enlace al Historial Completo */}
      <div className="mt-8 text-center">
        <Link
          to="/transactions"
          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium hover:underline transition-all"
        >
          Ver todo el historial
        </Link>
      </div>
    </div>
  );
};

export default RecentTransactions;