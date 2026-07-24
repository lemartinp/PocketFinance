import React from 'react';
//import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';

// Tipo temporal para simular la estructura de los datos
interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'ingreso' | 'gasto';
}

const RecentTransactions: React.FC = () => {
  // Datos de prueba (mock) basados en la imagen del PDF
  // Más adelante estos datos vendrán directamente del financeSlice de Redux con un .slice(0, 5)
  const dummyTransactions: Transaction[] = [
    { id: '1', description: 'Pago Nómina', amount: 3000000, type: 'ingreso' },
    { id: '2', description: 'Supermercado', amount: 450000, type: 'gasto' },
    { id: '3', description: 'Recibo de Luz', amount: 120000, type: 'gasto' },
    { id: '4', description: 'Transporte', amount: 50000, type: 'gasto' },
    { id: '5', description: 'Gimnasio', amount: 100000, type: 'gasto' },
  ];

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
          {dummyTransactions.map((item) => (
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
                  item.type === 'ingreso' ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {item.type === 'ingreso' ? '+' : '-'}$ {item.amount.toLocaleString('es-CO')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Enlace al Historial Completo */}
      <div className="mt-8 text-center">
        Ver todo el historial
        {/*
        <Link
          to="/transactions"
          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium hover:underline transition-all"
        >
          Ver todo el historial
        </Link>
        */}
      </div>
    </div>
  );
};

export default RecentTransactions;