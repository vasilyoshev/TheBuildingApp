import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const appStateSlice = createSlice({
  initialState: {
    isLoggedIn: false,
  },
  name: 'appState',
  reducers: {
    setIsLoggedIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },
  },
});

export const selectIsLoggedIn = ({ appState }: RootState) =>
  appState.isLoggedIn;

export const { setIsLoggedIn } = appStateSlice.actions;
