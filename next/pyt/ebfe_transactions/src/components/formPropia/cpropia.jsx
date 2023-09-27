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
import { publicFetch } from "@/utils/fetch";
import cpropiaStyle from "./cpropiaStyle";
import {
  conceptos,
  switchHandler,
  handleChangeUsd,
  filtroCuentasAcreditar,
  valoresCuenta,
  infoIcon,
  infoTasa,
  cargaCuentasDebitar,
} from "./cuentaPropias";

export const FormPropia = ({
  inputField,
  index,
  setInputFields,
  inputFields,
  setBtnTranferir,
}) => {
  const [cuentasPropias, setCuentasPropias] = useState([]);
  const [cuentasAcreditar, setCuentasAcreditar] = useState([]);
  const [cuentasUser, setCuentasUser] = useState([]);
  const [checked, setChecked] = useState(inputField.programar);
  const [checkedUsd, setCheckedUsd] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await publicFetch.post(`/cuentasPropias`, {
          company: "1",
          messageId:
            "OC51QnNzLnVCc3MuOTc5YTdnN2QgOGQ5Y2E3LmFiY2NhZm1kbmNlcWF3ZGRkRENi",
          username: "JEFEDEVPYT",
          channel: "WEB",
          internalUserName: "PYT",
          identification: "CED",
          typeIdentification: "12345678",
          e2usm2: 1000,
          e2cusc: 1000,
        });
        console.log(JSON.stringify(users.data.responseCode));
        cargaCuentasDebitar(
          setCuentasPropias,
          users.data.responseBody,
          setCuentasUser
        );
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setBtnTranferir(true);

    let valores = [...inputFields];

    if (
      valores[index].cuentaDebitar != "" &&
      valores[index].cuentaAcreditar != "" &&
      valores[index].monto != "" &&
      valores[index].concepto != ""
    ) {
      if (valores[index].programar == true) {
        if (
          valores[index].programa.frecuencia != "" &&
          valores[index].programa.anio != "" &&
          valores[index].programa.mes != "" &&
          valores[index].programa.dia != ""
        ) {
          if (valores[index].programa.frecuencia == "Una vez") {
            setBtnTranferir(false);
          } else {
            if (valores[index].programa.repetir != "") {
              setBtnTranferir(false);
            }
          }
        }
      } else {
        setBtnTranferir(false);
      }
    }
  }, [inputFields]);

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
                  id="cuentaDebitar"
                  value={inputField.cuentaDebitar}
                  label="Cuenta a debitar"
                  onChange={(event) => {
                    valoresCuenta(
                      event.target.value,
                      "cuentaDebitar",
                      inputFields,
                      setInputFields,
                      index,
                      cuentasUser
                    );
                    filtroCuentasAcreditar(
                      event.target.value,
                      index,
                      setCuentasAcreditar,
                      setInputFields,
                      inputFields,
                      cuentasUser
                    );
                  }}
                  name="cuentaDebitar"
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>

                  {cuentasPropias.map((cuenta, index) => {
                    return (
                      <MenuItem key={index} value={cuenta.numberAccount}>
                        {cuenta.descriptionAccount + " " + cuenta.numberMask}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <label className="lblInfoSaldo">
                {" "}
                Saldo disponible: Bs 45.454.545
              </label>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="acreditar-label">Cuenta a acreditar</InputLabel>
                <Select
                  labelId="acreditar-label"
                  id="cuentaAcreditar"
                  value={inputField.cuentaAcreditar}
                  label="Cuenta a acreditar"
                  onChange={(event) => {
                    valoresCuenta(
                      event.target.value,
                      "cuentaAcreditar",
                      inputFields,
                      setInputFields,
                      index,
                      cuentasUser
                    );
                  }}
                  name="cuentaAcreditar"
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>

                  {cuentasAcreditar.map((cuenta, index) => {
                    return (
                      <MenuItem key={index} value={cuenta.numberAccount}>
                        {cuenta.descriptionAccount + " " + cuenta.numberMask}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <label className="lblInfoSaldo">
                {" "}
                Saldo disponible: Bs 45.454.545
              </label>
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
                  id={"montobs"}
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
                    valoresCuenta(
                      event.target.value,
                      "concepto",
                      inputFields,
                      setInputFields,
                      index,
                      cuentasUser
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
                        checked={inputFields[index].programar}
                        onChange={(event) => {
                          switchHandler(
                            event,
                            setChecked,
                            inputFields,
                            setInputFields,
                            index
                          );
                        }}
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
                      src={
                        process.env.NEXT_PUBLIC_BASIC_URL + "infoDefault.svg"
                      }
                    />
                  </Tooltip>
                </Stack>
              </div>
              {inputFields[index].programar && (
                <div style={{ marginTop: "15px" }}>
                  <Formdate
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
            {inputFields[index].programar && (
              <div style={{ marginTop: "15px" }}>
                <div>
                  <Stack direction="row" spacing={7}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={inputFields[index].monedaUsd}
                          onChange={(event) => {
                            handleChangeUsd(
                              event,
                              index,
                              inputFields,
                              setInputFields,
                              setCheckedUsd
                            );
                          }}
                          sx={{ borderBlockColor: "red" }}
                          checkedIcon={
                            <Icon>
                              <img
                                src={
                                  process.env.NEXT_PUBLIC_BASIC_URL +
                                  "checkSelect.svg"
                                }
                              />
                            </Icon>
                          }
                          icon={
                            <Icon>
                              <img
                                src={
                                  process.env.NEXT_PUBLIC_BASIC_URL +
                                  "check.svg"
                                }
                              />
                            </Icon>
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
                        src={
                          process.env.NEXT_PUBLIC_BASIC_URL + "infoDefault.svg"
                        }
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
                        id={"montousd"}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      <style jsx>{cpropiaStyle}</style>
    </Fragment>
  );
};
