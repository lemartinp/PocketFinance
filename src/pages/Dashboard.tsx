import Header from '../components/Header'
import TransactionForm from '../components/TransactionForm';
import RecentTransactions from '../components/RecentTransactions';

function Dashboard () {
    return <>
        <Header/>
        <main className='flex-1 flex flex-col w-full mx-auto px-[20%] gap-3'>
            <h1 className='text-3xl font-bold text-white text-center sm:text-left'>
                ¡Hola Diluet!
            </h1>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
                <div className='bg-[#131d21] border border-cyan-500/30 rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] relative overflow-hidden'>
                    <span className='text-gray-400 text-sm font-medium mb-1'>Balance Total</span>
                    <h2 className='text-3xl font-extrabold text-white tracking-wide'>$ 1,250,000</h2>
                </div>
                <div className='bg-[#131d21] border border-cyan-500/30 rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] relative overflow-hidden'>
                    <span className='text-gray-400 text-sm font-medium mb-1'>Total Ingresos</span>
                    <h2 className='text-3xl font-extrabold text-white tracking-wide'>$ 3,000,000</h2>
                </div>
                <div className='bg-[#131d21] border border-cyan-500/30 rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] relative overflow-hidden'>
                    <span className='text-gray-400 text-sm font-medium mb-1'>Total Gastos</span>
                    <h2 className='text-3xl font-extrabold text-white tracking-wide'>$ 1,750,000</h2>
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-3'>
                <TransactionForm />
                <RecentTransactions />
            </section>
        </main>
    </>;
}

export default Dashboard;