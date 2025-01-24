import { mapsTypes } from "@/_types/mapsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  maps: mapsTypes[];
};

export const slice = createSlice({
  name: "MAPS",
  initialState: { maps: [] } as InitialState,
  reducers: {
    storeMaps(state, action: PayloadAction<mapsTypes[]>) {
      state.maps = action.payload;
    },
  },
});

export const { storeMaps} = slice.actions
export default slice.reducer
