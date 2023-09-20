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

import { MyNumberComponent } from "../numberComponent/myNumberComponent";
//import "../../styles/formPay.module.css";

const icon_trash = process.env.NEXT_PUBLIC_BASIC_URL + "trash_azul.svg";
export const conceptos = [
  { value: "Pagos", label: "Pagos" },
  { value: "Alquiler condominio", label: "Alquiler condominio" },
  { value: "Varios", label: "Varios" },
  { value: "Otros", label: "Otros" },
];
export const FormTerceros = ({
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
  const [checked, setChecked] = useState(inputField.programar);
  const [checkedUsd, setCheckedUsd] = React.useState(false);
  const [instrumento, setInstrumento] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [registrar, setRegistrar] = React.useState(false);
  const [tipoRegistro, setTipoRegistro] = React.useState("");

  const switchHandler = (
    event,
    setChecked,
    inputFields,
    setInputFields,
    index
  ) => {
    setChecked(event.target.checked);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
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

      <Stack direction="row" spacing={2}>
        <div className="divCurrency">
          <img
            className="imgCurrency"
            src={process.env.NEXT_PUBLIC_BASIC_URL + "moneda/bolivarAzul.svg"}
          />
        </div>
      </Stack>

      <div className="divBloque">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="cuenta-label">Cuenta a debitar</InputLabel>
                <Select
                  labelId="cuenta-label"
                  label="Cuenta a debitar"
                  defaultValue=""
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
              <label className="lblInfoSaldo">
                {" "}
                Saldo disponible: Bs 45.454.545
              </label>
            </div>
          </Grid>

          {!inputField.checkbox && (
            <>
              <Grid item xs={6}>
                <div className="divInputs">
                  <FormControl fullWidth size="small">
                    <InputLabel id="cuenta-label1">Beneficiarios</InputLabel>
                    <Select
                      labelId="cuenta-label1"
                      label="Cuenta a debitar"
                      onChange={(event) => {
                        setOpenModal(true);
                      }}
                    >
                      <MenuItem key={0} value="">
                        <em>Seleccionar</em>
                      </MenuItem>
                      <MenuItem value="cuenta">Cuenta</MenuItem>
                      <MenuItem value="telefono">Telefono</MenuItem>
                    </Select>
                  </FormControl>
                  <label className="lblInfoSaldo">
                    {" "}
                    Saldo disponible: Bs 45.454.545
                  </label>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="divInputs"></div>
              </Grid>
            </>
          )}

          <Grid item xs={6}>
            <div className="divCheckbox">
              <input
                style={{ marginTop: inputField.checkbox ? "20px" : "0px" }}
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
                <div className="divInputs">
                  <FormControl fullWidth size="small">
                    <InputLabel id="labeltipoInstrumento">
                      Tipo de instrumento
                    </InputLabel>
                    <Select
                      labelId="labeltipoInstrumento"
                      id="tipoInstrumento"
                      value={instrumento}
                      label="Tipo de instrumento"
                      name="tipoInstrumento"
                      onChange={(event) => {
                        setInstrumento(event.target.value);
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
                switch (instrumento) {
                  case "telefono":
                    return (
                      <>
                        <Grid item xs={6}>
                          <div className="divInputs">
                            <TextField
                              id="outlined-basic"
                              label="Telefono"
                              variant="outlined"
                              fullWidth="true"
                              size="small"
                            />
                          </div>
                        </Grid>

                        <Grid item xs={6}>
                          <div className="divInputs">
                            <FormControl fullWidth size="small">
                              <InputLabel id="cuenta-label2">
                                Banco destino
                              </InputLabel>
                              <Select
                                labelId="cuenta-label2"
                                label="Cuenta a debitar"
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
                              <InputLabel id="cuenta-label2">Tipo</InputLabel>
                              <Select
                                className="selectTextBeneficiario"
                                labelId="cuenta-label2"
                                label="Cuenta a debitar"
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
                              className="inputTextBeneficiario"
                              id="outlined-basic"
                              label="Documento"
                              variant="outlined"
                              fullWidth="true"
                              size="small"
                            />
                          </div>
                        </Grid>

                        <Grid item xs={6}>
                          <div className="divInputs">
                            <TextField
                              id="outlined-basic"
                              label="Nombre"
                              variant="outlined"
                              fullWidth="true"
                              size="small"
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
                            id="outlined-basic"
                            label="Numero de cuenta"
                            variant="outlined"
                            fullWidth="true"
                            size="small"
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
                inputField={inputField}
                currency={"Bs"}
                id={"montobs"}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="divInputs">
              <FormControl fullWidth size="small">
                <InputLabel id="cuenta-label3">Concepto</InputLabel>
                <Select labelId="cuenta-label3" label="Cuenta a debitar">
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

        {inputField.checkbox && (
          <>
            <Grid
              sx={{ marginTop: "10px" }}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <div className="divInputs"></div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={registrar}
                      onChange={(event) => {
                        setRegistrar(event.target.checked);
                      }}
                      checkedIcon={
                        <Icon>
                          <img
                            style={{ width: "24px", height: "24px" }}
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
                            style={{ width: "24px", height: "24px" }}
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
              </Grid>
              <Grid item xs={6}>
                <div className="divInputs"></div>
              </Grid>

              {registrar && (
                <>
                  <Grid item xs={6}>
                    <div className="divInputs">
                      <FormControl fullWidth size="small">
                        <InputLabel id="tregistro">Tipo de registro</InputLabel>
                        <Select
                          labelId="tregistro"
                          label="Tipo de registro"
                          value={tipoRegistro}
                          onChange={(event) => {
                            setTipoRegistro(event.target.value);
                          }}
                        >
                          <MenuItem key={0} value="">
                            <em>Seleccionar</em>
                          </MenuItem>
                          <MenuItem value="cuenta">Cuenta</MenuItem>
                          <MenuItem value="telefono">Telefono</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  {(() => {
                    switch (tipoRegistro) {
                      case "telefono":
                        return (
                          <Grid item xs={6}>
                            <div className="divInputs">
                              <TextField
                                id="outlined-basic"
                                label="Alias"
                                variant="outlined"
                                fullWidth="true"
                                size="small"
                              />
                            </div>
                          </Grid>
                        );
                      case "cuenta":
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
                                >
                                  <MenuItem key={0} value="">
                                    <em>Seleccionar</em>
                                  </MenuItem>
                                  <MenuItem value="cuenta">Cuenta</MenuItem>
                                  <MenuItem value="telefono">Telefono</MenuItem>
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
              width: "350px",
              height: "30px",
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
                  id="registrobeneficiario"
                  label="Registro del beneficiario"
                  name="registrobeneficiario"
                >
                  <MenuItem key={0} value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  <MenuItem value={"cuenta"}>Cuenta</MenuItem>
                  <MenuItem value={"telefono"}>Telefono</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Stack>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}></DialogActions>
      </Dialog>

      <style jsx>{`
        .divCurrency {
          border: 2px solid #0067b1;
          width: 40px;
          height: 40px;
          border-radius: 4px;
        }

        .imgCurrency {
          margin-top: 20px;
        }

        .lblNombre {
          font-family: Nunito !important;
          font-size: 20px !important;
          font-weight: 700 !important;
        }
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
          background-image: url("${process.env
            .NEXT_PUBLIC_BASIC_URL}forms/rowSelect.svg");
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
          background-image: url("${process.env
            .NEXT_PUBLIC_BASIC_URL}forms/rowSelect.svg");
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
          content: url("${process.env
            .NEXT_PUBLIC_BASIC_URL}trash_blanco.svg") !important;
        }
      `}</style>
    </Fragment>
  );
};
