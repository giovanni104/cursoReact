import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDate } from "../../utils/genericas";

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
  };

  const tranferencia = () => {
    handleOpen();
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
            <td>Cuenta a debitar:</td>
            <td>{inputFieldsData[0].descuentaDebitar}</td>
          </tr>
          <tr>
            <td>Cuenta a abonar:</td>
            <td>{inputFieldsData[0].descuentaAcreditar}</td>
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
                <td>{inputFieldsData[0].programa.repetir + " veces"}</td>
              </tr>
            </>
          ) : (
            <tr>
              <td>Fecha valor:</td>
              <td>{formatDate(new Date())}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <Button
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
