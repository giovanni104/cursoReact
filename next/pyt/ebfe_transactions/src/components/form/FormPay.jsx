import Reac, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { Formdate } from "../formDate/FormDate";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
//import "../../styles/formPay.module.css";

const icon_trash = "/_transaction/trash_azul.svg";

export const FormPay = ({
  handleInputChange,
  handleRemoveFields,
  handlePeriodoChange,
  handleAddFields,
  inputField,
  index,
  addVisible,
  setInputFields,
  inputFields,
}) => {
  return (
    <Fragment key={`${inputField}~${index}`}>
      {index > 0 && (
        <Tooltip
          title="Eliminar"
          arrow
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                color: "white",
                backgroundColor: "#4A96D2",
                fontFamily: "Nunito",
                fontSize: "14px",
                fontWeight: "800",
                lineHeight: "19px",
                letterSpacing: "0em",
                width: "159px",
                paddingTop: "2%",
                textAlign: "center",
              },
              "& .MuiTooltip-arrow": {
                "&::before": {
                  backgroundColor: "#4A96D2",
                },
              },
            },
          }}
        >
          <IconButton
            className="trash"
            size="large"
            sx={{
              marginLeft: "930px",
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
            onClick={() =>
              handleRemoveFields(index, inputFields, setInputFields)
            }
          >
            {/*<img src={icon_trash} height={23} width={23} />*/}
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
      <div className="divBloque">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div className="divInputs">
              {/* <input
                type="text"
                className="inputText"
                id="cuenta"
                name="cuenta"
                value={inputField.cuenta}
                onChange={(event) => handleInputChange(index, event)}
              />
             <label>Saldo disponible: Bs. 4.325,45</label>*/}

              <select
                name="cuenta"
                id="cuenta"
                className="selectText"
                value={inputField.cuenta}
                onChange={(event) =>
                  handleInputChange(index, event, inputFields, setInputFields)
                }
              >
                <option value="default">Cuenta a debitar1</option>
                <option value="0123***3245">
                  Gastos personales 0123***3245
                </option>
                <option value="0123***4087">Ahorros varios 0123***4087</option>
                <option value="0123***3580">Cuenta familiar 0123***3580</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs">
              <select
                name="banco"
                id="banco"
                className="selectText"
                value={inputField.banco}
                onChange={(event) =>
                  handleInputChange(index, event, inputFields, setInputFields)
                }
              >
                <option value="default">Cuenta a acreditar</option>
                <option value="0123***3245">
                  Gastos personales 0123***3245
                </option>
                <option value="0123***4087">Ahorros varios 0123***4087</option>
                <option value="0123***3580">Cuenta familiar 0123***3580</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs"></div>
          </Grid>
          <Grid item xs={6}>
            <div className="divCheckbox">
              <input
                name="checkbox"
                id="checkbox"
                type="checkbox"
                onChange={(event) =>
                  handleInputChange(index, event, inputFields, setInputFields)
                }
              />{" "}
              <label>Beneficiario no registrado</label>
            </div>
          </Grid>

          {inputField.checkbox && (
            <>
              <Grid item xs={6}>
                <div style={{ width: "86px", float: "left" }}>
                  <select
                    className="selectTextBeneficiario"
                    name="tipodoc"
                    id="tipodoc"
                    value={inputField.tipodoc}
                    onChange={(event) =>
                      handleInputChange(
                        index,
                        event,
                        inputFields,
                        setInputFields
                      )
                    }
                  >
                    <option value="default">Tipo</option>
                    <option value="V">V</option>
                    <option value="E">E</option>
                    <option value="P">P</option>
                    <option value="J">J</option>
                  </select>
                </div>

                <div
                  style={{
                    width: "291px",
                    float: "left",
                    marginLeft: "23px",
                  }}
                >
                  <input
                    type="text"
                    className="inputTextBeneficiario"
                    id="numdoc"
                    name="numdoc"
                    placeholder="Documento"
                    onChange={(event) =>
                      handleInputChange(
                        index,
                        event,
                        inputFields,
                        setInputFields
                      )
                    }
                  />
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className="divInputs">
                  <input
                    type="text"
                    className="inputText"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono"
                    onChange={(event) =>
                      handleInputChange(
                        index,
                        event,
                        inputFields,
                        setInputFields
                      )
                    }
                  />
                </div>
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <div className="divInputs">
              <input
                type="text"
                className="inputText"
                id="monto"
                value={inputField.monto}
                name="monto"
                placeholder="Monto(*)"
                onChange={(event) =>
                  handleInputChange(index, event, inputFields, setInputFields)
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs">
              <select
                name="concepto"
                id="concepto"
                className="selectText"
                value={inputField.concepto}
                onChange={(event) =>
                  handleInputChange(index, event, inputFields, setInputFields)
                }
              >
                <option value="default">Concepto(*)</option>
                <option value="Pagos">Pagos</option>
                <option value="Alquiler condominio">Alquiler condominio</option>
                <option value="Varios">Varios</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ marginTop: "15px" }}>
              <Formdate
                handleInputChange={handlePeriodoChange}
                index={index}
                inputFields={inputFields}
                setInputFields={setInputFields}
              />
            </div>
          </Grid>
          {addVisible && (
            <Grid item xs={6}>
              <div style={{ width: "401px", marginTop: "15px" }}>
                <Tooltip
                  title="Agregar transacción"
                  arrow
                  PopperProps={{
                    sx: {
                      "& .MuiTooltip-tooltip": {
                        color: "white",
                        backgroundColor: "#004A72",
                        fontFamily: "Nunito",
                        fontSize: "14px",
                        fontWeight: "800",
                        lineHeight: "19px",
                        letterSpacing: "0em",
                        width: "159px",

                        textAlign: "center",
                        paddingTop: "2%",
                      },
                      "& .MuiTooltip-arrow": {
                        "&::before": {
                          backgroundColor: "#004A72",
                        },
                      },
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    sx={{
                      marginLeft: "350px",
                      position: "unset",
                      color: "white",
                      backgroundColor: "#0067B1",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#004A72",
                        opacity: 0.9,
                      },
                      border: "1px solid #FFFFFF",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                      right: 50,
                      bottom: 50,
                    }}
                    onClick={() => handleAddFields(inputFields, setInputFields)}
                  >
                    <AddIcon></AddIcon>
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
          )}
        </Grid>
      </div>

      <style jsx>{`
        .inputText {
          box-sizing: border-box;
          /* Auto layout */
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 10px 10px 10px 20px;
          gap: 10px;
          width: 400px;
          height: 50px;
          left: 98px;
          top: 251px;
          /* Grises/Blanco */
          background: #ffffff;
          border: 1px solid rgba(123, 123, 123, 0.5);
          border-radius: 4px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          /* identical to box height */
          display: flex;
          align-items: center;

          color: #7b7b7b;
        }

        .divInputs {
          text-align: right;
          width: 401px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
        }

        .divCheckbox {
          text-align: left;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          width: 320px;
          height: 22px;
          left: 597px;
          top: 207px;

          color: #7b7b7b;
        }

        .divBloque {
          width: 862px;
          /* Grises/Blanco */
          background: #ffffff;

          margin: 0 auto;
          margin-top: 10px;
        }

        .divTrash {
          width: 100%;
          float: right;
          text-align: right;
        }

        .selectText {
          box-sizing: border-box;
          /* Auto layout */
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 10px 10px 10px 20px;
          gap: 20px;
          width: 400px;
          height: 50px;
          left: 558px;
          top: 135px;
          /* Grises/Blanco */
          background: #ffffff;
          border: 1px solid rgba(123, 123, 123, 0.5);
          border-radius: 4px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          /* identical to box height */
          display: flex;
          align-items: center;
          color: #7b7b7b;

          /* Arrow */
          appearance: none;
          background-image: url("/forms/rowSelect.svg");
          background-repeat: no-repeat;
          background-position: right 30px top 50%;
          background-size: 0.65rem auto;
        }

        .selectTextBeneficiario {
          box-sizing: border-box;
          /* Auto layout */
          display: flex;
          flex-direction: row;
          align-items: start;
          padding: 10px 10px 10px 20px;
          gap: 20px;
          width: 86px;
          height: 50px;
          left: 96px;
          top: 248px;
          /* Grises/Blanco */
          background: #ffffff;
          border: 1px solid rgba(123, 123, 123, 0.5);
          border-radius: 4px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          /* identical to box height */
          display: flex;
          align-items: center;

          color: #7b7b7b;

          /* Arrow */
          appearance: none;
          background-image: url("/forms/rowSelect.svg");
          background-repeat: no-repeat;
          background-position: right 12px top 50%;
          background-size: 0.65rem auto;
        }

        .inputTextBeneficiario {
          box-sizing: border-box;
          /* Auto layout */
          display: flex;
          flex-direction: row;
          align-items: end;
          padding: 10px 10px 10px 20px;
          gap: 10px;
          height: 50px;
          width: 290px;
          left: 0px;
          top: 0px;
          /* Grises/Blanco */
          background: #ffffff;
          border: 1px solid rgba(123, 123, 123, 0.5);
          border-radius: 4px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          /* identical to box height */
          display: flex;

          color: #7b7b7b;
        }

        .trash img:hover {
          content: url("/_transaction/trash_blanco.svg") !important;
        }
      `}</style>
    </Fragment>
  );
};
