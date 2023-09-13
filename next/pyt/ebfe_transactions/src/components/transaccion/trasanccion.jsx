import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DynamicForm } from "../dynamicForm/DynamicForm";
import Button from "@mui/material/Button";
import { ResumenTransaccion } from "../resumenTransaccion/resumenTransaccion";
import { DialogTransaccion } from "../dialogTrasaccion/dialogTransaccion";
import { ResumenMultiTransaccion } from "../resumenMultiTransaccion/resumenMultiTransaccion";

import {
  formData,
  formDataReset,
  formDataPropia,
  formDataPropiaReset,
} from "../dynamicForm/dynamicForm_";

import {
  removeTabActive,
  handleAddFields,
  handleRemoveFields,
  handleInputChange,
  handlePeriodoChange,
  handleSubmit,
} from "./trasaccionFunctions";

import transaccionStyle from "./transaccionStyle";

export const Transaccion = () => {
  const [btnTranferir, setBtnTranferir] = useState(true);

  const [inputFieldsPropia, setInputFieldsPropia] = useState([
    JSON.parse(JSON.stringify(formDataPropia)),
  ]);

  const [inputFields2, setInputFields2] = useState([
    JSON.parse(JSON.stringify(formData)),
  ]);

  const [inputFields3, setInputFields3] = useState([
    JSON.parse(JSON.stringify(formData)),
  ]);

  const [inputFields4, setInputFields4] = useState([
    JSON.parse(JSON.stringify(formData)),
  ]);

  const [inputFieldsData, setInputFieldsData] = useState([
    JSON.parse(JSON.stringify(formData)),
  ]);
  const [openModal, setOpenModal] = React.useState(false);
  const [tituloOperacion, setTituloOperacion] = React.useState("");

  const handleClose = () => {
    setOpenModal(false);
  };

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

  const siguiente = () => {
    var elementos = document.getElementsByClassName("active");
    console.log(elementos[0].id);

    switch (elementos[0].id) {
      case "tab_1":
        setTituloOperacion(" - Propias");
        setInputFieldsData(JSON.parse(JSON.stringify(inputFieldsPropia)));

        break;
      case "tab_2":
        setInputFieldsData(JSON.parse(JSON.stringify(inputFields2)));

        break;
      case "tab_3":
        setInputFieldsData(JSON.parse(JSON.stringify(inputFields3)));

        break;
      case "tab_4":
        setInputFieldsData(JSON.parse(JSON.stringify(inputFields4)));

        break;
    }

    const btnTranferir = document.querySelector("#btnTranferir");
    btnTranferir.classList.add("ocultar");

    const targetinput = document.querySelector("#inputResumen");
    targetinput.classList.add("ocultar");

    const targetdatospago = document.querySelector("#datospago");
    if (targetdatospago != null) {
      targetdatospago.classList.remove("ocultar");
    }
    const targetdatospagogrilla = document.querySelector("#datospagogrilla");
    if (targetdatospagogrilla != null) {
      targetdatospagogrilla.classList.remove("ocultar");
    }
    const target = document.querySelector("#idsubtitulo");
    target.classList.remove("ocultar");
  };

  const resetForm = () => {
    setTituloOperacion("");
    var elementos = document.getElementsByClassName("active");
    console.log(elementos[0].id);

    switch (elementos[0].id) {
      case "tab_1":
        setInputFieldsPropia([JSON.parse(JSON.stringify(formDataPropiaReset))]);

        break;
      case "tab_2":
        setInputFields2([JSON.parse(JSON.stringify(formDataReset))]);

        break;
      case "tab_3":
        setInputFields3([JSON.parse(JSON.stringify(formDataReset))]);

        break;
      case "tab_4":
        setInputFields4([JSON.parse(JSON.stringify(formDataReset))]);
        break;
    }

    setInputFieldsData([JSON.parse(JSON.stringify(formDataReset))]);

    const btnTranferir = document.querySelector("#btnTranferir");
    btnTranferir.classList.remove("ocultar");

    const targetinput = document.querySelector("#inputResumen");
    targetinput.classList.remove("ocultar");

    const targetdatospago = document.querySelector("#datospago");
    if (targetdatospago != null) {
      targetdatospago.classList.add("ocultar");
    }

    const targetdatospagogrilla = document.querySelector("#datospagogrilla");
    if (targetdatospagogrilla != null) {
      targetdatospagogrilla.classList.add("ocultar");
    }

    const target = document.querySelector("#idsubtitulo");
    target.classList.add("ocultar");
  };

  return (
    <div className="contenedor2">
      <span className="titulo">Transferencias {tituloOperacion}</span>
      <div className="contenedor">
        <div id="idsubtitulo" style={{ paddingTop: "5px" }}>
          <div style={{ paddingBottom: "5px" }}>
            <span className="subtitulo">
              ¿Confirmas los datos de la operación?
            </span>
          </div>
        </div>

        <Box
          container="main"
          sx={{ width: "1054px", p: 3 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <div id="inputResumen">
            <div className="tabs">
              <div className="contenTabs">
                <span
                  style={{ height: "10px" }}
                  id="tab_1h"
                  className="act"
                  data-tab-value="#tab_1"
                >
                  Propias
                </span>
              </div>
              <div className="contenTabs2">
                <span
                  id="tab_2h"
                  style={{ height: "10px" }}
                  data-tab-value="#tab_2"
                >
                  Terceros
                </span>
              </div>
              <div className="contenTabs2">
                <span
                  id="tab_3h"
                  style={{ height: "10px" }}
                  data-tab-value="#tab_3"
                >
                  TCP/TDA
                </span>
              </div>

              <div className="contenTabs2">
                <span
                  id="tab_4h"
                  style={{ height: "10px" }}
                  data-tab-value="#tab_4"
                >
                  Tarjetas de crédito
                </span>
              </div>
            </div>

            <div>
              <div className="tabs__tab active" id="tab_1" data-tab-info>
                <DynamicForm
                  key={1}
                  handleInputChange={handleInputChange}
                  handleRemoveFields={handleRemoveFields}
                  handleAddFields={handleAddFields}
                  inputFields={inputFieldsPropia}
                  addVisible={false}
                  setInputFields={setInputFieldsPropia}
                  type={"propia"}
                  setBtnTranferir={setBtnTranferir}
                ></DynamicForm>
              </div>
              <div className="tabs__tab" id="tab_2" data-tab-info>
                <DynamicForm
                  key={2}
                  handleInputChange={handleInputChange}
                  handleRemoveFields={handleRemoveFields}
                  handlePeriodoChange={handlePeriodoChange}
                  handleAddFields={handleAddFields}
                  inputFields={inputFields2}
                  addVisible={true}
                  setInputFields={setInputFields2}
                  type={"terceros"}
                ></DynamicForm>
              </div>
              <div className="tabs__tab" id="tab_3" data-tab-info>
                <DynamicForm
                  key={3}
                  handleInputChange={handleInputChange}
                  handleRemoveFields={handleRemoveFields}
                  handlePeriodoChange={handlePeriodoChange}
                  handleAddFields={handleAddFields}
                  inputFields={inputFields3}
                  addVisible={false}
                  setInputFields={setInputFields3}
                ></DynamicForm>
              </div>
              <div className="tabs__tab" id="tab_4" data-tab-info>
                <DynamicForm
                  key={4}
                  handleInputChange={handleInputChange}
                  handleRemoveFields={handleRemoveFields}
                  handlePeriodoChange={handlePeriodoChange}
                  handleAddFields={handleAddFields}
                  inputFields={inputFields4}
                  addVisible={false}
                  setInputFields={setInputFields4}
                ></DynamicForm>
              </div>
            </div>
          </div>
          {/* ventana de pagos multiples*/}
          <div id="datospagogrilla" className="ocultar">
            {inputFieldsData.length > 1 && <ResumenMultiTransaccion />}
          </div>

          {/* pagos con un solo registro*/}
          <div id="datospago" className="ocultar">
            {inputFieldsData.length == 1 && (
              <ResumenTransaccion
                inputFieldsData={inputFieldsData}
                setOpenModal={setOpenModal}
                resetForm={resetForm}
              />
            )}
          </div>
          {/* ventana modal del pago*/}
          <DialogTransaccion
            openModal={openModal}
            handleClose={handleClose}
            inputFieldsData={inputFieldsData}
            setOpenModal={setOpenModal}
          />

          {/* botones de tranferencia*/}
          <div
            id="btnTranferir"
            style={{ textAlign: "center", marginTop: "80px" }}
          >
            <Button
              disabled={btnTranferir}
              onClick={() => siguiente()}
              variant="contained"
              size="medium"
              sx={{
                borderRadius: "5px",
                textTransform: "none",
                width: "148px",
                height: "38px",
                padding: "8px, 32px, 8px, 32px",
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "Nunito",
                backgroundColor: "##4A96D2",
                "&:hover": {
                  backgroundColor: "#004A72",
                },
              }}
            >
              Transferir
            </Button>
            <Button
              variant="contained"
              size="medium"
              onClick={() => resetForm()}
              sx={{
                borderRadius: "5px",
                textTransform: "none",
                width: "148px",
                height: "38px",
                marginLeft: "10px",
                fontSize: "16px",
                border: "2px solid #0067B1",
                fontWeight: "700",
                fontFamily: "Nunito",
                color: "#4A96D2",
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#004A72",
                  color: "#FFFFFF",
                  border: "2px solid #004A72",
                },
              }}
            >
              Limpiar
            </Button>
          </div>
        </Box>
      </div>

      <style jsx>{transaccionStyle}</style>
    </div>
  );
};
