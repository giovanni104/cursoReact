import React from "react";
import resumenMultiTransaccionStyle from "./resumenMultiTransaccionStyle";
export const ResumenMultiTransaccion = () => {
  return (
    <div>
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
      <style jsx>{resumenMultiTransaccionStyle}</style>
    </div>
  );
};
