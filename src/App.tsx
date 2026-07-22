//import { useState } from 'react'

import Header from './components/Header'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 flex flex-col">

      <Header />
      <main className='flex-1 flex flex-col justify-center items-center p-4'>
        <h1 className="text-3xl font-bold text-emerald-400">
          Pocket Finance Base Layout
        </h1>
      </main>
    </div>
  )
}

export default App
