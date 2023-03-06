import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import App from "./App";
import "./index.css";
 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
  <Box sx={{ display: "flex" }}> 
      <App />
        </Box> 
    </BrowserRouter>
  </React.StrictMode>
);
