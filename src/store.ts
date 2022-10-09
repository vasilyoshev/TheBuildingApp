import { configureStore } from '@reduxjs/toolkit';
import { appStateSlice } from 'slices';

const store = configureStore({
  reducer: {
    appState: appStateSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
