import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DynamicForm } from "../dynamicForm/DynamicForm";

//import '@/styles/Transaccion.module.css'

export const Transaccion = () => {
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

  const removeTabActive = async () => {
    const tabs = document.querySelectorAll("[data-tab-value]");
    tabs.forEach((tab) => {
      const target = document.querySelector(tab.dataset.tabValue + "h");
      target.classList.remove("act");
    });
  };

  return (
    <div className="contenedor2">
      <span className="titulo">Transferencias</span>
      <div className="contenedor">
        <Box
          container="main"
          sx={{ p: 3 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <div className="tabs">
            <div className="contenTabs">
              <span id="tab_1h" className="act" data-tab-value="#tab_1">
                Cuentas propias
              </span>
            </div>
            <div className="contenTabs2">
              <span id="tab_2h" data-tab-value="#tab_2">
                Cuentas terceros
              </span>
            </div>
            <div className="contenTabs2">
              <span id="tab_3h" data-tab-value="#tab_3">
                TCP/TDA
              </span>
            </div>

            <div className="contenTabs2">
              <span id="tab_4h" data-tab-value="#tab_4">
                Tarjetas de crédito
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
            <div className="tabs__tab" id="tab_4" data-tab-info>
              <DynamicForm key={4}></DynamicForm>
            </div>
          </div>
        </Box>
      </div>
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
          padding: 5px;
          border: 1px solid rgb(255, 255, 255);
          height: 40px;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .act {
          cursor: pointer;
          color: black;
          border-bottom: 2px solid #e21050 !important;
          font-weight: 700;
        }

        .contenTabs {
          border-left: 2px solid white !important;
          height: 35px;
          width: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .contenTabs2 {
          border-left: 2px solid #6f6d69 !important;

          height: 35px;
          width: 160px;

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

        .contenedor2 {
          position: absolute;
          top: 120px;

          height: 100%;
          width: 100%;
        }
        .titulo {
          font-family: Nunito;
          font-size: 24px;
          font-weight: 800;
          line-height: 33px;
          letter-spacing: 0em;
          margin-left: 135px !important;
        }
      `}</style>
    </div>
  );
};
