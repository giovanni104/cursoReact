import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DynamicForm } from "../dynamicForm/DynamicForm";
 
//import '@/styles/Transaccion.module.css'

export const  Transaccion=()=>  {
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
        sx={{   p: 3  }}
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



      <style jsx>{`
    [data-tab-info] {
      display: none;
    }
    
    .active[data-tab-info] {
      display: block;
    }
    
    .tabs {
      font-family: "Nunito";
      font-style: normal;
    
      font-size: 16px;
      line-height: 22px;
      color: #2c2c2c;
      display: flex;
      margin: 0;
    }
    
    .tabs span {
      padding: 10px;
      border: 1px solid rgb(255, 255, 255);
      height: 40px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .act {
      cursor: pointer;
      color: black;
      border-bottom: 3px solid #e21050 !important;
      font-weight: 700;
    }
    
    .contenTabs {
      height: 35px;
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .contenTabs2 {
      border-left: 2px solid #6f6d69 !important;
      border-right: 2px solid #6f6d69 !important;
    
      height: 35px;
      width: 120px;
    
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .contenedor {
      box-sizing: border-box;
      position: absolute;
      left: 136px;
      top: 50px;
      /* Grises/Blanco */
      background: #ffffff;
      /* Grises/Claro */
      border: 1px solid #f5f5f5;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding-right: 50px;
      padding-top: 20px;
      margin-bottom: 30px !important;
    }
    
    
    `}</style>
    </div>
  );
}
 

