import { configureStore } from '@reduxjs/toolkit';
import numberSlice from '../slices/numberCircle';

export const store = configureStore({
  reducer: {
    number: numberSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
