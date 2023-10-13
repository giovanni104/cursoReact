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
    handleOpen();
  };
  const deleteRows = () => {
    //document.getElementById(idRow).remove();

    const cuentas = inputFieldsData.filter(function (el) {
      return el.index != idRow;
    });

    setInputFieldsData(cuentas);
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
              <tr>
                <td>Trasancción 1</td>
                <td>
                  <Link
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    0102***3245
                  </Link>
                </td>
                <td>Bs 2.237,32</td>
                <td>Fallida</td>
              </tr>
              <tr>
                <td>Trasancción 1</td>
                <td>0102***3242</td>
                <td>USD 3.237,32</td>
                <td>Procesada</td>
              </tr>
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
      />

      <style jsx>{resumenMultiTransaccionStyle}</style>
    </div>
  );
};
