import React from "react";
import { NextPage } from "next";
import { Transaccion } from "../../components/transaccion/trasanccion";
import { Button } from "@mui/material";
import axios from "axios";
import { getThemeBDV } from "@/themes/bdv-primary-theme";
import { ThemeContext } from "@/context/ui/ThemeProvider";
import { useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ProvidersTerceros } from "../../store/storeCuentasTerceros";
const publicFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
const handlerAuthPassword = async () => {
  const respuesta = await publicFetch.get(`dummy`);
  console.log("Se Consume el servicio " + respuesta);
};

const Prueba: NextPage = (props) => {
  const [mode, setMode] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider theme={getThemeBDV(mode)}>
          <CssBaseline />
          <ProvidersTerceros>
            <Transaccion />
          </ProvidersTerceros>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default Prueba;
