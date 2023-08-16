//indicamos cuantod reducer manejamos
"use client";

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    nombre: "JAB",
  },
  reducers: {
    guardarnombre: (state, action) => {
      state.nombre = action.payload;
    },
  },
});

export const { guardarnombre } = Slice.actions;

const store = configureStore({
  reducer: {
    valores: Slice.reducer,
  },
});

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
