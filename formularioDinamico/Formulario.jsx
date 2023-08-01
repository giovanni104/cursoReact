import React from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Redes } from './Redes';
export const Formulario = () => {
  return (
    <form style={{padding:'30px'}}>
          <Grid container spacing={2}>
          <Grid  item sx={6}>   <TextField id="outlined-basic" label="Email Adress" variant="outlined" /> </Grid>
          <Grid  item sx={6}>   <TextField id="outlined-basic" label="Enter your name" variant="outlined" /> </Grid>
          <Grid  item sx={6}>   <TextField id="outlined-basic" label="Enter your adress" variant="outlined" /> </Grid>
          <Grid  item sx={6}>   <TextField id="outlined-basic" label="Enter your phone number" variant="outlined" /> </Grid>
          <Grid  item xs={12}>   <TextField id="outlined-basic" label="Enter your message" variant="outlined" fullWidth/> </Grid>
          <Grid  item  sx={6}>   <Button variant='contained' fullWidth>Send</Button> </Grid>
          <Grid  item  xs={12}>    <Redes/>  </Grid>

          
          </Grid>

    </form>
  )
}
