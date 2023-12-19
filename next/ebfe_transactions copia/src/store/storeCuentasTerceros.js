//indicamos cuantod reducer manejamos
"use client";

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const Slice = createSlice({
  name: "cuentas",
  initialState: {
    propias: [],
    beneficiarios: [],
    parametros: {},
  },
  reducers: {
    guardarPropias: (state, action) => {
      state.propias = action.payload;
    },
    guardarBeneficiarios: (state, action) => {
      state.beneficiarios = action.payload;
    },
    guardarParametros: (state, action) => {
      state.parametros = action.payload;
    },
  },
});

export const { guardarPropias, guardarBeneficiarios, guardarParametros } =
  Slice.actions;

const store = configureStore({
  reducer: {
    cuentas: Slice.reducer,
  },
});

export const ProvidersTerceros = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
