import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./formdate.css";

export const Formdate = ({ handleInputChange, index }) => {
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState([]);
  const [year, setyear] = React.useState([]);

  useEffect(function () {
    var today = new Date();
    setyear([today.getFullYear(), today.getFullYear() + 1]);
    let dayCal = [];
    for (let i = 0; i < 31; i++) {
      dayCal[i] = i + 1;
    }
    setDay(dayCal);
  }, []);

  const handleRefreshData = () => {
    let data = {
      frecuencia: "Semanal",
      anio: "2023",
      mes: "05",
      dia: "01",
    };
    handleInputChange(index, data);
  };

  const frecuencia = [
    "Frecuencia",
    "Una vez",
    "Semanal",
    "Quincenal",
    "Mensual",
  ];
  const month = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleRefreshData();
    setOpen(false);
  };

  const monthChange = (event) => {
    let numeroDias = calcularDiasMes(2023, event.target.value);
    let dayCal = [];
    for (let i = 0; i < numeroDias; i++) {
      dayCal[i] = i + 1;
    }
    setDay(dayCal);
  };

  const calcularDiasMes = (anio, mes) => {
    let numeroDias = -1;

    switch (mes) {
      case "enero":
      case "marzo":
      case "mayo":
      case "julio":
      case "agosto":
      case "octubre":
      case "diciembre":
        numeroDias = 31;
        break;
      case "abril":
      case "junio":
      case "septiembre":
      case "noviembre":
        numeroDias = 30;
        break;
      case "febrero":
        if (
          (anio % 4 == 0 && anio % 100 != 0) ||
          (anio % 100 == 0 && anio % 400 == 0)
        ) {
          //Con esto sé si es bisiesto o no
          numeroDias = 29;
        } else {
          numeroDias = 28;
        }
        break;
    }

    return numeroDias;
  };

  return (
    <div>
      <Grid container spacing={-5}  >
        <Grid item xs={2}>
          <IconButton
            onClick={handleClickOpen}
            size="large"
            sx={{
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
          >
            <EventNoteOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item xs={6}  >
          <Typography
            fontFamily={"Nunito"}
            fontSize={"16px"}
            color={"#7B7B7B"}
            fontWeight={"400"}
            fontStyle={"normal"}
            marginTop={"12px"}
           
          >Fecha valor: 24/01/2023
          </Typography>
        </Grid>
      </Grid>

      <Dialog maxWidth={"sm"} open={open} onClose={handleClose}>
        <DialogContent>
          <div className="divInputsFormDate">
            <select name="concepto" id="concepto" className="selectTexForm">
              {frecuencia.map((name, index) =>
                index == 0 ? (
                  <option key={name} value="none" disabled selected>
                    {name}
                  </option>
                ) : (
                  <option key={name} value={name}>
                    {" "}
                    {name}{" "}
                  </option>
                )
              )}
            </select>
          </div>

          <FormControl
            sx={{ m: 1, minWidth: 120, maxWidth: 141, margin: "3px" }}
          >
            <InputLabel shrink htmlFor="select-multiple-native">
              Año
            </InputLabel>
            <Select
              native
              label="Native"
              inputProps={{
                id: "select-multiple-native",
              }}
              className="selectTextDate"
            >
              {year.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl
            sx={{ m: 1, minWidth: 120, maxWidth: 141, margin: "3px" }}
          >
            <InputLabel shrink htmlFor="select-multiple-native">
              Mes
            </InputLabel>
            <Select
              onChange={(e) => monthChange(e)}
              native
              label="Native"
              inputProps={{
                id: "select-multiple-native",
              }}
              className="selectTextDate"
            >
              {month.map((name) => (
                <option key={name} value={name}>
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl
            sx={{ m: 1, minWidth: 120, maxWidth: 141, margin: "3px" }}
          >
            <InputLabel shrink htmlFor="select-multiple-native">
              Dia
            </InputLabel>
            <Select
              native
              label="Native"
              inputProps={{
                id: "select-multiple-native",
              }}
              className="selectTextDate"
            >
              {day.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
