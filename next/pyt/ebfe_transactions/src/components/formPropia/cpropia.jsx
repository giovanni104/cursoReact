import React, { Fragment, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Formdate } from "../formDate/FormDate";
import Tooltip from "@mui/material/Tooltip";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { MyNumberComponent } from "../numberComponent/myNumberComponent";
import { Icon, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
export const FormPropia = ({
  handleInputChange,
  handlePeriodoChange,
  inputField,
  index,
  setInputFields,
  inputFields,
}) => {
  const [cuentasPropias, setCuentasPropias] = useState([]);
  const [cuentasAcreditar, setCuentasAcreditar] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checkedUsd, setCheckedUsd] = React.useState(false);

  const conceptos = [
    { value: "Pagos", label: "Pagos" },
    { value: "Alquiler condominio", label: "Alquiler condominio" },
    { value: "Varios", label: "Varios" },
    { value: "Otros", label: "Otros" },
  ];

  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeUsd = (event) => {
    let valores = [...inputFields];
    valores[index].monto = "";
    console.log(valores);
    setInputFields(valores);
    setCheckedUsd(event.target.checked);
  };

  const filtroCuentasAcreditar = (valor, name, index) => {
    const cuentas = cuentasPropias.filter(function (el) {
      return el.value != valor;
    });
    setCuentasAcreditar(cuentas);
    let valores = [...inputFields];
    valores[index].banco = "";
    console.log(valores);
    setInputFields(valores);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await axios.get("/_transaction/api/propias");
        setCuentasPropias(users.data);
      } catch (err) {
        if (err.response) {
          // The client was given an error response (5xx, 4xx)
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The client never received a response, and the request was never left
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      }
    }
    fetchData();
  }, []);

  const infoIcon = `
  Programa operaciones con una fecha de
  ejecución futura. Además, podrás
  asignar una frecuencia y cantidad de 
  repeticiones.
  `;

  const infoTasa = `
  La operación será procesada en
  Bolívares según la tasa BCV de
  la fecha valor.
  `;

  return (
    <Fragment key={`${inputField}~${index}`}>
      <div className="divBloque">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="cuenta-label">Cuenta a debitar</InputLabel>
                <Select
                  labelId="cuenta-label"
                  id="cuenta"
                  value={inputField.cuenta}
                  label="Cuenta a debitar"
                  onChange={(event) => {
                    handleInputChange(
                      index,
                      event,
                      inputFields,
                      setInputFields
                    );

                    filtroCuentasAcreditar(
                      event.target.value,
                      event.target.name,
                      index
                    );
                  }}
                  name="cuenta"
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>

                  {cuentasPropias.map((cuenta, index) => {
                    return (
                      <MenuItem key={index} value={cuenta.value}>
                        {cuenta.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="banco-label">Cuenta a acreditar</InputLabel>
                <Select
                  labelId="banco-label"
                  id="banco"
                  value={inputField.banco}
                  label="Cuenta a acreditar"
                  onChange={(event) => {
                    handleInputChange(
                      index,
                      event,
                      inputFields,
                      setInputFields
                    );
                  }}
                  name="banco"
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>

                  {cuentasAcreditar.map((cuenta, index) => {
                    return (
                      <MenuItem key={index} value={cuenta.value}>
                        {cuenta.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>

          {!checkedUsd && (
            <Grid item xs={6}>
              <div className="divInputs">
                <MyNumberComponent
                  setInputFields={setInputFields}
                  inputFields={inputFields}
                  index={index}
                  inputField={inputField}
                  currency={"Bs"}
                />
              </div>
            </Grid>
          )}

          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="concepto-label">Concepto</InputLabel>
                <Select
                  labelId="banco-label"
                  id="concepto"
                  value={inputField.concepto}
                  label="Concepto"
                  onChange={(event) => {
                    handleInputChange(
                      index,
                      event,
                      inputFields,
                      setInputFields
                    );
                  }}
                  name="concepto"
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>

                  {conceptos.map((concepto, index) => {
                    return (
                      <MenuItem key={index} value={concepto.value}>
                        {concepto.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>

          {checkedUsd && <Grid item xs={6}></Grid>}

          <Grid item xs={6}>
            <div style={{ marginTop: "15px" }}>
              <div>
                <Stack direction="row" spacing={30}>
                  <FormControlLabel
                    control={
                      <Switch
                        size="medium"
                        checked={checked}
                        onChange={switchHandler}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label="Programar"
                  />

                  <Tooltip
                    title={infoIcon}
                    placement="right"
                    arrow
                    PopperProps={{
                      sx: {
                        "& .MuiTooltip-tooltip": {
                          color: "white",
                          backgroundColor: "#4A96D2",
                          fontFamily: "Nunito",
                          fontSize: "14px",
                          width: "240px",
                          textAlign: "justify",
                          paddingTop: "2%",
                        },
                        "& .MuiTooltip-arrow": {
                          "&::before": {
                            backgroundColor: "#4A96D2",
                          },
                        },
                      },
                    }}
                  >
                    <img
                      className="infoIcon"
                      style={{ height: "24px", width: "24px" }}
                      src={"/_transaction/infoDefault.svg"}
                    />
                  </Tooltip>
                </Stack>
              </div>
              {checked && (
                <div style={{ marginTop: "15px" }}>
                  <Formdate
                    handleInputChange={handlePeriodoChange}
                    index={index}
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                  />
                </div>
              )}
            </div>
          </Grid>
          <Grid item xs={6}></Grid>

          <Grid item xs={6}>
            {checked && (
              <div style={{ marginTop: "15px" }}>
                <div>
                  <Stack direction="row" spacing={7}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedUsd}
                          onChange={handleChangeUsd}
                          sx={{ borderBlockColor: "red" }}
                          checkedIcon={
                            <Icon>
                              {<img src="/_transaction/checkSelect.svg" />}
                            </Icon>
                          }
                          icon={
                            <Icon>{<img src="/_transaction/check.svg" />}</Icon>
                          }
                        />
                      }
                      label="Configurar monto en USD según tasa BCV"
                    />

                    <Tooltip
                      title={infoTasa}
                      placement="right"
                      arrow
                      PopperProps={{
                        sx: {
                          "& .MuiTooltip-tooltip": {
                            color: "white",
                            backgroundColor: "#4A96D2",
                            fontFamily: "Nunito",
                            fontSize: "14px",
                            width: "240px",
                            textAlign: "justify",
                            paddingTop: "2%",
                          },
                          "& .MuiTooltip-arrow": {
                            "&::before": {
                              backgroundColor: "#4A96D2",
                            },
                          },
                        },
                      }}
                    >
                      <img
                        className="infoIcon"
                        style={{ height: "24px", width: "24px" }}
                        src={"/_transaction/infoDefault.svg"}
                      />
                    </Tooltip>
                  </Stack>
                </div>

                {checkedUsd && (
                  <div style={{ marginTop: "15px" }}>
                    <div className="divInputs">
                      <MyNumberComponent
                        setInputFields={setInputFields}
                        inputFields={inputFields}
                        index={index}
                        inputField={inputField}
                        currency={"USD"}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      <style jsx>{`
        .divInputs {
          width: 401px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
        }

        .divBloque {
          width: 862px;
          /* Grises/Blanco */
          background: #ffffff;

          margin: 0 auto;
          margin-top: 10px;
        }
      `}</style>
    </Fragment>
  );
};
