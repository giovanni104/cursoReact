import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React, { PropsWithChildren, ReactElement } from 'react'

type LoginContainerType = {
  children: ReactElement
}

const LoginContainer = ({ children }: PropsWithChildren<LoginContainerType>) => {


  return (
    <Grid container spacing={0} height={'100vh'} style={{ background: '#efefef', overflowY: 'scroll' }}>
      <Grid item md={5} lg={6} display={{ xs: "none", sm: "none", md: "block", lg: "block" }} >
        <Box sx={{
          width: '100%',
          height: '100%',
        }}>
          <Image src={'/image/loginimage.svg'} alt="Img login" width={0} height={0} style={{
            position: 'absolute',
            width: 'auto',
            height: '100vh',
            left: 0,
            top: 0
          }} />
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={7} lg={6}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          // marginLeft: '20%',
          // marginRight: '50%'
        }}>
          {children}
        </div>
      </Grid>

    </Grid >
  )
}

const LoginContainerMemo = React.memo(LoginContainer);

export default LoginContainerMemo