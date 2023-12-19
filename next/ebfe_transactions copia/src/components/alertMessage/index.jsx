import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertMessage = ({
  typeMessage,
  message,
  action,
  open,
  setOpen,
}) => {
  const [color, setColor] = React.useState({
    primario: "",
    secundario: "",
    icon: "",
  });

  React.useEffect(() => {
    switch (typeMessage) {
      case "error":
        setColor({
          primario: "#ED6D8F",
          secundario: "#E21050",
          icon: `url('${process.env.NEXT_PUBLIC_BASIC_URL}error.svg')`,
        });
        break;
      case "info":
        setColor({
          primario: "#4A96D2",
          secundario: "#004A72",
          icon: `url('${process.env.NEXT_PUBLIC_BASIC_URL}info.svg')`,
        });
        break;
      default:
        setColor({
          primario: "#78BA49",
          secundario: "#209041",
          icon: `url('${process.env.NEXT_PUBLIC_BASIC_URL}CheckSucess.svg')`,
        });
        break;
    }
  }, [open]);
  const theme = createTheme({
    components: {
      MuiAlert: {
        styleOverrides: {
          root: {
            backgroundColor: color.primario, // Replace with your desired background color
          },
          message: {
            textAlign: "justify",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontWeight: "400",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        sx={{ width: "35%", marginBottom: "50px" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
      >
        <Alert
          icon={
            <img
              style={{
                height: "33px",
                width: "33px",

                content: color.icon,
              }}
            />
          }
          severity="success"
          sx={{ display: "flex" }}
          action={
            <Button
              size="small"
              sx={{
                textTransform: "capitalize",
                borderRadius: "4px",
                borderWidth: "2px",
                borderColor: color.secundario,
                width: "90px",
                height: "36px",
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Nunito",
                backgroundColor: "white",
                color: color.secundario,
                "&:hover": {
                  borderColor: color.secundario,
                  backgroundColor: "white",
                  color: color.secundario,
                  borderRadius: "4px",
                  borderWidth: "2px",
                },
              }}
              variant="outlined"
              onClick={() => {
                setOpen(false);

                if (action != undefined) {
                  action();
                }
              }}
            >
              Cerrar
            </Button>
          }
        >
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};
