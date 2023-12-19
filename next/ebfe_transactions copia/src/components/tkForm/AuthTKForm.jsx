import InputTKNumber from "./InputTKNumber";
import { Typography, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { FC, useContext, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";

export const AuthTKForm = ({ handlerValidatedAuthTK, handleCloseModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState("");

  const stylebottommodal = {
    width: "35%",
    marginTop: "3%",
    marginBottom: "3%",
    fontSize: "1rem",
  };

  const tokenValidator = () => {
    alert("tokenValidator");
  };
  return (
    <Dialog open={false}>
      <>
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            <Typography
              variant="h2"
              color={"primary"}
              sx={{
                mb: 1,
                fontWeight: "700",
                marginBottom: "2%",
                textAlign: "center",
              }}
            >
              Autentícate para continuar
            </Typography>
            <Typography
              variant="h3"
              color={"text.primary"}
              sx={{ mt: 8, mb: 1 }}
            >
              Ingresa tu clave dinámica <b>ami ven</b>:
            </Typography>
            <InputTKNumber
              setToken={setToken}
              isError={isError}
              setError={setIsError}
              token={token}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={stylebottommodal}
                onClick={tokenValidator}
              >
                Continuar
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={stylebottommodal}
                style={{
                  borderWidth: "2px",
                }}
                onClick={handleCloseModal}
              >
                Cancelar
              </Button>
            </div>
          </>
        )}
      </>
    </Dialog>
  );
};
