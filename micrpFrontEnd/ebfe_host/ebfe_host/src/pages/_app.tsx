import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { UIProvider } from '../context/ui';


import { lightTheme, darkTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
//  export default function App({ Component, pageProps }) {
  return (
    
        <ThemeProvider theme={ darkTheme }>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
     
     
  )
}
