import React from "react";
import Button from "@mui/material/Button";
import { Icon, Stack } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export const ConfirmDialog = (props) => {
  const { title, children, open, setOpen, onConfirm } = props;
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      {/**<DialogTitle id="confirm-dialog">{title}</DialogTitle>*/}
      <DialogContent
        sx={{
          borderRadius: "5px",
          textTransform: "none",

          fontWeight: "600",
          fontFamily: "Nunito",
        }}
      >
        {children}
      </DialogContent>
      <DialogActions>
        <Stack
          justifyContent="center"
          gap={2}
          flexDirection="row"
          width={1.0}
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "5px",
              textTransform: "none",
              width: "148px",
              height: "38px",
              padding: "8px, 32px, 8px, 32px",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Nunito",
              backgroundColor: "#E21050",
              "&:hover": {
                backgroundColor: "#E21050",
              },
            }}
            onClick={() => {
              setOpen(false);
              onConfirm();
            }}
          >
            Aceptar
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "5px",
              textTransform: "none",
              width: "148px",
              height: "38px",
              padding: "8px, 32px, 8px, 32px",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Nunito",
            }}
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};
