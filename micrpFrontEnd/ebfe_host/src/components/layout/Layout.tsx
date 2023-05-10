import { FC } from 'react';
import Head from 'next/head';

import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';


interface Props {
    children: React.ReactNode,
    title?: string;
}


export const Layout:FC<Props> = ({ title='Home - HDRM PYT' , children }) => {
  return (
      <Box sx={{ flexFlow: 1 }}>
          <Head>
                <title>{ title }</title>
          </Head>

            <Navbar />
            <Sidebar />

            <Box sx={{ padding: '10px 20px'  }}>
                { children }
            </Box>

      </Box>
  )
};