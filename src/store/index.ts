import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shopSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      shop: shopReducer,
    },
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
