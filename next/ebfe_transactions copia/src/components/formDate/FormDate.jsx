import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DatePicker, { registerLocale } from "react-datepicker";
import MenuItem from "@mui/material/MenuItem";
import es from "date-fns/locale/es"; // the locale you want
registerLocale("es", es); // register it with the name you want
import "react-datepicker/dist/react-datepicker.css";

export const Formdate = ({ index, inputFields, setInputFields }) => {
  let fecha = new Date();
  fecha = fecha.setDate(fecha.getDate() + 1);

  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState(fecha);
  const [programaDate, setprogramaDate] = React.useState("");
  const [frecienciaData, setFrecienciaData] = React.useState("");

  const [displayRepetir, setDisplayRepetir] = React.useState("none");
  const [dataRepetir, setDataRepetir] = React.useState("0");
  useEffect(function () {}, []);

  const handleRefreshData = () => {
    let valores = [...inputFields];
    valores[index].programa.frecuencia = "";
    valores[index].programa.frecuenciaType = "";
    valores[index].programa.mes = "";
    valores[index].programa.anio = "";
    valores[index].programa.repetir = "0";
    setInputFields(valores);
    setprogramaDate("");
  };

  const frecuencia = [
    { id: "0", desc: "Una vez" },
    { id: "1", desc: "Semanal" },
    { id: "2", desc: "Quincenal" },
    { id: "3", desc: "Mensual" },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleRefreshData();
    setDataRepetir("0");
    setDisplayRepetir("none");
    setOpen(false);
  };

  const handledata = () => {
    if (frecienciaData != "") {
      let data = frecienciaData.split("-");

      setprogramaDate(data[1] + ": " + formatDate(startDate));
      let valores = [...inputFields];
      valores[index].programa.frecuencia = data[1];
      valores[index].programa.frecuenciaType = data[0];

      setInputFields(valores);
    } else {
      handleRefreshData();
    }

    setOpen(false);
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let valores = [...inputFields];
    valores[index].programa.dia = day;
    valores[index].programa.mes = month;
    valores[index].programa.anio = year;

    setInputFields(valores);

    return [day, month, year].join("/");
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            id="programacion"
            name="programacion"
            value={programaDate}
            label="Programación"
            type="text"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            onClick={handleClickOpen}
          />
        </Grid>

        <Grid display={displayRepetir} item xs={3} justify="flex-end">
          <TextField
            size="small"
            type="number"
            id="repetir"
            label="Repetir(*)"
            variant="outlined"
            value={dataRepetir}
            onInput={(e) => {
              if (e.target.value != "") {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 2);
              }
            }}
            onChange={(e) => {
              if (e.target.value == "") {
                setDataRepetir("0");
              } else {
                setDataRepetir(e.target.value);
              }

              let valores = [...inputFields];
              valores[index].programa.repetir = e.target.value;
              setInputFields(valores);
            }}
          />
        </Grid>
      </Grid>

      <Dialog maxWidth={"sm"} open={open} onClose={handleClose}>
        <DialogContent>
          <div className="divInputsFormDate">
            <FormControl fullWidth size="small">
              <InputLabel id="frecuencia-label">Frecuencia</InputLabel>
              <Select
                labelId="frecuencia-label"
                id="frecuencia"
                value={frecienciaData}
                label="Frecuencia"
                defaultValue=""
                onChange={(event) => {
                  let dataSelect = "";

                  console.log(event);
                  if (event.target.value != "") {
                    let data = event.target.value.split("-");
                    setFrecienciaData(event.target.value);
                    dataSelect = data[1];
                  } else {
                    setFrecienciaData("");
                  }
                  console.log(dataSelect);
                  if (dataSelect == "Una vez" || dataSelect == "") {
                    setDisplayRepetir("none");
                    setDataRepetir("0");
                    let valores = [...inputFields];
                    valores[index].programa.repetir = "0";
                    setInputFields(valores);
                  } else {
                    setDisplayRepetir("unset");
                  }
                }}
                name="frecuencia"
              >
                <MenuItem key={0} value="">
                  <em>Seleccionar</em>
                </MenuItem>

                {frecuencia.map((concepto, index) => {
                  return (
                    <MenuItem
                      key={index}
                      value={concepto.id + "-" + concepto.desc}
                    >
                      {concepto.desc}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <DatePicker
            selected={startDate}
            minDate={fecha}
            locale="es"
            onChange={(date) => setStartDate(date)}
            inline
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            onClick={handledata}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

      <style jsx>{`
        .selectTexForm {
          box-sizing: border-box;
          /* Auto layout */

          flex-direction: row;
          align-items: center;
          gap: 20px;
          height: 50px;
          width: 400px;
          left: 10px;
          top: 15px;
          /* Grises/Blanco */
          background: #ffffff;
          border: 1px solid rgba(123, 123, 123, 0.5);
          border-radius: 4px;
          padding: 10px 10px 10px 20px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          /* identical to box height */

          color: #7b7b7b;
        }

        .divInputsFormDate {
          width: 242px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          padding-bottom: 10px;
        }

        .selectTextDate {
          height: 50px;
          width: 140px;

          top: 0px;
          border-radius: 4px;

          /* Grises/Blanco */
          background: #ffffff;

          /* Grises/Medio */
          border: #d9d9d9;
        }
      `}</style>
    </div>
  );
};
