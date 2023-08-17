import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DynamicForm } from "../dynamicForm/DynamicForm";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { formData, setChangeValues } from "../dynamicForm/dynamicForm_";

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

  const [inputFields, setInputFields] = useState([
    JSON.parse(JSON.stringify(formData)),
  ]);

  const [inputResumen, setInputResumen] = useState(false);

  const removeTabActive = async () => {
    const tabs = document.querySelectorAll("[data-tab-value]");
    tabs.forEach((tab) => {
      const target = document.querySelector(tab.dataset.tabValue + "h");
      target.classList.remove("act");
    });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    if (values.length < 5) {
      values.push(JSON.parse(JSON.stringify(formData)));

      setInputFields(values);
    }
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = setChangeValues([...inputFields], event.target.name, index);
    setInputFields(values);
  };

  const handlePeriodoChange = (index, datos) => {
    const values = [...inputFields];
    values[index].programa = datos;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert(JSON.stringify(inputFields, null, 2));
  };

  const siguiente = () => {
    setInputResumen(!inputResumen);

    // alert(JSON.stringify(inputFields));
  };

  const resetForm = () => {
    setInputFields([formData]);
    setInputResumen(false);
  };

  return (
    <div className="contenedor2">
      <span className="titulo">Transferencias</span>
      <div className="contenedor">
        {inputResumen && (
          <div style={{ paddingTop: "40px" }}>
            <div
              style={{ paddingBottom: "40px", margin: "0 auto", width: "40%" }}
            >
              <span className="subtitulo">
                ¿Confirmas los datos de la operación?
              </span>
            </div>
            <Divider />
          </div>
        )}

        <Box
          container="main"
          sx={{ width: "1054px", p: 3 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {!inputResumen && (
            <>
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
                  <DynamicForm
                    key={1}
                    handleInputChange={handleInputChange}
                    handleRemoveFields={handleRemoveFields}
                    handlePeriodoChange={handlePeriodoChange}
                    handleAddFields={handleAddFields}
                    inputFields={inputFields}
                    addVisible={false}
                  ></DynamicForm>
                </div>
                <div className="tabs__tab" id="tab_2" data-tab-info>
                  <DynamicForm
                    key={2}
                    handleInputChange={handleInputChange}
                    handleRemoveFields={handleRemoveFields}
                    handlePeriodoChange={handlePeriodoChange}
                    handleAddFields={handleAddFields}
                    inputFields={inputFields}
                    addVisible={true}
                  ></DynamicForm>
                </div>
                <div className="tabs__tab" id="tab_3" data-tab-info>
                  <DynamicForm
                    key={3}
                    handleInputChange={handleInputChange}
                    handleRemoveFields={handleRemoveFields}
                    handlePeriodoChange={handlePeriodoChange}
                    handleAddFields={handleAddFields}
                    inputFields={inputFields}
                    addVisible={false}
                  ></DynamicForm>
                </div>
                <div className="tabs__tab" id="tab_4" data-tab-info>
                  <DynamicForm
                    key={4}
                    handleInputChange={handleInputChange}
                    handleRemoveFields={handleRemoveFields}
                    handlePeriodoChange={handlePeriodoChange}
                    handleAddFields={handleAddFields}
                    inputFields={inputFields}
                    addVisible={false}
                  ></DynamicForm>
                </div>
              </div>
            </>
          )}
          {inputResumen && inputFields.length > 1 && (
            <>
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
            </>
          )}

          {inputResumen && inputFields.length == 1 && (
            <>
              <div className="tab-content">
                <table style={{ margin: "0 auto", width: "40%" }}>
                  <tbody>
                    <tr>
                      <td>Cuenta a debitar:</td>
                      <td>{inputFields[0].cuenta}</td>
                    </tr>
                    <tr>
                      <td>Cuenta a acreditar:</td>
                      <td>{inputFields[0].banco}</td>
                    </tr>
                    <tr>
                      <td>Monto:</td>
                      <td>{inputFields[0].monto}</td>
                    </tr>

                    <tr>
                      <td>Concepto:</td>
                      <td>{inputFields[0].concepto}</td>
                    </tr>

                    <tr>
                      <td>Fecha valor:</td>
                      <td>
                        {inputFields[0].programa.dia +
                          "/" +
                          inputFields[0].programa.mes +
                          "/" +
                          inputFields[0].programa.anio}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <div style={{ textAlign: "center", marginTop: "80px" }}>
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
                backgroundColor: "#0067B1",
                "&:hover": {
                  backgroundColor: "#004A72",
                },
              }}
            >
              Continuar
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
                  backgroundColor: "#4A96D2",
                  color: "#FFFFFF",
                  border: "2px solid #4A96D2",
                },
              }}
            >
              Limpiar
            </Button>
          </div>
        </Box>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};
