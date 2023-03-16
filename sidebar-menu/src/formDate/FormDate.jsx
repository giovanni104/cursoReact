import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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





    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        handleRefreshData();
        setOpen(false);
      };



  return (
    <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              Open form dialog
            </Button>
            <Dialog maxWidth={"xs"} open={open} onClose={handleClose}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />

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
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
              </DialogActions>
            </Dialog>
          </div>

  )
}
