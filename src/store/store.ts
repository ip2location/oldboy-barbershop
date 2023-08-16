'use client';

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { headerReducer, searchingSlice } from '../Features/header';

export const store = configureStore({
  reducer: {
    headerReducer,
    [searchingSlice.reducerPath]: searchingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchingSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
