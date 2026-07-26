import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './financeSlice'

export const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
});

// Tipos inferidos para TypeScript (RootState y AppDispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;