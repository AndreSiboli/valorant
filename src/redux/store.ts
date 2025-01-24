import { configureStore } from "@reduxjs/toolkit";
import agentsReducer from "./slices/agentsSlice";
import mapsReducer from "./slices/mapsSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    agents: agentsReducer,
    maps: mapsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
