import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  type: 'Ingreso' | 'Gasto';
  amount: number;
}

interface FinanceState {
  transactions: Transaction[];
}

// Pasamos los datos mock que tenías directamente al initialState
const initialState: FinanceState = {
  transactions: [
    {
      id: "1",
      date: "15/07/2026",
      description: "Pago Nómina",
      category: "Salario",
      type: "Ingreso",
      amount: 3000000,
    },
    {
      id: "2",
      date: "14/07/2026",
      description: "Mercar en Éxito",
      category: "Hogar",
      type: "Gasto",
      amount: 450000,
    },
    {
      id: "3",
      date: "12/07/2026",
      description: "Recibo de Luz",
      category: "Hogar",
      type: "Gasto",
      amount: 120000,
    },
    {
      id: "4",
      date: "11/07/2026",
      description: "Transporte",
      category: "Transporte",
      type: "Ingreso",
      amount: 50000,
    },
    {
      id: "5",
      date: "10/07/2026",
      description: "Gimnasio",
      category: "Hogar",
      type: "Gasto",
      amount: 100000,
    },
    {
      id: "6",
      date: "08/07/2026",
      description: "Cine y Cena",
      category: "Entretenimiento",
      type: "Gasto",
      amount: 80000,
    },
  ],
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Omit<Transaction, 'id'>>) => {
      const newTransaction = {
        ...action.payload,
        id: crypto.randomUUID(),
      };
      // Insertamos al inicio para que quede arriba como la más reciente
      state.transactions.unshift(newTransaction);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addTransaction, deleteTransaction } = financeSlice.actions;
export default financeSlice.reducer;