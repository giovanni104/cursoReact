import React from 'react'
import { Grid } from '@mui/material'
import { Informacion } from '../Informacion'
import { Formulario } from '../Formulario'

export const Contacto = () => {
  return (
    <div   className='fondo'>
       <Grid container>
       <Grid  item xs={12} sm={6}   >
       <Informacion/> 
       </Grid>
       <Grid  item xs={12}  sm={6} className='centrar'   >
       <Formulario/> 
       </Grid>



       </Grid>

    </div>
  )
}
