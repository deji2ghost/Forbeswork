import { createSlice } from "@reduxjs/toolkit";
import { DashboardState } from "../../utils/dashboardtypes";

const initialState: DashboardState = {
  user: null,
  transactions: [],
  investments: [],
  savings: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getUserData(state, action) {
      state = action.payload;
    },
  },
});

export const { getUserData } = dashboardSlice.actions;
export default dashboardSlice.reducer;