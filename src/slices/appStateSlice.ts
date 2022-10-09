import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface InitialState {
  isLoggedIn: boolean;
  username: string;
}

const initialState: InitialState = {
  isLoggedIn: false,
  username: undefined,
};

export const appStateSlice = createSlice({
  initialState,
  name: 'appState',
  reducers: {
    setIsLoggedIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },
    setUsername(state, { payload }: PayloadAction<string>) {
      state.username = payload;
    },
  },
});

export const selectIsLoggedIn = ({ appState }: RootState) =>
  appState.isLoggedIn;
export const selectUsername = ({ appState }: RootState) => appState.username;

export const { setIsLoggedIn } = appStateSlice.actions;
