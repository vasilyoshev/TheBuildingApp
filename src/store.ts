import { configureStore } from '@reduxjs/toolkit';
import { appStateSlice } from 'slices';

const store = configureStore({
  reducer: {
    appState: appStateSlice.reducer,
  },
});

// setupListeners(store.dispatch); // TODO remove?

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
