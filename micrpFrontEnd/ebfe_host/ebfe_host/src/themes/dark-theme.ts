import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';



export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        },
        },

        components: {
            MuiAppBar: {
                defaultProps: {
                    elevation: 0
                },
                styleOverrides: {
                    root: {
                        backgroundColor: '#4a148c'
                    }
                }
            }
        },
        typography: {
            h1:{fontSize:'1rem',},
            h2:{fontSize:'0.8rem',},
            h3:{fontSize:'0.6rem',},
            h4:{fontSize:'0.4rem',},
            fontFamily: [
              'Nunito',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
});