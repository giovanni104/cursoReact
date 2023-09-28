import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import WarningIcon from "@mui/icons-material/Warning";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>

      <Snackbar
        sx={{ width: "35%", marginBottom: "100px" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
      >
        <Alert
          icon={
            <img
              style={{
                height: "40px",
                width: "40px",
                content: `url('${process.env.NEXT_PUBLIC_BASIC_URL}error.svg')`,
              }}
            />
          }
          onClose={handleClose}
          severity="success"
          sx={{ display: "flex", justifyContent: "right" }}
          action={
            <Button
              sx={{
                textTransform: "capitalize",
                borderRadius: "4px",
                borderWidth: "2px",
                borderColor: "#E21050",
                textTransform: "none",
                width: "148px",
                height: "38px",
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Nunito",
                backgroundColor: "white",
                color: "#E21050",
                "&:hover": {
                  borderColor: "#E21050",
                  backgroundColor: "white",
                  color: "#E21050",
                  borderRadius: "4px",
                  borderWidth: "2px",
                },
              }}
              variant="outlined"
            >
              Cerrar
            </Button>
          }
        >
          This is a success message!This dscsd scdsdc sdcsdcsdcsdc sdcsd dscsdc
          dscsdc sdc dc c sd dc csdc https://aguidehub.com/blog/
        </Alert>
      </Snackbar>
    </>
  );
};
