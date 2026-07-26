import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../store/store"; // Ajusta esta ruta a tu store
import { deleteTransaction } from "../store/financeSlice";
import Header from "../components/Header";
import { FaTrash } from "react-icons/fa";


function TransactionHistory () {

    const dispatch = useDispatch();

    // Obtenemos las transacciones del estado global de Redux
    const transactions = useSelector((state: RootState) => state.finance.transactions);

    // Estados locales para los filtros
    const [filterType, setFilterType] = useState("Todos");
    const [filterCategory, setFilterCategory] = useState("Todas");

    // Función para filtrar los datos en tiempo real
    const filteredTransactions = transactions.filter((item) => {
        const matchesType =
        filterType === "Todos" || item.type === filterType;
        const matchesCategory =
        filterCategory === "Todas" || item.category === filterCategory;
        return matchesType && matchesCategory;
    });

    const handleDelete = (id: string) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta transacción?")) {
            dispatch(deleteTransaction(id));
        }
    };

    return <>
        <Header />
        <main className="flex flex-col px-[20%] w-full mt-4 mx-auto gap-3">
            
            {/*tittle*/}
            
            <h1 className="text-3xl font-bold text-white text-center sm:text-left">
                Historial de Transacciones de Diluet
            </h1>
            
            {/*filters*/}
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-30">
                <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-medium">
                        Filtrar por Tipo:
                    </label>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full bg-[#1c282d] border border-gray-700/60 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                        <option value="Todos">Todos los tipos</option>
                        <option value="Ingreso">Ingreso</option>
                        <option value="Gasto">Gasto</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-medium">
                        Filtrar por Categoría:
                    </label>
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="w-full bg-[#1c282d] border border-gray-700/60 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                        <option value="Todas">Todas las categorías</option>
                        <option value="Hogar">Hogar</option>
                        <option value="Comida">Comida</option>
                        <option value="Transporte">Transporte</option>
                        <option value="Salario">Salario</option>
                    </select>
                </div>
            </section>

            {/*transactions*/}
            
            <div className="bg-[#131d21] border border-gray-800/80 rounded-2xl p-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] w-full overflow-x-auto w-full">
                <table className="w-full text-left text-sm text-gray-300 border-collapse">
                    <thead>
                        <tr className="border-b border-gray-700/60 text-gray-400 font-semibold text-xs uppercase tracking-wider">
                        <th className="py-3 px-4">Fecha</th>
                        <th className="py-3 px-4">Descripción</th>
                        <th className="py-3 px-4">Categoría</th>
                        <th className="py-3 px-4">Tipo</th>
                        <th className="py-3 px-4">Monto</th>
                        <th className="py-3 px-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60">
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-800/30 transition-colors"
                                >
                                    <td className="py-3.5 px-4 font-medium text-gray-300">
                                        {item.date}
                                    </td>
                                    <td className="py-3.5 px-4">{item.description}</td>
                                    <td className="py-3.5 px-4">{item.category}</td>
                                    <td className="py-3.5 px-4">{item.type}</td>
                                    <td
                                        className={`py-3.5 px-4 font-semibold tracking-wide ${
                                        item.type === "Ingreso"
                                            ? "text-emerald-400"
                                            : "text-red-400"
                                        }`}
                                    >
                                        {item.type === "Ingreso" ? "+" : "-"}${" "}
                                        {item.amount.toLocaleString("es-CO")}
                                    </td>
                                    <td className="py-3.5 px-4 text-center">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="text-gray-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-500/10 transition-colors"
                                            title="Eliminar transacción"
                                        >
                                            <FaTrash className="text-sm" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                        <tr>
                            <td
                            colSpan={6}
                            className="py-6 text-center text-gray-500 italic"
                            >
                            No hay transacciones registradas con estos filtros.
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </main>
    </>
}

export default TransactionHistory;