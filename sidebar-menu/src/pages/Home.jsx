import React, { useState } from "react";
import Box from "@mui/material/Box"; 
import { DynamicForm } from "./DynamicForm";

export const Home = () => {

  return (
    <>
      <Box
        container="main"
        sx={{ width: "1054px", p: 3 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <>
        <DynamicForm></DynamicForm>
        </>
      </Box>
    </>
  );
};
