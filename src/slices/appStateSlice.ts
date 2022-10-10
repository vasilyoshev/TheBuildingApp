import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Building } from 'types';

interface InitialState {
  isLoggedIn: boolean;
  username: string;
  buildings: Array<Building>;
}

const initialState: InitialState = {
  isLoggedIn: false,
  username: undefined,
  buildings: undefined,
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
    setBuildings(state, { payload }: PayloadAction<Array<Building>>) {
      state.buildings = payload;
    },
    addBuilding(state, { payload }: PayloadAction<Building>) {
      state.buildings.push(payload);
    },
    editBuilding(
      state,
      { payload: { id, name, area, location, image } }: PayloadAction<Building>
    ) {
      const buildingToEdit = state.buildings.find(
        (building) => building.id === id
      );
      buildingToEdit.name = name;
      buildingToEdit.area = area;
      buildingToEdit.location = location;
      buildingToEdit.image = image;
    },
    deleteBuilding(state, { payload }: PayloadAction<Building>) {
      state.buildings = state.buildings.filter(
        (building) => building.id !== payload.id
      );
    },
  },
});

export const selectIsLoggedIn = ({ appState }: RootState) =>
  appState.isLoggedIn;
export const selectUsername = ({ appState }: RootState) => appState.username;
export const selectBuildings = ({ appState }: RootState) => appState.buildings;

export const {
  setIsLoggedIn,
  setUsername,
  setBuildings,
  addBuilding,
  deleteBuilding,
  editBuilding,
} = appStateSlice.actions;
