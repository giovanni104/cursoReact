import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export const Informacion = () => {
  return (
    <Stack spacing={6} direction={'column'} style={{margin:'60px'}}>
        <Typography variant='h8' className='parrafo'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beat</Typography>
        <Typography style={{color:'orange'}}  variant='h3' className='parrafo'>Contacto</Typography>
        <Typography variant='h8' className='parrafo'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beat</Typography>
        <Typography variant='h8' className='parrafo'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beat</Typography>

    </Stack>
  )
}
