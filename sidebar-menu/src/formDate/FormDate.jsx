import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
export const Formdate = ({handleInputChange,index}) => {
    const [open, setOpen] = React.useState(false);



  const handleRefreshData = () => {
    
   let data ={
        frecuencia: "Semanal",
        anio: "2023",
        mes: "05",
        dia: "01"
      }
      handleInputChange(index,data);


  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];



    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        handleRefreshData();
        setOpen(false);
      };



  return (
    <div>
          <IconButton  onClick={handleClickOpen}
                              size="large"
                              sx={{
                               
                                position:"unset",
                                color: "#4A96D2",
                                backgroundColor: "white",
                                ":hover": {
                                  color: "white",
                                  backgroundColor: "#4A96D2",
                                  opacity: 0.9,
                                },
                                border:"1px solid #FFFFFF",
                                boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)",
                                right: 50,
                                bottom: 50,
                              }}
                            >
                              <EventNoteOutlinedIcon />
                            </IconButton>Fecha valor: 24/01/2023
      
            <Dialog maxWidth={"xs"} open={open} onClose={handleClose}>
              
              <DialogContent>               

                <div className="divInputs">
                  <select name="concepto" id="concepto" className="selectText">
                    <option value="none" disabled selected>
                      Concepto(*)
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>


                <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
        
          native
         
          // @ts-ignore Typings are not considering `native`
         
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
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

  )
}
