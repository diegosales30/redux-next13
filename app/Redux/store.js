'use client'; // Next.js 13 comes as a server side component by default. We use 'use client' to make it a client-side component.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export const getRootState = () => store.getState();
export const dispatch = store.dispatch;
export default store;