import Reac, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { Formdate } from "../formDate/FormDate";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

import icon_trash from "../assets/trash_azul.svg";



export const DynamicForm = ({
  handleInputChange,
  handleRemoveFields,
  handlePeriodoChange,
  handleAddFields,
  inputField,
  index,
}) => {


  return (
    <Fragment key={`${inputField}~${index}`}>
      {index > 0 && (
        <IconButton  className="trash"
          size="large"
          sx={{
            marginLeft: "930px",
            position: "unset",
            color: "#4A96D2",
            backgroundColor: "white",
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
          onClick={() => handleRemoveFields(index)}
        >
          <img    src={icon_trash} height={23} width={23}/>
        </IconButton>
      )}
      <div className="divBloque">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div className="divInputs">
              <input
                type="text"
                className="inputText"
                id="cuenta"
                name="cuenta"
                value={inputField.cuenta}
                onChange={(event) => handleInputChange(index, event)}
              />
              <label>Saldo disponible: Bs. 4.325,45</label>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs">
              <select
                name="banco"
                id="banco"
                className="selectText"
                value={inputField.banco}
                onChange={(event) => handleInputChange(index, event)}
              >
                <option value="none" disabled selected>
                  Pago frecuente
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
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
                onChange={(event) => handleInputChange(index, event)}
              />{" "}
              <label>Beneficiario no registrado</label>
            </div>
          </Grid>

          {inputField.checkbox && (
            <>
              <Grid item xs={6}>
                <div style={{ width: "86px", float: "left" }}>
                  <select
                    defaultValue={"none"}
                    className="selectTextBeneficiario"
                    name="tipodoc"
                    id="tipodoc"
                    value={inputField.tipodoc}
                    onChange={(event) => handleInputChange(index, event)}
                  >
                    <option value="none" disabled>
                      Tipo
                    </option>
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
                    onChange={(event) => handleInputChange(index, event)}
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
                    onChange={(event) => handleInputChange(index, event)}
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
                name="monto"
                placeholder="Monto(*)"
                onChange={(event) => handleInputChange(index, event)}
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
                onChange={(event) => handleInputChange(index, event)}
              >
                <option value="none" disabled selected>
                  Concepto(*)
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <Formdate handleInputChange={handlePeriodoChange} index={index} />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ width: "401px" }}>
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
                      height: "47px",
                      textAlign: "center",
                      paddingTop: "9%",
                    },
                    "& .MuiTooltip-arrow": {                       
                      "&::before": {
                        backgroundColor: "#004A72",
                      },
                    }
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
                  onClick={() => handleAddFields()}
                >
                   <AddIcon></AddIcon>
                </IconButton>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </div>

      <button
        className="btn btn-link"
        type="button"
        disabled={index === 0}
        onClick={() => handleRemoveFields(index)}
      >
        -
      </button>
    </Fragment>
  );
};
