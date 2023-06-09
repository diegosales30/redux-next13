'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if(state.value <= 1000) {
        state.value += 1 
      }
    },
    decrement: (state) => {
      if(state.value > 0) {
        state.value -= 1 
      }
  },
}
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;