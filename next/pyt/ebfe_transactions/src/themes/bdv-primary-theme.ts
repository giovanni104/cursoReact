import { ThemeOptions } from "@mui/material/styles";
import { createTheme, responsiveFontSizes } from "@mui/material";

export const getThemeBDV = (mode = "light") => {
  const paletteMode = (mode: string): object => {
    return {
      mode: mode,
      primary: {
        main: "#0067b1",
        light: "#4a96d2",
        dark: "#004a72",
      },
      secondary: {
        main: "#854e99",
        light: "#c5abd3",
        dark: "#612d87",
      },
      error: {
        main: "#ed6d8f",
        light: "#ed6d8f",
        dark: "#db0032",
      },
      warning: {
        main: "#fec800",
      },
      info: {
        main: "#4a96d2",
        light: "rgba(74,150,210,0.5)",
        dark: "#006677",
      },
      success: {
        main: "#78ba49",
        light: "rgba(206,222,141,0.6)",
        dark: "#548233",
      },
      text: {
        primary: mode == "light" ? "#363636" : "#ffffff",
        secondary: mode == "light" ? "#7b7b7b" : "#d9d9d9",
      },
      background: {
        default: mode == "light" ? "#ffffff" : "#494949",
        paper: mode == "light" ? "#efefef" : "#363636",
      },
    };
  };

  const primaryTheme: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 360,
        md: 768,
        lg: 1024,
        xl: 1536,
      },
    },
    palette: paletteMode(mode),

    typography: {
      fontFamily: "Nunito",

      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    spacing: (factor: number) => 4 * factor,
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: "none",
            fontSize: "1rem",
          },
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiButtonBase: {
        // defaultProps:
        // {
        //     style: {
        //         textTransform: 'none',
        //     },
        // },
      },
    },
  };

  const bdvTheme = createTheme(primaryTheme);

  return responsiveFontSizes(bdvTheme);
};
