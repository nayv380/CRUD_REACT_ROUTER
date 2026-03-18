import { configureStore } from '@reduxjs/toolkit';
import itensReducer from './itensSlice';

export const store = configureStore({
  reducer: {
    itens: itensReducer
  }
});