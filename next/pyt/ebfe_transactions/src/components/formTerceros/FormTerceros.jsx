import React, { Fragment, useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Formdate } from "../formDate/FormDate";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon, Stack } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { MyNumberComponent } from "../numberComponent/myNumberComponent";
import { patterns } from "../../utils/genericas";
import formTercerosStyle from "./formTercerosStyle";
import { useCuentaTerceros } from "./cuentaTerceros";
import { publicFetch } from "@/utils/fetch";
import { useSelector, useDispatch } from "react-redux";
import { AlertMessage } from "../alertMessage";
import {
  guardarBeneficiarios,
  guardarPropias,
} from "../../store/storeCuentasTerceros";

const icon_trash = process.env.NEXT_PUBLIC_BASIC_URL + "trash_azul.svg";
export const conceptos = [
  { value: "Pagos", label: "Pagos" },
  { value: "Alquiler condominio", label: "Alquiler condominio" },
  { value: "Varios", label: "Varios" },
  { value: "Otros", label: "Otros" },
];
export const FormTerceros = ({
  handleRemoveFields,
  handleAddFields,
  index,
  addVisible,
  setInputFields,
  inputFields,
  setBtnTranferir,
}) => {
  inputFields[index].index = index;
  const [datosCuentaBeneficiario, setDatosCuentaBeneficiario] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageAlert, setMessageAlert] = useState("error del sistema");
  const [typeMessageAlert, setTypeMessageAlert] = useState("");
  const dispatch = useDispatch();

  const storePropias = useSelector((state) => state.cuentas.propias);
  const storeBeneficiarios = useSelector(
    (state) => state.cuentas.beneficiarios
  );

  const {
    openModal,
    setOpenModal,
    errorNumcuenta,
    setErrorNumcuenta,
    errorNombre,
    setErrorNombre,
    errorTelefono,
    setErrorTelefono,
    errorNumdoc,
    setErrorNumdoc,
    errorAlias,
    setErrorAlias,
    infoIcon,
    handleClose,
    clearDataNoRegistrado,
    clearDataRegistrar,
    infoTasa,
    validacionFormulario,
    setterDataFields,
    cargaCuentasDebitar,
    cuentasPropias,
    filtroCuentas,
    datosBeneficiario,
    listBeneficiarios,
    filterCuentasBeneficiario,
    cuentasBeneficiario,
    saldoAcreditar,
    valoresCuenta,
  } = useCuentaTerceros();

  useEffect(() => {
    validacionFormulario(setBtnTranferir, inputFields, index);
  }, [inputFields]);

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
          typeIdentification: "123456785",
          e2usm2: 1000,
          e2cusc: 1000,
          language: "EN_US",
        });

        // console.log(JSON.stringify(users));

        if (users.data.responseCode == "0000") {
          cargaCuentasDebitar(
            users.data.responseBody,
            users.data.responseBody,
            inputFields[index].currency
          );

          dispatch(guardarPropias(users.data.responseBody));
        } else {
          setMessageAlert("error del sistema");
          setTypeMessageAlert("error");
          setMessageOpen(true);
        }
      } catch (err) {
        console.log(err.response.data);
        setMessageAlert(err.response.data.responseDesc);
        setTypeMessageAlert("error");
        setMessageOpen(true);
      }
    }

    async function fetchDataBeneficiario() {
      try {
        const beneficiarios = await publicFetch.post(`/cuentasBeneficiarios`, {
          company: "1",
          messageId:
            "eS5VMVNTLlUxU1Muenh6QXl4eXggeUV6eHlBLkVFRUN6Qkt4QnpDQ1cxRUl4TTNL",
          username: "JEFEDEVPYT",
          channel: "WEB",
          internalUserName: "PYT",
          e2cusc: 1000,
          e2usm2: 1000,
          language: "EN_US",
        });

        console.log(JSON.stringify(beneficiarios));

        if (beneficiarios.data.responseCode == "0000") {
          datosBeneficiario(beneficiarios.data.responseBody);
          dispatch(guardarBeneficiarios(beneficiarios.data.responseBody));
        } else {
          setMessageAlert("error del sistema");
          setTypeMessageAlert("error");
          setMessageOpen(true);
        }
      } catch (err) {
        console.log(err.response.data);
        setMessageAlert(err.response.data.responseDesc);
        setTypeMessageAlert("error");
        setMessageOpen(true);
      }
    }

    if (storePropias.length == 0) {
      fetchData();
    } else {
      cargaCuentasDebitar(
        JSON.parse(JSON.stringify(storePropias)),
        inputFields[index].currency
      );
    }

    if (storeBeneficiarios.length == 0) {
      fetchDataBeneficiario();
    } else {
      datosBeneficiario(JSON.parse(JSON.stringify(storeBeneficiarios)));
    }
  }, []);

  return (
    <Fragment key={`${"terceros"}~${index}`}>
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
        <Stack direction="row" spacing={1} sx={{ paddingBottom: "10px" }}>
          <Button
            sx={{
              backgroundImage:
                inputFields[index].currency != "Bs"
                  ? `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/defaultBs.svg')`
                  : `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/pressedBs.svg')`,
              backgroundRepeat: "no-repeat",
              ":hover": {
                backgroundImage: `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/hoverBs.svg')`,
              },
            }}
            style={{
              maxWidth: "40px",
              maxHeight: "40px",
              minWidth: "40px",
              minHeight: "40px",
            }}
            onClick={(event) => {
              setterDataFields(
                "currency",
                "Bs",
                null,
                inputFields,
                setInputFields,
                index
              );
              filtroCuentas("BS");

              setterDataFields(
                "tasabcv",
                0,
                null,
                inputFields,
                setInputFields,
                index
              );
            }}
          />

          <Button
            sx={{
              backgroundImage:
                inputFields[index].currency != "USD"
                  ? `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/defaultUSD.svg')`
                  : `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/pressedUSD.svg')`,
              backgroundRepeat: "no-repeat",
              ":hover": {
                backgroundImage: `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/hoverUSD.svg')`,
              },
            }}
            style={{
              maxWidth: "40px",
              maxHeight: "40px",
              minWidth: "40px",
              minHeight: "40px",
            }}
            onClick={(event) => {
              setterDataFields(
                "currency",
                "USD",
                null,
                inputFields,
                setInputFields,
                index
              );

              setterDataFields(
                "tasabcv",
                "0.02869",
                null,
                inputFields,
                setInputFields,
                index
              );

              filtroCuentas("USD");
            }}
          />

          <Button
            sx={{
              backgroundImage:
                inputFields[index].currency != "EUR"
                  ? `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/defaultEUR.svg')`
                  : `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/pressedEUR.svg')`,
              backgroundRepeat: "no-repeat",
              ":hover": {
                backgroundImage: `url('${process.env.NEXT_PUBLIC_BASIC_URL}moneda/hoverEUR.svg')`,
              },
            }}
            style={{
              maxWidth: "40px",
              maxHeight: "40px",
              minWidth: "40px",
              minHeight: "40px",
            }}
            onClick={(event) => {
              setterDataFields(
                "currency",
                "EUR",
                null,
                inputFields,
                setInputFields,
                index
              );

              setterDataFields(
                "tasabcv",
                "0.07618",
                null,
                inputFields,
                setInputFields,
                index
              );

              filtroCuentas("EUR");
            }}
          />
        </Stack>

        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="cuenta-label">Cuenta a debitar</InputLabel>
                <Select
                  labelId="cuenta-label"
                  label="Cuenta a debitar"
                  defaultValue=""
                  value={inputFields[index].cuentaDebitar}
                  name="cuentaDebitar"
                  id="cuentaDebitar"
                  onChange={(event) => {
                    setterDataFields(
                      "cuentaDebitar",
                      event.target.value,
                      null,
                      inputFields,
                      setInputFields,
                      index
                    );
                    valoresCuenta(
                      event.target.value,
                      "cuentaDebitar",
                      index,
                      inputFields,
                      setInputFields
                    );
                  }}
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

              {saldoAcreditar != "" && (
                <label className="lblInfoSaldo">
                  Saldo disponible: {saldoAcreditar}
                </label>
              )}
            </div>
          </Grid>

          {!inputFields[index].noregistrado && (
            <>
              <Grid item xs={6}>
                <div className="divInputs">
                  <FormControl fullWidth size="small">
                    <InputLabel id="cuenta-label1">Beneficiarios</InputLabel>
                    <Select
                      labelId="cuenta-label1"
                      label="Beneficiarios"
                      value={inputFields[index].beneficiario}
                      name="beneficiario"
                      id="beneficiario"
                      onChange={(event) => {
                        setDatosCuentaBeneficiario("");
                        setterDataFields(
                          "beneficiarioCuenta",
                          "",
                          null,
                          inputFields,
                          setInputFields,
                          index
                        );
                        setterDataFields(
                          "beneficiarioBanco",
                          "",
                          null,
                          inputFields,
                          setInputFields,
                          index
                        );
                        setterDataFields(
                          "beneficiario",
                          event.target.value,
                          null,
                          inputFields,
                          setInputFields,
                          index
                        );

                        setterDataFields(
                          "beneficiarioCodBanco",
                          "",
                          null,
                          inputFields,
                          setInputFields,
                          index
                        );

                        setterDataFields(
                          "beneficiarioTipoCuenta",
                          "",
                          null,
                          inputFields,
                          setInputFields,
                          index
                        );

                        filterCuentasBeneficiario(event.target.value);
                        if (event.target.value != "") {
                          setOpenModal(true);
                        }
                      }}
                    >
                      <MenuItem key={0} value="">
                        <em>Seleccionar</em>
                      </MenuItem>

                      {listBeneficiarios.map((cuenta, index) => {
                        return (
                          <MenuItem key={index} value={cuenta}>
                            {cuenta.split(":")[0]}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <label className="lblInfoSaldo">
                    {datosCuentaBeneficiario != "" && (
                      <label className="lblInfoSaldo">
                        {datosCuentaBeneficiario}
                      </label>
                    )}
                  </label>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="divInputs"></div>
              </Grid>
            </>
          )}

          <Grid item xs={6}>
            <div
              className="divCheckbox"
              style={{
                marginTop: inputFields[index].noregistrado ? "18px" : "0px",
              }}
            >
              <Checkbox
                defaultValue={false}
                style={{ padding: 0 }}
                checked={inputFields[index].noregistrado}
                onChange={(event) => {
                  setterDataFields(
                    "noregistrado",
                    event.target.checked,
                    null,
                    inputFields,
                    setInputFields,
                    index
                  );
                  clearDataNoRegistrado(inputFields, setInputFields, index);
                }}
                checkedIcon={
                  <Icon>
                    <img
                      height={"20px"}
                      src={
                        process.env.NEXT_PUBLIC_BASIC_URL + "checkSelect.svg"
                      }
                    />
                  </Icon>
                }
                icon={
                  <Icon>
                    <img
                      height={"20px"}
                      src={process.env.NEXT_PUBLIC_BASIC_URL + "check.svg"}
                    />
                  </Icon>
                }
              />

              <label>Beneficiario no registrado</label>
            </div>
          </Grid>

          {inputFields[index].noregistrado && (
            <>
              <Grid item xs={6}>
                <div className="divInputs">
                  <FormControl fullWidth size="small">
                    <InputLabel id="labeltipoInstrumento">
                      Tipo de instrumento
                    </InputLabel>
                    <Select
                      labelId="labeltipoInstrumento"
                      id="tipoInstrumento"
                      value={inputFields[index].instrumento.tipo}
                      label="Tipo de instrumento"
                      name="tipoInstrumento"
                      onChange={(event) => {
                        setterDataFields(
                          "instrumento",
                          event.target.value,
                          "tipo",
                          inputFields,
                          setInputFields,
                          index
                        );
                      }}
                    >
                      <MenuItem key={0} value="">
                        <em>Seleccionar</em>
                      </MenuItem>
                      <MenuItem value={"cuenta"}>Cuenta</MenuItem>
                      <MenuItem value={"telefono"}>Telefono</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              {(() => {
                switch (inputFields[index].instrumento.tipo) {
                  case "telefono":
                    return (
                      <>
                        <Grid item xs={6}>
                          <div className="divInputs">
                            <TextField
                              id="outlined-basic"
                              label="Telefono"
                              variant="outlined"
                              fullWidth={true}
                              size="small"
                              value={inputFields[index].instrumento.telefono}
                              helperText={errorTelefono} // error message
                              error={!!errorTelefono} // set to true to change the border/helperText color to red
                              onChange={(event) => {
                                const newValue = event.target.value;

                                if (
                                  newValue == "" ||
                                  (newValue.match(patterns.phone) &&
                                    newValue.length == 11)
                                ) {
                                  setErrorTelefono("");
                                } else {
                                  setErrorTelefono(
                                    "Debes introduccir 11 digitos"
                                  );
                                }

                                setterDataFields(
                                  "instrumento",
                                  event.target.value,
                                  "telefono",
                                  inputFields,
                                  setInputFields,
                                  index
                                );
                              }}
                            />
                          </div>
                        </Grid>

                        <Grid item xs={6}>
                          <div className="divInputs">
                            <FormControl fullWidth size="small">
                              <InputLabel id="lbancodestino">
                                Banco destino
                              </InputLabel>
                              <Select
                                labelId="lbancodestino"
                                label="Banco destino"
                                name="bancodestino"
                                id="bancodestino"
                                value={
                                  inputFields[index].instrumento.bancodestino
                                }
                                onChange={(event) => {
                                  setterDataFields(
                                    "instrumento",
                                    event.target.value,
                                    "bancodestino",
                                    inputFields,
                                    setInputFields,
                                    index
                                  );
                                }}
                              >
                                <MenuItem value="">
                                  <em>Seleccionar</em>
                                </MenuItem>
                                <MenuItem value={"cuenta"}>Cuenta</MenuItem>
                                <MenuItem value={"telefono"}>Telefono</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div style={{ width: "86px", float: "left" }}>
                            <FormControl fullWidth size="small">
                              <InputLabel id="tipodoc-label">Tipo</InputLabel>
                              <Select
                                labelId="tipodoc-label"
                                label="Tipo"
                                name="tipodoc"
                                id="tipodoc"
                                value={inputFields[index].instrumento.tipodoc}
                                onChange={(event) => {
                                  setterDataFields(
                                    "instrumento",
                                    event.target.value,
                                    "tipodoc",
                                    inputFields,
                                    setInputFields,
                                    index
                                  );
                                }}
                              >
                                <MenuItem key={0} value="">
                                  <em>Seleccionar</em>
                                </MenuItem>
                                <MenuItem value={"cuenta"}>Cuenta</MenuItem>
                                <MenuItem value={"telefono"}>Telefono</MenuItem>
                              </Select>
                            </FormControl>
                          </div>

                          <div
                            style={{
                              width: "291px",
                              float: "left",
                              marginLeft: "23px",
                            }}
                          >
                            <TextField
                              id="numdoc"
                              label="Documento"
                              variant="outlined"
                              fullWidth={true}
                              size="small"
                              name="numdoc"
                              value={inputFields[index].instrumento.numdoc}
                              error={!!errorNumdoc} // set to true to change the border/helperText color to red
                              helperText={errorNumdoc} // error message
                              onChange={(event) => {
                                const newValue = event.target.value;

                                if (
                                  newValue == "" ||
                                  newValue.match(patterns.numDoc)
                                ) {
                                  setErrorNumdoc("");
                                } else {
                                  setErrorNumdoc(
                                    "Debes introduccir solo digitos"
                                  );
                                }

                                setterDataFields(
                                  "instrumento",
                                  event.target.value,
                                  "numdoc",
                                  inputFields,
                                  setInputFields,
                                  index
                                );
                              }}
                            />
                          </div>
                        </Grid>

                        <Grid item xs={6}>
                          <div className="divInputs">
                            <TextField
                              id="nombre"
                              label="Nombre"
                              variant="outlined"
                              fullWidth={true}
                              size="small"
                              name="nombre"
                              value={inputFields[index].instrumento.nombre}
                              helperText={errorNombre} // error message
                              error={!!errorNombre} // set to true to change the border/helperText color to red
                              onChange={(event) => {
                                const newValue = event.target.value;

                                if (
                                  newValue == "" ||
                                  newValue.match(patterns.name)
                                ) {
                                  setErrorNombre("");
                                } else {
                                  setErrorNombre(
                                    "No colocar caracteres especiales"
                                  );
                                }

                                setterDataFields(
                                  "instrumento",
                                  event.target.value,
                                  "nombre",
                                  inputFields,
                                  setInputFields,
                                  index
                                );
                              }}
                            />
                          </div>
                        </Grid>
                      </>
                    );
                  case "cuenta":
                    return (
                      <Grid item xs={6}>
                        <div className="divInputs">
                          <TextField
                            id="numcuenta"
                            label="Numero de cuenta(*)"
                            variant="outlined"
                            fullWidth={true}
                            size="small"
                            value={inputFields[index].instrumento.numcuenta}
                            helperText={errorNumcuenta} // error message
                            error={!!errorNumcuenta} // set to true to change the border/helperText color to red
                            onChange={(event) => {
                              const newValue = event.target.value;

                              if (
                                newValue == "" ||
                                (newValue.match(patterns.phone) &&
                                  newValue.length >= 11)
                              ) {
                                setErrorNumcuenta("");
                              } else {
                                setErrorNumcuenta(
                                  "Debes introduccir mínimo 11 digitos"
                                );
                              }

                              setterDataFields(
                                "instrumento",
                                event.target.value,
                                "numcuenta",
                                inputFields,
                                setInputFields,
                                index
                              );
                            }}
                          />
                        </div>
                      </Grid>
                    );

                  default:
                    return <Grid item xs={6}></Grid>;
                }
              })()}
            </>
          )}
          <Grid item xs={6}>
            <div className="divInputs">
              <MyNumberComponent
                setInputFields={setInputFields}
                inputFields={inputFields}
                index={index}
                currency={inputFields[index].currency}
                id={"montobs"}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="cuenta-label3">Concepto(*)</InputLabel>
                <Select
                  labelId="cuenta-label3"
                  label="Concepto"
                  id="concepto"
                  name="concepto"
                  value={inputFields[index].concepto}
                  onChange={(event) => {
                    setterDataFields(
                      "concepto",
                      event.target.value,
                      null,
                      inputFields,
                      setInputFields,
                      index
                    );
                  }}
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  <MenuItem value={"cuenta"}>Cuenta</MenuItem>
                  <MenuItem value={"telefono"}>Telefono</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>

        {inputFields[index].noregistrado && (
          <>
            <Grid
              sx={{ marginTop: "10px" }}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <div className="divInputs">
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultValue={false}
                        checked={inputFields[index].registrar}
                        onChange={(event) => {
                          setterDataFields(
                            "registrar",
                            event.target.checked,
                            null,
                            inputFields,
                            setInputFields,
                            index
                          );
                          clearDataRegistrar(
                            inputFields,
                            setInputFields,
                            index
                          );
                        }}
                        checkedIcon={
                          <Icon>
                            <img
                              style={{ width: "24px", height: "20px" }}
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
                              style={{ width: "24px", height: "20px" }}
                              src={
                                process.env.NEXT_PUBLIC_BASIC_URL + "check.svg"
                              }
                            />
                          </Icon>
                        }
                      />
                    }
                    label="Registrar"
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="divInputs"></div>
              </Grid>

              {inputFields[index].registrar && (
                <>
                  <Grid item xs={6}>
                    <div className="divInputs">
                      <FormControl fullWidth size="small">
                        <InputLabel id="tregistro">Tipo de registro</InputLabel>
                        <Select
                          labelId="tregistro"
                          label="Tipo de registro"
                          id="registrotipo"
                          name="registrotipo"
                          value={inputFields[index].registro.tipo}
                          onChange={(event) => {
                            setterDataFields(
                              "registro",
                              event.target.value,
                              "tipo",
                              inputFields,
                              setInputFields,
                              index
                            );

                            setterDataFields(
                              "registro",
                              "",
                              "alias",
                              inputFields,
                              setInputFields,
                              index
                            );

                            setterDataFields(
                              "registro",
                              "",
                              "beneficiario",
                              inputFields,
                              setInputFields,
                              index
                            );
                          }}
                        >
                          <MenuItem key={0} value="">
                            <em>Seleccionar</em>
                          </MenuItem>
                          <MenuItem value="nuevo">Beneficiario Nuevo</MenuItem>
                          <MenuItem value="existente">
                            Beneficiario existente
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  {(() => {
                    switch (inputFields[index].registro.tipo) {
                      case "nuevo":
                        return (
                          <Grid item xs={6}>
                            <div className="divInputs">
                              <TextField
                                id="alias"
                                name="alias"
                                label="Alias"
                                variant="outlined"
                                fullWidth={true}
                                size="small"
                                value={inputFields[index].instrumento.alias}
                                helperText={errorAlias} // error message
                                error={!!errorAlias} // set to true to change the border/helperText color to red
                                onChange={(event) => {
                                  const newValue = event.target.value;

                                  if (
                                    newValue == "" ||
                                    newValue.match(patterns.usuarioUnico)
                                  ) {
                                    setErrorAlias("");
                                  } else {
                                    setErrorAlias(
                                      "No colocar caracteres especiales"
                                    );
                                  }

                                  setterDataFields(
                                    "registro",
                                    event.target.value,
                                    "alias",
                                    inputFields,
                                    setInputFields,
                                    index
                                  );
                                }}
                              />
                            </div>
                          </Grid>
                        );
                      case "existente":
                        return (
                          <Grid item xs={6}>
                            <div className="divInputs">
                              <FormControl fullWidth size="small">
                                <InputLabel id="tregistrobenefi">
                                  Beneficiarios
                                </InputLabel>
                                <Select
                                  labelId="tregistrobenefi"
                                  label="Beneficiarios"
                                  id="tregistrobene"
                                  name="tregistrobene"
                                  value={
                                    inputFields[index].registro.beneficiario
                                  }
                                  onChange={(event) => {
                                    setterDataFields(
                                      "registro",
                                      event.target.value,
                                      "beneficiario",
                                      inputFields,
                                      setInputFields,
                                      index
                                    );
                                  }}
                                >
                                  <MenuItem key={0} value="">
                                    <em>Seleccionar</em>
                                  </MenuItem>
                                  {listBeneficiarios.map((cuenta, index) => {
                                    return (
                                      <MenuItem key={index} value={cuenta}>
                                        {cuenta.split(":")[0]}
                                      </MenuItem>
                                    );
                                  })}
                                </Select>
                              </FormControl>
                            </div>
                          </Grid>
                        );

                      default:
                        return <></>;
                    }
                  })()}
                </>
              )}
            </Grid>
          </>
        )}

        {inputFields[index].currency != "Bs" && (
          <Grid
            sx={{ marginTop: "5px" }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Stack direction="column" spacing={0} sx={{ paddingTop: "10px" }}>
                <label className={"lbltasa"}>
                  Tasa BCV: Bs. {inputFields[index].tasabcv}
                </label>
                <label className={"lbltasa"}>
                  Monto a recibir: Bs. {inputFields[index].montorecibir}
                </label>
              </Stack>
            </Grid>

            <Grid item xs={6}></Grid>
          </Grid>
        )}
        <Grid
          sx={{ marginTop: "10px" }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
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
                          setterDataFields(
                            "programar",
                            event.target.checked,
                            null,
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
                    onClick={() =>
                      handleAddFields(inputFields, setInputFields, "terceros")
                    }
                  >
                    <AddIcon></AddIcon>
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
          )}
        </Grid>
      </div>

      <Dialog
        style={{ padding: "0px 0px 0px 0px" }}
        maxWidth={"350px"}
        open={openModal}
        onClose={handleClose}
        PaperProps={{ sx: { borderRadius: "8px" } }}
      >
        <DialogTitle style={{ padding: "0px 0px 0px 0px" }}>
          <div
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#E9E9E9",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
            <Stack direction="row" spacing={2}>
              <div style={{ width: "300px", textAlign: "start" }}>
                <label className={"lblNombre"}>Registros</label>
              </div>
              <div
                style={{ paddingTop: "5px" }}
                onClick={(event) => {
                  setOpenModal(false);
                }}
              >
                <img
                  style={{ height: "24px", width: "24px" }}
                  src={process.env.NEXT_PUBLIC_BASIC_URL + "Cerrar.svg"}
                />
              </div>
            </Stack>
          </div>
        </DialogTitle>
        <DialogContent>
          {" "}
          <Stack sx={{ paddingTop: "10px" }} direction="column" spacing={2}>
            <div style={{ textAlign: "center" }}>
              <label className={"lblNombre"}>
                Selecciona el instrumento a abonar
              </label>
            </div>
            <div style={{ paddingTop: "5px" }}>
              <FormControl fullWidth size="small">
                <InputLabel id="labelrbene">
                  Registro del beneficiario
                </InputLabel>
                <Select
                  labelId="labelrbene"
                  id="beneficiarioCuenta"
                  label="Registro del beneficiario"
                  name="beneficiarioCuenta"
                  value={inputFields[index].beneficiarioCuenta}
                  onChange={(event) => {
                    setDatosCuentaBeneficiario("");
                    let cuenta = cuentasBeneficiario.filter(function (el) {
                      return el.numberAccount == event.target.value;
                    });
                    if (cuenta.length > 0) {
                      setterDataFields(
                        "beneficiarioCuenta",
                        cuenta[0].numberAccount,
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );
                      setterDataFields(
                        "beneficiarioBanco",
                        cuenta[0].nameBank,
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );

                      setterDataFields(
                        "descuentaAcreditar",
                        cuenta[0].nameBank + " " + cuenta[0].numberAccount,
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );

                      setDatosCuentaBeneficiario(
                        cuenta[0].nameBank + " " + cuenta[0].numberAccount
                      );

                      setterDataFields(
                        "beneficiarioTipoCuenta",
                        cuenta[0].typeAccount,
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );
                      setterDataFields(
                        "beneficiarioCodBanco",
                        cuenta[0].codeBank,
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );
                    } else {
                      setterDataFields(
                        "beneficiarioCuenta",
                        "",
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );
                      setterDataFields(
                        "beneficiarioBanco",
                        "",
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );

                      setterDataFields(
                        "beneficiarioTipoCuenta",
                        "",
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );
                      setterDataFields(
                        "beneficiarioCodBanco",
                        "",
                        null,
                        inputFields,
                        setInputFields,
                        index
                      );
                    }

                    setOpenModal(false);
                  }}
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>

                  {cuentasBeneficiario.map((cuenta, index) => {
                    return (
                      <MenuItem key={index} value={cuenta.numberAccount}>
                        {cuenta.nameBank + " " + cuenta.numberAccount}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Stack>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}></DialogActions>
      </Dialog>
      <AlertMessage
        message={messageAlert}
        typeMessage={typeMessageAlert}
        open={messageOpen}
        setOpen={setMessageOpen}
      />
      <style jsx>{formTercerosStyle}</style>
    </Fragment>
  );
};
