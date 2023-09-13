import React from "react";

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
      <style jsx>{`
        .ocultar {
          display: none !important;
        }

        .atrasTab:hover {
          content: url("/_transaction/tabs/volvertab2.svg") !important;
          width: "40px" !important;
          height: "40px" !important;
        }
        .resumenTable {
          border-collapse: separate;
          border-spacing: 0 11px;
          margin: "0 auto";
        }

        .resumenTable td {
          border: 1px solid #d9d9d9;
          border-style: solid none;
          padding: 11px;
          font-size: 14px;
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

        .tabs {
          font-family: "Nunito";
          font-style: normal;

          font-size: 14px;
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
          color: #484848;
          border-bottom: 2px solid #e21050 !important;
          font-weight: 600;
        }

        .contenTabs {
          border-left: 2px solid white !important;
          height: 25px;
          padding-left: 16px;
          padding-right: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contenTabs2 {
          border-left: 2px solid #d9d9d9 !important;
          height: 25px;
          padding-left: 16px;
          padding-right: 16px;
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
          font-size: 16px;
          font-weight: 600;
          display: table;
          margin: 0 auto;
          color: #e21050;
        }
      `}</style>
    </div>
  );
};
