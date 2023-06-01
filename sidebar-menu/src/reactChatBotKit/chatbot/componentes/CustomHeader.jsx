import React from 'react'
import Typography from '@mui/material/Typography'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';


const CustomHeader = () => {
  return (
    <>
      <div className="react-chatbot-kit-chat-header">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Brightness1Icon sx={{ color: '#04BB37' }} />
          </Grid>
          <Grid item xs={8}>
          <Box display="flex" justifyContent="left">
            <Typography
            align='left'
              fontFamily={'Nunito'}
              fontSize={'20px'}
              color={'#4A96D2'}
              fontWeight={'700'}
              fontStyle={'normal'}
            >
              ¿Qué deseas hacer?
            </Typography>

            </Box>

          </Grid>

          <Grid   xs={2}  item  >
          <Box display="flex" justifyContent="flex-end">
            <HighlightOffIcon
              style={{   color: '#4A96D2', width: '34px', height: '34px' }}
            />
             </Box>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CustomHeader
