import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./pages/Dashboard"
import TransactionsHistory from "./pages/TransactionsHistory";

function App() {

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 flex flex-col">
      <Routes>
        {/* Redirección automática de la raíz a /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Rutas principales */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionsHistory />} />
      </Routes>
    </div>
  )
}

export default App
