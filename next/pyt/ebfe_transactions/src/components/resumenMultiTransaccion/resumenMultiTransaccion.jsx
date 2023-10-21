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
export const ResumenMultiTransaccion = ({
  inputFieldsData,

  resetForm,
  handleSubtitulo,
  setInputFieldsData,
}) => {
  console.log(JSON.stringify(inputFieldsData));

  const [open, setOpen] = React.useState(false);
  const [openResultados, setOpenResultados] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [idRow, setIdRow] = useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [idRegistro, setIdRegistro] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
    handleSubtitulo("terceros2");
    setOpenResultados(true);
    //setOpenModal(true);
  };
  const handleOpen = () => {
    let valores = [...inputFieldsData];

    for (let i = 0; i < valores.length; i++) {
      valores[i]["NroOperacion"] = random(50000, 99999999);
      valores[i]["errorLvl"] = "Succes";
      valores[i]["responseDesc"] = "Proceso existoso";
    }

    setInputFieldsData(valores);
    setOpen(true);
  };

  const tranferencia = () => {
    fetchData();
    handleOpen();
  };
  const deleteRows = () => {
    //document.getElementById(idRow).remove();

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
          originAccount: inputFieldsData[i].cuentaDebitar,
          destinationAccount: inputFieldsData[i].beneficiarioCuenta,
          transferAmount: inputFieldsData[i].monto.toString(),
          typeTransfer: inputFieldsData[i].beneficiarioTipoCuenta,
          typeCurrencyOriAccount: inputFieldsData[i].currency,
          descriptionTx: inputFieldsData[i].concepto,
          nameBeneficiary: inputFieldsData[i].beneficiario.split(":")[0],
          codeBank: inputFieldsData[i].beneficiarioCodBanco,
          nameBank: inputFieldsData[i].beneficiarioBanco,
          idBeneficiary: inputFieldsData[i].beneficiario.split(":")[2],
          typeIdBeneficiary: inputFieldsData[i].beneficiario.split(":")[1],
        };

        multipleTrasacciones.push(transaccion);
      }
      datosTransaccion.transactions = multipleTrasacciones;
      console.log("datosTransaccion =>" + JSON.stringify(datosTransaccion));
      const transfer = await publicFetch.post(`/transfers`, datosTransaccion);

      console.log("respuesta transaccion=>" + JSON.stringify(transfer));

      /*if (transfer.data.responseCode == "0000") {
        if (transfer.data.responseBody.validTransactions.length > 0) {
          ///transaccion existosa
          const respuesta = transfer.data.responseBody.validTransactions;

          let valores = [...inputFieldsData];
          valores[0].NroOperacion = respuesta[0].status.nroOperation;
          valores[0].errorLvl = "sucess";
          valores[0].responseDesc = transfer.data.responseDesc;
          setInputFieldsData(valores);
          setOpen(false);
          setOpenModal(true);
        } else {
          ///transaccion genero error

          const respuesta = transfer.data.responseBody.invalidTransactions;
          setOpen(false);
          setMessageAlert(respuesta[0].status.description);
          setTypeMessageAlert("error");
          setMessageOpen(true);
        }
      } else {
        setOpen(false);
        setMessageAlert("Error del sistema");
        setTypeMessageAlert("error");
        setMessageOpen(true);
      }*/
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
                  <td>{data.beneficiarioCuenta} </td>
                  <td>{data.beneficiario} </td>
                  <td>{data.monto} </td>
                  <td>{data.concepto} </td>
                  <td>24/01/2023</td>
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
