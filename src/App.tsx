import Dashboard from "./pages/Dashboard"
import TransactionHistory from "./pages/TransactionsHistory";

function App() {

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 flex flex-col">
        {/*<Dashboard />*/}
        <TransactionHistory />
    </div>
  )
}

export default App
