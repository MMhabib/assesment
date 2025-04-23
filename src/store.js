import { configureStore } from '@reduxjs/toolkit';
import productReducer from './producslice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
