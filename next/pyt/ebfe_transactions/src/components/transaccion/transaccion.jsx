import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DynamicForm } from "../dynamicForm/DynamicForm";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
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
import { DialogTitle, ListItem } from "@mui/material";

//import '@/styles/Transaccion.module.css'

export const Transaccion = () => {
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

  const handleClose = () => {
    setOpenModal(false);
  };
  const format = (inputDate) => {
    let date, month, year;
    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();
    date = date.toString().padStart(2, "0");
    month = month.toString().padStart(2, "0");
    return `${date}/${month}/${year}`;
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

    console.log(inputFieldsData);

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

  //const [inputResumen, setInputResumen] = useState(false);

  return (
    <div className="contenedor2">
      <span className="titulo">Transferencias</span>
      <div className="contenedor">
        {/*inputResumen && (  )*/}
        <div id="idsubtitulo" style={{ paddingTop: "40px" }}>
          <div
            style={{ paddingBottom: "40px", margin: "0 auto", width: "40%" }}
          >
            <span className="subtitulo">
              ¿Confirmas los datos de la operación?
            </span>
          </div>
          <Divider />
        </div>
        <div
          style={{
            zIndex: "100",
            float: "right",
            marginTop: "25px",
            marginRight: "40px",
            color: "red",
          }}
        >
          {/*<ArrowCircleLeftIcon />*/}
          <img
            className="atrasTab"
            style={{ height: "50px", width: "50px" }}
            src={"/_transaction/tabs/volvertab.svg"}
          />
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
                <span id="tab_1h" className="act" data-tab-value="#tab_1">
                  Propias
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
                <DynamicForm
                  key={1}
                  handleInputChange={handleInputChange}
                  handleRemoveFields={handleRemoveFields}
                  handleAddFields={handleAddFields}
                  inputFields={inputFieldsPropia}
                  addVisible={false}
                  setInputFields={setInputFieldsPropia}
                  type={"propia"}
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

          <div id="datospagogrilla" className="ocultar">
            {inputFieldsData.length > 1 && (
              <div className="tab-content">
                <table style={{ margin: "0 auto" }} className="resumenTable">
                  <tbody>
                    <tr style={{ background: "#D9D9D9", color: "black" }}>
                      <td style={{ color: "black" }}>Cuenta a debitar</td>
                      <td style={{ color: "black" }}>Cuenta a acreditar</td>
                      <td style={{ color: "black" }}>
                        Nombre del beneficiario
                      </td>
                      <td style={{ color: "black" }}>Monto</td>
                      <td style={{ color: "black" }}>Concepto</td>
                      <td style={{ color: "black" }}>Fecha valor</td>
                      <td style={{ color: "black" }}>Acción</td>
                    </tr>
                    <tr>
                      <td>0102***1234</td>
                      <td>0102***3245</td>
                      <td>Maria Martinez</td>
                      <td>2.237,32</td>
                      <td>Pagos</td>
                      <td>24/01/2023</td>
                      <td>
                        <IconButton
                          className="trash"
                          size="large"
                          sx={{
                            position: "unset",
                            color: "#4A96D2",
                            backgroundColor: "white",
                            padding: "2px",
                            ":hover": {
                              color: "white",
                              backgroundColor: "#4A96D2",
                              opacity: 0.9,
                            },
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                            right: 50,
                            bottom: 50,
                          }}
                        >
                          {/*<img src={icon_trash} height={23} width={23} />*/}
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                    <tr>
                      <td>0102***1234</td>
                      <td>0105***9890</td>
                      <td>Julio Cesar</td>
                      <td>2.237,32</td>
                      <td>Alquiler condominio</td>
                      <td>24/01/2023</td>
                      <td>
                        <IconButton
                          className="trash"
                          size="large"
                          sx={{
                            position: "unset",
                            color: "#4A96D2",
                            backgroundColor: "white",
                            padding: "2px",
                            ":hover": {
                              color: "white",
                              backgroundColor: "#4A96D2",
                              opacity: 0.9,
                            },
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                            right: 50,
                            bottom: 50,
                          }}
                        >
                          {/*<img src={icon_trash} height={23} width={23} />*/}
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div id="datospago" className="ocultar">
            {inputFieldsData.length == 1 && (
              <div className="tab-content">
                <table style={{ margin: "0 auto", width: "40%" }}>
                  <tbody>
                    <tr>
                      <td>Cuenta a debitar:</td>
                      <td>{inputFieldsData[0].cuentaDebitar}</td>
                    </tr>
                    <tr>
                      <td>Cuenta a abonar:</td>
                      <td>{inputFieldsData[0].cuentaAcreditar}</td>
                    </tr>
                    <tr>
                      <td>Monto:</td>
                      <td>{inputFieldsData[0].montoFormat}</td>
                    </tr>

                    <tr>
                      <td>Concepto:</td>
                      <td>{inputFieldsData[0].concepto}</td>
                    </tr>

                    {inputFieldsData[0].programar == true ? (
                      <>
                        <tr>
                          <td>Programación:</td>
                          <td>{inputFieldsData[0].programa.frecuencia}</td>
                        </tr>
                        <tr>
                          <td>Fecha valor:</td>
                          <td>{`${inputFieldsData[0].programa.dia}/${inputFieldsData[0].programa.mes}/${inputFieldsData[0].programa.anio}`}</td>
                        </tr>

                        <tr>
                          <td>Repetir:</td>
                          <td>
                            {inputFieldsData[0].programa.repetir + " veces"}
                          </td>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <td>Fecha valor:</td>
                        <td>{format(new Date())}</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div style={{ textAlign: "center", marginTop: "80px" }}>
                  <Button
                    onClick={() => setOpenModal(true)}
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
                    Confirmar
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
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </div>

          <Dialog
            style={{ padding: "0px 0px 0px 0px" }}
            maxWidth={"630px"}
            open={openModal}
            onClose={handleClose}
            PaperProps={{ sx: { borderRadius: "8px" } }}
          >
            <DialogTitle style={{ padding: "0px 0px 0px 0px" }}>
              <div
                style={{
                  width: "630px",
                  height: "65.12px",
                  backgroundColor: "#E9E9E9",
                }}
              >
                <Stack
                  paddingTop={"16px"}
                  paddingLeft={"24px"}
                  paddingRight={"24px"}
                  height={"33.12"}
                  direction="row"
                  spacing={15}
                >
                  <img
                    style={{ height: "33.12px", width: "200px" }}
                    src={"/_transaction/LOGO BDV.svg"}
                  />

                  <div style={{ width: "366px", textAlign: "end" }}>
                    <label className={"lblNombre"}>
                      Graciela Carolina David Bracamonte
                    </label>
                  </div>
                </Stack>
              </div>
            </DialogTitle>
            <DialogContent>
              <Stack paddingTop={"16px"} direction="column" spacing={3}>
                <div style={{ textAlign: "center" }}>
                  <label className={"lblNombre"}>Transferencias propias</label>
                </div>

                <div style={{ textAlign: "center" }}>
                  <label className={"lblNombre"}>
                    Operación N° 42049097012
                  </label>
                </div>
              </Stack>
              <div className="containerIcons">
                <Stack direction="row" spacing={2}>
                  <img
                    className="copiar"
                    style={{
                      height: "30px",
                      width: "30px",
                      content: "url('/_transaction/copiarDefault.svg')",
                    }}
                  />
                  <img
                    className="favorito"
                    style={{
                      height: "30px",
                      width: "30px",
                      content: "url('/_transaction/favoritosDefault.svg')",
                    }}
                  />
                  <img
                    className="compartir"
                    style={{
                      height: "30px",
                      width: "30px",
                      content: "url('/_transaction/compartirDefault.svg')",
                    }}
                  />
                  <img
                    className="descargar"
                    style={{
                      height: "30px",
                      width: "30px",
                      content: "url('/_transaction/descargarDefault.svg')",
                    }}
                  />
                </Stack>
              </div>
              <table style={{ margin: "0 auto", width: "500px" }}>
                <tbody>
                  <tr>
                    <td>Cuenta a debitar:</td>
                    <td>{inputFieldsData[0].cuentaDebitar}</td>
                  </tr>
                  <tr>
                    <td>Cuenta a abonar:</td>
                    <td>{inputFieldsData[0].cuentaAcreditar}</td>
                  </tr>
                  <tr>
                    <td>Monto:</td>
                    <td>{inputFieldsData[0].montoFormat}</td>
                  </tr>

                  <tr>
                    <td>Concepto:</td>
                    <td>{inputFieldsData[0].concepto}</td>
                  </tr>

                  {inputFieldsData[0].programar == true ? (
                    <>
                      <tr>
                        <td>Programación:</td>
                        <td>{inputFieldsData[0].programa.frecuencia}</td>
                      </tr>
                      <tr>
                        <td>Fecha valor:</td>
                        <td>{`${inputFieldsData[0].programa.dia}/${inputFieldsData[0].programa.mes}/${inputFieldsData[0].programa.anio}`}</td>
                      </tr>

                      <tr>
                        <td>Repetir:</td>
                        <td>
                          {inputFieldsData[0].programa.repetir + " veces"}
                        </td>
                      </tr>
                    </>
                  ) : (
                    <tr>
                      <td>Fecha valor:</td>
                      <td>{format(new Date())}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </DialogContent>
            <DialogActions style={{ justifyContent: "center" }}>
              <Button sx={{ textTransform: "capitalize" }} variant="contained">
                Aceptar
              </Button>
            </DialogActions>
          </Dialog>

          <div
            id="btnTranferir"
            style={{ textAlign: "center", marginTop: "80px" }}
          >
            <Button
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

      <style jsx>{`
        .ocultar {
          display: none !important;
        }

        .descargar:hover {
          content: url("/_transaction/descargarHover.svg") !important;
        }
        .copiar:hover {
          content: url("/_transaction/copiarHover.svg") !important;
        }
        .favorito:hover {
          content: url("/_transaction/favoritosHover.svg") !important;
        }

        .compartir:hover {
          content: url("/_transaction/compartirHover.svg") !important;
        }

        .atrasTab:hover {
          content: url("/_transaction/tabs/volvertab2.svg") !important;
          width: "40px" !important;
          height: "40px" !important;
        }
        .resumenTable {
          border-collapse: separate;
          border-spacing: 0 11px;
          margin: "0 auto";
        }

        .resumenTable td {
          border: 1px solid #d9d9d9;
          border-style: solid none;
          padding: 11px;
          font-size: 16px;
          font-weight: 800;
        }

        .resumenTable td:first-child {
          border-left-style: solid;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        .resumenTable td:last-child {
          border-right-style: solid;
          border-bottom-right-radius: 8px;
          border-top-right-radius: 8px;
        }

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

        .subtitulo {
          font-family: Nunito;
          font-size: 22px;
          font-weight: 900;
          line-height: 27px;
          letter-spacing: 0em;

          color: #e21050;
        }

        td {
          font-family: "Nunito";
          font-weight: 800;
          font-size: 16px;
          color: #3f3c37;
        }
        tr {
          height: 50px;
        }

        .lblNombre {
          font-family: Nunito !important;
          font-size: 14px !important;
          font-weight: 600 !important;
        }

        .containerIcons {
          margin-top: 20px !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
