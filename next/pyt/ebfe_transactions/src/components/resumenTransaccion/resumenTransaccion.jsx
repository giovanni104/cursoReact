import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDate } from "../../utils/genericas";
import { labelsTransaccion } from "../../utils/labelsTransaccion";
import { publicFetch } from "@/utils/fetch";
import { AlertMessage } from "../alertMessage";

export const ResumenTransaccion = ({
  inputFieldsData,
  setOpenModal,
  resetForm,
  setInputFieldsData,
}) => {
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageAlert, setMessageAlert] = useState("error del sistema");
  const [typeMessageAlert, setTypeMessageAlert] = useState("");

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    /*setOpen(false);
    setOpenModal(true);*/
  };
  const handleOpen = () => {
    setOpen(true);

    if (inputFieldsData[0].programar == true) {
      fetchDataProgram();
    } else {
      fetchData();
    }
  };

  const tranferencia = () => {
    handleOpen();
  };

  const fetchData = async () => {
    try {
      let datosTransaccion = {
        company: "1",
        messageId:
          "OC51QnNzLnVCc3MuOTc5YTdnN2QgOGQ5Y2E3LmFiY2NhZm1kbmNlcWF3ZGRkRENi",
        username: "JEFEDEVPYT",
        channel: "WEB",
        internalUserName: "PYT",
        e2usm2: 1000,
        e2cusc: 1000,
        identification: "12345678",
        typeIdentification: "CED",
      };

      if (inputFieldsData[0].tipo == "terceros") {
        datosTransaccion.originAccount = inputFieldsData[0].cuentaDebitar;
        datosTransaccion.destinationAccount =
          inputFieldsData[0].beneficiarioCuenta;
        datosTransaccion.transferAmount = inputFieldsData[0].monto.toString();
        datosTransaccion.typeTransfer =
          inputFieldsData[0].beneficiarioTipoCuenta;
        datosTransaccion.typeCurrencyOriAccount = inputFieldsData[0].currency;
        datosTransaccion.language = "ES_CO";
        datosTransaccion.descriptionTx = inputFieldsData[0].concepto;

        datosTransaccion.nameBeneficiary =
          inputFieldsData[0].beneficiario.split(":")[0];
        datosTransaccion.codeBank = inputFieldsData[0].beneficiarioCodBanco;
        datosTransaccion.nameBank = inputFieldsData[0].beneficiarioBanco;
        datosTransaccion.idBeneficiary =
          inputFieldsData[0].beneficiario.split(":")[2];
        datosTransaccion.typeIdBeneficiary =
          inputFieldsData[0].beneficiario.split(":")[1];
      } else {
        datosTransaccion.originAccount = inputFieldsData[0].cuentaDebitar;
        datosTransaccion.destinationAccount =
          inputFieldsData[0].cuentaAcreditar;
        datosTransaccion.transferAmount = inputFieldsData[0].monto.toString();
        datosTransaccion.typeTransfer = "1";
        datosTransaccion.typeCurrencyOriAccount = "USD";
        datosTransaccion.language = "ES_CO";
        datosTransaccion.descriptionTx = inputFieldsData[0].concepto;

        datosTransaccion.codeBank = inputFieldsData[0].codBanco;
        datosTransaccion.nameBank = inputFieldsData[0].banco;
        datosTransaccion.idBeneficiary = "12345678";
        datosTransaccion.typeIdBeneficiary = "CED";
        datosTransaccion.nameBeneficiary = "JEFEDEVPYT";
      }

      const transfer = await publicFetch.post(`/transfers`, datosTransaccion);

      console.log("respuesta transaccion=>" + JSON.stringify(transfer));

      if (transfer.data.responseCode == "0000") {
        let valores = [...inputFieldsData];
        valores[0].NroOperacion = transfer.data.responseBody.NroOperacion;
        valores[0].errorLvl = transfer.data.errorLvl;
        valores[0].responseDesc = transfer.data.responseDesc;

        setInputFieldsData(valores);

        setOpen(false);
        setOpenModal(true);
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

  const fetchDataProgram = async () => {
    try {
      const transfer = await publicFetch.post(`/cuentasProgramadas`, {
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
        transactions: [
          {
            originAccount: inputFieldsData[0].cuentaDebitar,
            destinationAccount: inputFieldsData[0].cuentaAcreditar,
            transferAmount: inputFieldsData[0].monto.toString(),
            typeTransfer: "1",
            typeCurrencyOriAccount:
              inputFieldsData[0].monedaUsd == true
                ? "USD"
                : inputFieldsData[0].monedaDebitar,
            descriptionTx: inputFieldsData[0].concepto,
            dateExecution: "20231010",
            howOften: inputFieldsData[0].programa.repetir,
            frecuency: inputFieldsData[0].programa.frecuenciaType,
          },
        ],
      });

      console.log("respuesta=>" + JSON.stringify(transfer));

      if (transfer.data.responseCode == "0000") {
        if (transfer.data.responseBody.Invalidas.length > 0) {
          let mensaje =
            transfer.data.responseBody.Invalidas[0].whyFailed.split("-");
          setOpen(false);
          setMessageAlert(mensaje[1]);
          setTypeMessageAlert("error");
          setMessageOpen(true);
        } else {
          // datos.data.responseBody.Validas.length;
          if (transfer.data.responseBody.Validas.length > 0) {
            let valores = [...inputFieldsData];
            valores[0].NroOperacion =
              transfer.data.responseBody.Validas[0].nrOperation;
            valores[0].errorLvl = transfer.data.errorLvl;
            valores[0].responseDesc = transfer.data.responseDesc;

            setInputFieldsData(valores);

            setOpen(false);
            setOpenModal(true);
          }
        }
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
      <table style={{ margin: "0 auto", width: "500px" }}>
        <tbody style={{ margin: "0 auto", width: "100%" }}>
          <tr>
            <td>{labelsTransaccion.resumenTransaccion.cdebitar}:</td>
            <td>{inputFieldsData[0].descuentaDebitar}</td>
          </tr>
          <tr>
            <td>{labelsTransaccion.resumenTransaccion.cabonar}:</td>
            <td>{inputFieldsData[0].descuentaAcreditar}</td>
          </tr>
          <tr>
            <td>{labelsTransaccion.resumenTransaccion.monto}:</td>
            <td>{inputFieldsData[0].montoFormat}</td>
          </tr>

          <tr>
            <td>{labelsTransaccion.resumenTransaccion.concepto}:</td>
            <td>{inputFieldsData[0].concepto}</td>
          </tr>

          {inputFieldsData[0].programar == true ? (
            <>
              <tr>
                <td>{labelsTransaccion.resumenTransaccion.programacion}:</td>
                <td>{inputFieldsData[0].programa.frecuencia}</td>
              </tr>
              <tr>
                <td>{labelsTransaccion.resumenTransaccion.fecha}:</td>
                <td>{`${inputFieldsData[0].programa.dia}/${inputFieldsData[0].programa.mes}/${inputFieldsData[0].programa.anio}`}</td>
              </tr>

              <tr>
                <td>{labelsTransaccion.resumenTransaccion.repetir}:</td>
                <td>{inputFieldsData[0].programa.repetir + " veces"}</td>
              </tr>
            </>
          ) : (
            <tr>
              <td>{labelsTransaccion.resumenTransaccion.fecha}:</td>
              <td>{formatDate(new Date())}</td>
            </tr>
          )}
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
      <AlertMessage
        message={messageAlert}
        typeMessage={typeMessageAlert}
        open={messageOpen}
        setOpen={setMessageOpen}
      />
      <style jsx>{`
        td {
          font-family: "Nunito";
          font-weight: 600;
          font-size: 14px;
          color: #484848;
          width: 250px;
        }
        tr {
          height: 50px;
        }

        [data-tab-info] {
          display: none;
        }

        .active[data-tab-info] {
          display: block;
        }
      `}</style>
    </div>
  );
};
