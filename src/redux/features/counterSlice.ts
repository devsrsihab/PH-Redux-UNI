import { createSlice } from "@reduxjs/toolkit";

type TCounterState = {
  count: number;
};
const initialState: TCounterState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count += -1;
    },
  },
});

// export actions
export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;
