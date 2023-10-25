import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import resumenMultiTransaccionStyle from "./resumenMultiTransaccionStyle";
import Button from "@mui/material/Button";
import { labelsTransaccion } from "../../utils/labelsTransaccion";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Datatable } from "../dataTable";
import { ConfirmDialog } from "../confirmDialog";
import Link from "@mui/material/Link";
import { DialogTransaccion } from "../dialogTrasaccion/dialogTransaccion";
import { random } from "../../utils/genericas";
import { publicFetch } from "@/utils/fetch";
import { formatDate } from "../../utils/genericas";
export const ResumenMultiTransaccion = ({
  inputFieldsData,

  resetForm,
  handleSubtitulo,
  setInputFieldsData,
}) => {
  console.log(inputFieldsData);

  const [open, setOpen] = React.useState(false);
  const [openResultados, setOpenResultados] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [idRow, setIdRow] = useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [idRegistro, setIdRegistro] = React.useState(0);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageAlert, setMessageAlert] = useState("error del sistema");
  const [typeMessageAlert, setTypeMessageAlert] = useState("");

  const handleClose = () => {
    setOpen(false);
    handleSubtitulo("terceros2");
    setOpenResultados(true);
    //setOpenModal(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const tranferencia = () => {
    //fetchData();
    fetchDataProgram();
    handleOpen();
  };
  const deleteRows = () => {
    const cuentas = inputFieldsData.filter(function (el) {
      return el.index != idRow;
    });

    setInputFieldsData(cuentas);
  };

  const fetchData = async () => {
    try {
      let datosTransaccion = {
        messageId:
          "TC50b3Bvbm9GeklELjdlNTUuTUtNTktUTVIgTEtLTUxPLjZMUExVTU1ST1BnS01ZaEtZS1dL",
        username: "JEFEDEVPYT",
        channel: "WEB",
        internalUserName: "PYT",
        company: "1",
        language: "ES_CO",

        dataUser: {
          company: "1",
          e2usm2: 1000,
          e2cusc: 1000,
          typeIdentification: "CED",
          identification: "12345678",
        },
      };

      let multipleTrasacciones = [];

      for (let i = 0; i < inputFieldsData.length; i++) {
        let transaccion = {
          id: inputFieldsData[i].index,
          originAccount: inputFieldsData[i].cuentaDebitar,
          transferAmount: inputFieldsData[i].monto.toString(),
          typeCurrencyOriAccount: inputFieldsData[i].currency,
          descriptionTx: inputFieldsData[i].concepto,
        };

        if (inputFieldsData[i].noregistrado) {
          transaccion.nameBeneficiary = inputFieldsData[i].instrumento.nombre;
          transaccion.codeBank =
            inputFieldsData[i].instrumento.bancodestino.split(":")[0];
          transaccion.nameBank =
            inputFieldsData[i].instrumento.bancodestino.split(":")[1];
          transaccion.idBeneficiary = inputFieldsData[i].instrumento.numdoc;
          transaccion.typeIdBeneficiary =
            inputFieldsData[i].instrumento.tipodoc;

          if (inputFieldsData[i].instrumento.tipo == "cuenta") {
            transaccion.typeTransfer = 2;
            transaccion.destinationAccount =
              inputFieldsData[i].instrumento.numcuenta;
          } else {
            transaccion.typeTransfer = 3;
            transaccion.destinationAccount =
              inputFieldsData[i].instrumento.telefono;
          }
        } else {
          transaccion.destinationAccount =
            inputFieldsData[i].beneficiarioCuenta;
          transaccion.typeTransfer = inputFieldsData[i].beneficiarioTipoCuenta;
          transaccion.nameBeneficiary =
            inputFieldsData[i].beneficiario.split(":")[0];
          transaccion.codeBank = inputFieldsData[i].beneficiarioCodBanco;
          transaccion.nameBank = inputFieldsData[i].beneficiarioBanco;
          transaccion.idBeneficiary =
            inputFieldsData[i].beneficiario.split(":")[2];
          transaccion.typeIdBeneficiary =
            inputFieldsData[i].beneficiario.split(":")[1];
        }
        multipleTrasacciones.push(transaccion);
      }
      datosTransaccion.transactions = multipleTrasacciones;
      console.log("datosTransaccion =>" + JSON.stringify(datosTransaccion));
      const transfer = await publicFetch.post(`/transfers`, datosTransaccion);

      console.log("respuesta transaccion=>" + JSON.stringify(transfer.data));

      let valores = [...inputFieldsData];

      transfer.data.responseBody.validTransactions.forEach(function (
        transaccion
      ) {
        valores[transaccion.id]["NroOperacion"] =
          transaccion.status.nroOperation == "12345"
            ? random(50000, 99999999)
            : transaccion.status.nroOperation;
        valores[transaccion.id]["errorLvl"] = "sucess";
        valores[transaccion.id]["responseDesc"] = "Procesada";
      });

      transfer.data.responseBody.invalidTransactions.forEach(function (
        transaccion
      ) {
        valores[transaccion.id]["NroOperacion"] = transaccion.status.code;
        valores[transaccion.id]["errorLvl"] = "error";
        valores[transaccion.id]["responseDesc"] =
          transaccion.status.description;
      });

      setInputFieldsData(valores);
    } catch (err) {
      setOpen(false);
      console.log(err);
      setMessageAlert(err.response.data.responseDesc);
      setTypeMessageAlert("error");
      setMessageOpen(true);
    }
  };

  const fetchDataProgram = async () => {
    let programadas = inputFieldsData.filter(function (el) {
      return el.programar == true;
    });

    let multipleTrasacciones = [];

    for (let i = 0; i < programadas.length; i++) {
      let transaccion = {
        originAccount: programadas[i].cuentaDebitar,

        transferAmount: programadas[i].monto.toString(),

        typeCurrencyOriAccount: programadas[i].currency,
        descriptionTx: programadas[i].concepto,
        dateExecution:
          programadas[i].programa.anio +
          programadas[i].programa.mes +
          programadas[i].programa.dia,
        howOften: programadas[i].programa.repetir,
        frecuency: programadas[i].programa.frecuenciaType,
        id: programadas[i].index,
      };

      if (programadas[i].noregistrado) {
        transaccion.nameBeneficiary = inputFieldsData[i].instrumento.nombre;
        transaccion.codeBank =
          inputFieldsData[i].instrumento.bancodestino.split(":")[0];
        transaccion.nameBank =
          inputFieldsData[i].instrumento.bancodestino.split(":")[1];
        transaccion.idBeneficiary = inputFieldsData[i].instrumento.numdoc;
        transaccion.typeIdBeneficiary = inputFieldsData[i].instrumento.tipodoc;

        if (programadas[i].instrumento.tipo == "cuenta") {
          transaccion.typeTransfer = 2;
          transaccion.destinationAccount = programadas[i].instrumento.numcuenta;
        } else {
          transaccion.typeTransfer = 3;
          transaccion.destinationAccount = programadas[i].instrumento.telefono;
        }
      } else {
        transaccion.typeTransfer = programadas[i].beneficiarioTipoCuenta;
        transaccion.destinationAccount = programadas[i].beneficiarioCuenta;
        transaccion.nameBeneficiary = programadas[i].beneficiario.split(":")[0];
        transaccion.codeBank = programadas[i].beneficiarioCodBanco;
        transaccion.nameBank = programadas[i].beneficiarioBanco;
        transaccion.idBeneficiary = programadas[i].beneficiario.split(":")[2];
        transaccion.typeIdBeneficiary =
          programadas[i].beneficiario.split(":")[1];
      }
      multipleTrasacciones.push(transaccion);
    }

    let datosPeticion = {
      username: "JEFEDEVPYT",
      messageId:
        "OC51QnNzLnVCc3MuOTc5YTdnN2QgOGQ5Y2E3LmFiY2NhZm1kbmNlcWF3ZGRkRENi",
      channel: "WEB",
      internalUserName: "PYT",
      language: "ES_CO",
      company: "1",
      userData: {
        company: "1",
        e2usm2: 1000,
        e2cusc: 1000,
        typeIdentification: "CED",
        identification: 12345678,
      },
      transactions: multipleTrasacciones,
    };
    console.log("datosPeticion=>" + JSON.stringify(datosPeticion));
    try {
      const transfer = await publicFetch.post(
        `/cuentasProgramadas`,
        datosPeticion
      );

      console.log("respuesta=>" + JSON.stringify(transfer));

      if (transfer.data.responseCode == "0000") {
        let valores = [...inputFieldsData];

        transfer.data.responseBody.Validas.forEach(function (transaccion) {
          valores[transaccion.id]["NroOperacion"] =
            transaccion.nrOperation == "12345"
              ? random(50000, 99999999)
              : transaccion.nrOperation;
          valores[transaccion.id]["errorLvl"] = "sucess";
          valores[transaccion.id].responseDesc = transfer.data.responseDesc;
        });

        transfer.data.responseBody.Invalidas.forEach(function (transaccion) {
          let mensaje =
            transfer.data.responseBody.Invalidas[
              transaccion.id
            ].whyFailed.split("-");
          valores[transaccion.id]["NroOperacion"] = mensaje[0];
          valores[transaccion.id]["errorLvl"] = "error";
          valores[transaccion.id]["responseDesc"] = mensaje[1];
        });

        setInputFieldsData(valores);
      } else {
        setOpen(false);
        setMessageAlert("Error del sistema");
        setTypeMessageAlert("error");
        setMessageOpen(true);
      }
    } catch (err) {
      setOpen(false);
      console.log(err);
      setMessageAlert(err.response.data.responseDesc);
      setTypeMessageAlert("error");
      setMessageOpen(true);
    }
  };

  const fetchsaveBeneficiary = async () => {
    let beneficiarios = inputFieldsData.filter(function (el) {
      return el.registrar == true;
    });

    let multipleTrasacciones = [];

    beneficiarios.forEach(function (beneficiario) {
      let transaccion = {
        codeBank: beneficiario.instrumento.bancodestino.split(":")[0],
        nameBank: beneficiario.instrumento.bancodestino.split(":")[1],
        identificator: beneficiario.instrumento.numdoc,
        typeIdentificator: beneficiario.instrumento.tipodoc,
        typeCurrency: "USD",
        nameOwner: beneficiario.instrumento.nombre,
        isAuth: "true",
      };

      if (beneficiarios[i].instrumento.tipo == "cuenta") {
        transaccion.numAccount = beneficiario.instrumento.numcuenta;
        transaccion.typeBeneficiary = 2;
      } else {
        transaccion.numAccount = beneficiario.instrumento.telefono;
        transaccion.typeBeneficiary = 3;
      }

      multipleTrasacciones.push(transaccion);
    });

    let datosPeticion = {
      company: "1",
      messageId:
        "OC51QnNzLnVCc3MuOTc5YTdnN2QgOGQ5Y2E3LmFiY2NhZm1kbmNlcWF3ZGRkRENi",
      username: "JEFEDEVPYT",
      channel: "WEB",
      internalUserName: "PYT",
      e2usm2: 1000,
      e2cusc: 1000,
      language: "ES_CO",
      transactions: multipleTrasacciones,
    };
    console.log("datosPeticion=>" + JSON.stringify(datosPeticion));
    try {
      const transfer = await publicFetch.post(
        `/cuentasProgramadas`,
        datosPeticion
      );

      console.log("respuesta=>" + JSON.stringify(transfer));

      if (transfer.data.responseCode == "0000") {
        let valores = [...inputFieldsData];

        transfer.data.responseBody.Validas.forEach(function (transaccion) {
          valores[transaccion.id]["NroOperacion"] =
            transaccion.nrOperation == "12345"
              ? random(50000, 99999999)
              : transaccion.nrOperation;
          valores[transaccion.id]["errorLvl"] = "sucess";
          valores[transaccion.id].responseDesc = transfer.data.responseDesc;
        });

        transfer.data.responseBody.Invalidas.forEach(function (transaccion) {
          let mensaje =
            transfer.data.responseBody.Invalidas[
              transaccion.id
            ].whyFailed.split("-");
          valores[transaccion.id]["NroOperacion"] = mensaje[0];
          valores[transaccion.id]["errorLvl"] = "error";
          valores[transaccion.id]["responseDesc"] = mensaje[1];
        });

        setInputFieldsData(valores);
      } else {
        setOpen(false);
        setMessageAlert("Error del sistema");
        setTypeMessageAlert("error");
        setMessageOpen(true);
      }
    } catch (err) {
      setOpen(false);
      console.log(err);
      setMessageAlert(err.response.data.responseDesc);
      setTypeMessageAlert("error");
      setMessageOpen(true);
    }
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {!openResultados ? (
        <>
          <table style={{ margin: "0 auto" }} className="resumenTable">
            <tbody>
              <tr style={{ background: "#D9D9D9", color: "black" }}>
                <td style={{ color: "black" }}>Cuenta a debitar</td>
                <td style={{ color: "black" }}>Cuenta a acreditar</td>
                <td style={{ color: "black" }}>Nombre del beneficiario</td>
                <td style={{ color: "black" }}>Monto</td>
                <td style={{ color: "black" }}>Concepto</td>
                <td style={{ color: "black" }}>Fecha valor</td>
                <td style={{ color: "black" }}>Acción</td>
              </tr>

              {inputFieldsData.map((data, index) => (
                <tr id={data.index}>
                  <td>{data.cuentaDebitar} </td>

                  <td>
                    {!data.noregistrado ? (
                      <> {data.beneficiarioCuenta}</>
                    ) : (
                      <>
                        {(() => {
                          switch (data.instrumento.tipo) {
                            case "cuenta":
                              return <>{data.instrumento.numcuenta}</>;
                            default:
                              return <>{data.instrumento.telefono}</>;
                          }
                        })()}
                      </>
                    )}
                  </td>
                  <td>
                    {!data.noregistrado ? (
                      <> {data.beneficiario.split(":")[0]}</>
                    ) : (
                      <>{data.instrumento.nombre}</>
                    )}
                  </td>
                  <td>{data.monto} </td>
                  <td>{data.concepto} </td>
                  <td>
                    {data.programar ? (
                      <>
                        {" "}
                        {`${data.programa.dia}/${data.programa.mes}/${data.programa.anio}`}
                      </>
                    ) : (
                      <>{formatDate(new Date())}</>
                    )}
                  </td>
                  <td>
                    <IconButton
                      aria-label="delete"
                      sx={{
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
                      }}
                      onClick={() => {
                        setIdRow(data.index);
                        setConfirmOpen(true);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <Button
              id="confirmar"
              onClick={() => {
                tranferencia();
              }}
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
              {labelsTransaccion.resumenTransaccion.btnconfirmar}
            </Button>
            <Button
              id="cancelar"
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
              {labelsTransaccion.resumenTransaccion.btncancelar}
            </Button>
          </div>
        </>
      ) : (
        <>
          <table style={{ margin: "0 auto" }} className="multiTransaccion">
            <tbody>
              <tr style={{ background: "#D9D9D9", color: "black" }}>
                <td style={{ color: "black" }}>Detalle</td>
                <td style={{ color: "black" }}>Referencia</td>
                <td style={{ color: "black" }}>Monto</td>
                <td style={{ color: "black" }}>Estatus</td>
              </tr>

              {inputFieldsData.map((data, index) => (
                <tr>
                  <td>Trasancción {index + 1}</td>
                  <td>
                    <Link
                      href="#"
                      onClick={() => {
                        setIdRegistro(index);
                        setOpenModal(true);
                      }}
                    >
                      {data.NroOperacion}
                    </Link>
                  </td>
                  <td>{data.montoFormat} </td>
                  <td>{data.responseDesc} </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <Button
              id="confirmar"
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
              onClick={() => resetForm()}
            >
              Salir
            </Button>
          </div>
        </>
      )}

      <ConfirmDialog
        title="Delete Post?"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={deleteRows}
      >
        ¿Deseas eliminar esta transacción?
      </ConfirmDialog>

      <DialogTransaccion
        openModal={openModal}
        handleClose={handleClose}
        inputFieldsData={inputFieldsData}
        setOpenModal={setOpenModal}
        resetForm={resetForm}
        type={"terceros"}
        registro={idRegistro}
      />

      <style jsx>{resumenMultiTransaccionStyle}</style>
    </div>
  );
};
