import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import { DialogTitle, ListItem } from "@mui/material";
import { InfoMessage } from "../InfoMessage/InfoMessage";
import { formatDate } from "../../utils/genericas";
import html2canvas from "html2canvas";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
export const DialogTransaccion = ({
  openModal,
  handleClose,
  inputFieldsData,
  setOpenModal,
}) => {
  const downloadImage = () => {
    const table = document.getElementById("reciboTransaccion");

    html2canvas(table).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "table.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
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
              src={process.env.NEXT_PUBLIC_BASIC_URL + "LOGO BDV.svg"}
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
            <label className={"lbltituloModal"}>Transferencias propias</label>
          </div>

          <div style={{ textAlign: "center" }}>
            <label className={"lbltitulo2Modal"}>
              Operación N° 42049097012
            </label>
          </div>
        </Stack>
        <div className="containerIcons">
          <Stack direction="row" spacing={2}>
            <img
              src={process.env.NEXT_PUBLIC_BASIC_URL + "copiarDefault.svg"}
              className="copiar"
              style={{
                height: "30px",
                width: "30px",
              }}
            />
            <img
              className="favorito"
              src={process.env.NEXT_PUBLIC_BASIC_URL + "favoritosDefault.svg"}
              style={{
                height: "30px",
                width: "30px",
              }}
            />
            <img
              className="compartir"
              src={process.env.NEXT_PUBLIC_BASIC_URL + "compartirDefault.svg"}
              style={{
                height: "30px",
                width: "30px",
              }}
            />
            <img
              onClick={downloadImage}
              src={process.env.NEXT_PUBLIC_BASIC_URL + "descargarDefault.svg"}
              className="descargar"
              style={{
                height: "30px",
                width: "30px",
              }}
            />
          </Stack>
        </div>

        <table
          id="reciboTransaccion"
          style={{ margin: "0 auto", width: "500px" }}
        >
          <tbody>
            <tr>
              <td style={{ width: "250px" }}>Cuenta a debitar:</td>
              <td style={{ width: "250px" }}>
                {inputFieldsData[0].descuentaDebitar}
              </td>
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
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}></DialogActions>

      <div id="btnSalir" style={{ textAlign: "center", marginBottom: "30px" }}>
        <Button
          id="salir"
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
          onClick={() => setOpenModal(false)}
        >
          Salir
        </Button>
      </div>

      <InfoMessage message={"Transacción exitosa"} typeMessage={"error"} />

      <style jsx>{`
        .descargar:hover {
          content: url("${process.env
            .NEXT_PUBLIC_BASIC_URL}descargarHover.svg") !important;
        }
        .copiar:hover {
          content: url("${process.env
            .NEXT_PUBLIC_BASIC_URL}copiarHover.svg") !important;
        }
        .favorito:hover {
          content: url("${process.env
            .NEXT_PUBLIC_BASIC_URL}favoritosHover.svg") !important;
        }

        .compartir:hover {
          content: url("${process.env
            .NEXT_PUBLIC_BASIC_URL}compartirHover.svg") !important;
        }

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

        .lblNombre {
          font-family: Nunito !important;
          font-size: 14px !important;
          font-weight: 600 !important;
        }

        .lbltituloModal {
          font-family: Nunito !important;
          font-size: 20px !important;
          font-weight: 600 !important;
        }

        .lbltitulo2Modal {
          font-family: Nunito !important;
          font-size: 16px !important;
          font-weight: 600 !important;
        }

        .containerIcons {
          margin-top: 20px !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Dialog>
  );
};
