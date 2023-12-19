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

      if (inputFieldsData[0].tipo == "terceros") {
        let transaccion = {
          originAccount: inputFieldsData[0].cuentaDebitar,
          destinationAccount: inputFieldsData[0].beneficiarioCuenta,
          transferAmount: inputFieldsData[0].monto.toString(),
          typeTransfer: inputFieldsData[0].beneficiarioTipoCuenta,
          typeCurrencyOriAccount: inputFieldsData[0].currency,
          descriptionTx: inputFieldsData[0].concepto,
          nameBeneficiary: inputFieldsData[0].beneficiario.split(":")[0],
          codeBank: inputFieldsData[0].beneficiarioCodBanco,
          nameBank: inputFieldsData[0].beneficiarioBanco,
          idBeneficiary: inputFieldsData[0].beneficiario.split(":")[2],
          typeIdBeneficiary: inputFieldsData[0].beneficiario.split(":")[1],
        };
        datosTransaccion.transactions = [transaccion];
      } else {
        let transaccion = {
          originAccount: inputFieldsData[0].cuentaDebitar,
          destinationAccount: inputFieldsData[0].cuentaAcreditar,
          transferAmount: inputFieldsData[0].monto.toString(),
          typeTransfer: "1",
          typeCurrencyOriAccount: "USD",
          descriptionTx: inputFieldsData[0].concepto,
          nameBeneficiary: "JEFEDEVPYT",
          codeBank: inputFieldsData[0].codBanco,
          nameBank: inputFieldsData[0].banco,
          idBeneficiary: "12345678",
          typeIdBeneficiary: "CED",
        };
        datosTransaccion.transactions = [transaccion];
      }
      console.log("peticion fetchData=>" + JSON.stringify(datosTransaccion));
      const transfer = await publicFetch.post(`/transfers`, datosTransaccion);

      console.log("respuesta fetchData=>" + JSON.stringify(transfer));

      if (transfer.data.responseCode == "0000") {
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
      let datos = {
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
            dateExecution:
              inputFieldsData[0].programa.anio +
              inputFieldsData[0].programa.mes +
              inputFieldsData[0].programa.dia,
            howOften: inputFieldsData[0].programa.repetir,
            frecuency: inputFieldsData[0].programa.frecuenciaType,
            id: programadas[i].index,
            nameBeneficiary: "JEFEDEVPYT",
            codeBank: inputFieldsData[0].codBanco,
            nameBank: inputFieldsData[0].banco,
            idBeneficiary: "12345678",
            typeIdBeneficiary: "CED",
          },
        ],
      };

      console.log("peticion fetchProgramados=>" + JSON.stringify(datos));
      const transfer = await publicFetch.post(`/cuentasProgramadas`, datos);

      console.log("respuesta fetchProgramados=>" + JSON.stringify(transfer));

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
