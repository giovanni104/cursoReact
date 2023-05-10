import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';
export const lightTheme = createTheme({
    palette: {

        mode: 'light',
        background: {
            default: grey[300]
        },
        primary: {
            main: '#4a148c',
        },
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
            styleOverrides: {}
        },
        MuiCheckbox: {

            styleOverrides: {
                root: {
                    "&.Mui-checked": {
                        color: '#0067B1',
                    },
                }
            },
            defaultProps: {
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: '#004A72',
                        color: 'white',
                    }
                }
            }
        }

    },
    typography: {
        fontSize: 24,
        h1: {
            '@media (max-width: 600px)': {
                fontSize: '1.1rem',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '1.2rem',
            },
            '@media (min-width: 961px)': {
                fontSize: '1.5rem',
            },
        },
        h2: {
            '@media (max-width: 600px)': {
                fontSize: '0.9rem',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '1rem',
            },
            '@media (min-width: 961px)': {
                fontSize: '1.1rem',
            },
        },
        h3: {
            '@media (max-width: 600px)': {
                fontSize: '0.8rem',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '0.9rem',
            },
            '@media (min-width: 961px)': {
                fontSize: '1rem',
            },
        },
        h4: {
            '@media (max-width: 600px)': {
                fontSize: '0.7rem',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '0.8rem',
            },
            '@media (min-width: 961px)': {
                fontSize: '0.9rem',
            },
        },
        h5: {
            '@media (max-width: 600px)': {
                fontSize: '0.6rem',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '0.7rem',
            },
            '@media (min-width: 961px)': {
                fontSize: '0.8rem',
            },
        },

        body1: {
        },
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