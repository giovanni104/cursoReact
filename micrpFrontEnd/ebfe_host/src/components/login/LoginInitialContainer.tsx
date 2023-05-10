import Image from "next/image";
import { Box } from '@mui/material';
import { ReactElement, FC } from 'react';

type LoginInitialContainerType = {
  children: ReactElement
}
export const LoginInitialContainer: FC<LoginInitialContainerType> = ({ children }) => {

  return (
    <Box overflow={'none'} sx={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      margin: '11%',
      borderRadius: '20px',
      fontFamily: 'Nunito',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={'/image/logobdvcolor.svg'} alt="Img login" width={0} height={0} style={{
          position: 'relative',
          width: '50%',
          height: '50%',
          marginTop: '8%',
        }}></Image>
      </div>

      {children}

    </Box>
  )
}
