import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DynamicForm } from "./dynamicForm/DynamicForm";
 
import './App.css'

function App() {
  useEffect(() => {
    const tabs = document.querySelectorAll("[data-tab-value]");
    const tabInfos = document.querySelectorAll("[data-tab-info]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        removeTabActive();
        const target = document.querySelector(tab.dataset.tabValue);
        const target_1 = document.querySelector(tab.dataset.tabValue + "h");

        tabInfos.forEach((tabInfo) => {
          tabInfo.classList.remove("active");
        });
        target.classList.add("active");
        target_1.classList.add("act");
      });
    });
  });

  const removeTabActive = () => {
    const tabs = document.querySelectorAll("[data-tab-value]");
    tabs.forEach((tab) => {
      const target = document.querySelector(tab.dataset.tabValue + "h");
      target.classList.remove("act");
    });
  };

  return (
    <div className="contenedor">
      <Box
        container="main"
        sx={{ width: "1054px", p: 3  }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <div className="tabs">
          <div className="contenTabs">
          <span id="tab_1h" className="act" data-tab-value="#tab_1">
            Personas
          </span>
          </div>
          <div className="contenTabs2">
          <span id="tab_2h" data-tab-value="#tab_2">
            Comercios
          </span>
          </div>
          <div className="contenTabs">
          <span id="tab_3h" data-tab-value="#tab_3">
           Comunas
          </span>
          </div>
        </div>

        <div className="tab-content">
          <div className="tabs__tab active" id="tab_1" data-tab-info>
          <DynamicForm key={1}></DynamicForm>
          </div>
          <div className="tabs__tab" id="tab_2" data-tab-info>
          <DynamicForm key={2}></DynamicForm>
          </div>
          <div className="tabs__tab" id="tab_3" data-tab-info>
          <DynamicForm key={3}></DynamicForm>
          </div>
        </div>

       
      </Box>
    </div>
  );
}
export default App;

