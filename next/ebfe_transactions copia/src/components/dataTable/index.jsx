import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import resumenMultiTransaccionStyle from "./dataTableStyle";

export const Datatable = ({ titleData, rowsData, action }) => {
  const deleteRows = (id) => {
    document.getElementById(id).remove();
    if (action != undefined) {
      action();
    }
  };

  return (
    <div>
      <table
        key={"datatable"}
        style={{ margin: "0 auto" }}
        className="resumenTable"
      >
        <tbody>
          <tr
            key={"hd"}
            id="hd"
            style={{ background: "#D9D9D9", color: "black" }}
          >
            {titleData.map((title, index) => (
              <td key={"hd" + index} style={{ color: "black" }}>
                {" "}
                {title}
              </td>
            ))}

            <td key={"action"} style={{ color: "black" }}>
              Acción
            </td>
          </tr>

          {rowsData.map((data, index) => (
            <tr key={"data" + index} id={index}>
              {data.map((atributo, indexAtributo) => (
                <td key={index + "-" + indexAtributo}>{atributo} </td>
              ))}

              <td key={"b" + index}>
                <IconButton
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
                  onClick={() => deleteRows(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{resumenMultiTransaccionStyle}</style>
    </div>
  );
};
