import { agentType } from "@/_types/agentTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  agents: agentType[];
};

export const slice = createSlice({
  name: "AGENTS",
  initialState: { agents: [] } as InitialStateType,
  reducers: {
    storeAgents(state, action: PayloadAction<agentType[]>) {
      state.agents = [...action.payload];
    },
  },
});

export const { storeAgents } = slice.actions;
export default slice.reducer;
