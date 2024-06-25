import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    incrementByValue: (state, action:PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// export actions
export const { decrement, increment, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
