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
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DatePicker, { registerLocale } from "react-datepicker";
import MenuItem from "@mui/material/MenuItem";
import es from "date-fns/locale/es"; // the locale you want
registerLocale("es", es); // register it with the name you want
import "react-datepicker/dist/react-datepicker.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import "../../styles/FormDate.module.css";

export const Formdate = ({
  handleInputChange,
  index,
  inputFields,
  setInputFields,
}) => {
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState([]);
  const [year, setyear] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date());
  const [selectDate, setselectDate] = React.useState("");

  const [fecha, setFecha] = React.useState("");

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
    handleInputChange(index, data, inputFields, setInputFields);
  };

  const frecuencia = [
    "Frecuencia",
    "Una vez",
    "Semanal",
    "Quincenal",
    "Mensual",
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleRefreshData();
    setOpen(false);
  };

  const handledata = () => {
    setselectDate(fecha + ": " + formatDate(startDate));
    setOpen(false);
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          {/* <IconButton
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
          </IconButton>*/}

          <TextField
            size="small"
            sx={{ width: "100%" }}
            id="monto"
            name="monto"
            value={selectDate}
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
            onChange={(e) => {
              /*
              let valores = [...inputFields];
              valores[index].monto = "1234";
              setInputFields(valores);*/
            }}
          />
        </Grid>

        <Grid item xs={3} justify="flex-end">
          <TextField
            size="small"
            type="number"
            id="repetir"
            label="Repetir(*)"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Dialog maxWidth={"sm"} open={open} onClose={handleClose}>
        <DialogContent>
          <div className="divInputsFormDate">
            {/*<select name="concepto" id="concepto" className="selectTexForm">
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


                */}

            <FormControl fullWidth size="small">
              <InputLabel id="frecuencia-label">Frecuencia</InputLabel>
              <Select
                labelId="frecuencia-label"
                id="frecuencia"
                value={fecha}
                label="Frecuencia"
                onChange={(event) => {
                  console.log(event);
                  setFecha(event.target.value);
                }}
                name="frecuencia"
              >
                <MenuItem key={0} value="">
                  <em>Seleccionar</em>
                </MenuItem>

                {frecuencia.map((concepto, index) => {
                  return (
                    <MenuItem key={index} value={concepto}>
                      {concepto}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <DatePicker
            selected={startDate}
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
