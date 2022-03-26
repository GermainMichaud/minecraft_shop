import { configureStore } from '@reduxjs/toolkit';

export const createStore = () =>
  configureStore({
    reducer: {},
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
