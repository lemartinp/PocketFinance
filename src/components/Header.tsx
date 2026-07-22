import { TbLeaf } from 'react-icons/tb'

function Header() {
    return (
    <header className="w-full bg-[#131d21]/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-emerald-400 text-2xl">
                <TbLeaf />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
                PocketFinance
            </span>
        </div>
        <div className='flex items-center gap-6'>
            <nav className="flex items-center gap-6 text-sm font-medium">

                <span className='ext-emerald-400 font-semibold'>Dashboard</span>
                <span className='text-gray-400 hover:text-gray-200'>Transacciones</span>
                <span className='text-gray-400 hover:text-gray-200'>Perfil</span>
            
            </nav>
            <button
                className="px-4 py-1.5 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 text-sm hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/40 transition-all duration-200"
            >
                Cerrar Sesión (X)
            </button>
        </div>
        
    </header>
    );
};

export default Header;