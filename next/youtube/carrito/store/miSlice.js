import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "misValores",
  initialState: {
    categoria: "",
    miCarrito: [],
  },
  reducers: {
    guardarCategoria: (state, action) => {
      state.categoria = action.payload;
    },
    comprar: (state, action) => {
      state.miCarrito = [...state.miCarrito, action.payload];
    },
    devolver: (state, action) => {
      state.miCarrito = state.miCarrito.filter(
        (objeto) => objeto.producto !== action.payload
      );
    },
  },
});
export const { guardarCategoria, comprar, devolver } = origenSlice.actions;
