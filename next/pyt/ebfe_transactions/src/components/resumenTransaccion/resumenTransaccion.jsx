import React, { useEffect, useState } from "react";
import Cookies from "cookies";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDate } from "../../utils/genericas";
import { labelsTransaccion } from "../../utils/labelsTransaccion";
import { publicFetch } from "@/utils/fetch";
export const ResumenTransaccion = ({
  inputFieldsData,
  setOpenModal,
  resetForm,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setOpenModal(true);
  };
  const handleOpen = () => {
    setOpen(true);
    fetchData();
  };

  const tranferencia = () => {
    handleOpen();
  };

  const fetchData = async () => {
    const messageId = Cookies.get("messageId");
    console.log(messageId);
    try {
      const transfer = await publicFetch.post(`/transfers`, {
        company: "1",
        messageId: messageId,
        username: "JEFEDEVPYT",
        channel: "WEB",
        internalUserName: "PYT",
        e2usm2: 1000,
        e2cusc: 1000,
        identification: "12345678",
        typeIdentification: "CED",
        originAccount: inputFieldsData[0].cuentaDebitar,
        destinationAccount: inputFieldsData[0].cuentaAcreditar,
        transferAmount: inputFieldsData[0].monto.toString(),
        typeTransfer: "1",
        typeCurrencyOriAccount: "USD",
        language: "ES_CO",
        descriptionTx: inputFieldsData[0].concepto,
        typeCustomer: 1,
      });

      console.log("respuesta=>" + JSON.stringify(transfer));
      setOpen(false);
      setOpenModal(true);
    } catch (err) {
      console.log(err);
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
