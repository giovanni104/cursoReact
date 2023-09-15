import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import InfoMessageStyle from "./InfoMessageStyle";

export const InfoMessage = ({ typeMessage, message }) => {
  const [progress, setProgress] = React.useState(0);
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

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          const mensaje = document.querySelector("#infoMessage");
          if (mensaje != null) {
            mensaje.classList.add("ocultar");
          }

          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const cerrarMensaje = () => {
    const mensaje = document.querySelector("#infoMessage");
    if (mensaje != null) {
      mensaje.classList.add("ocultar");
    }
  };

  const mensaje = document.querySelector("#infoMessage");

  return (
    <div id="infoMessage">
      <div
        style={{ background: color.primario }}
        className="containerInfoMessage"
      >
        <Stack direction="row" spacing={15}>
          <img
            style={{
              height: "40px",
              width: "40px",
              content: color.icon,
            }}
          />

          <div className="divlblInfoSucess">
            <label className={"lblInfoSucess"}>{message}</label>
          </div>
          <Button
            onClick={cerrarMensaje}
            sx={{
              textTransform: "capitalize",
              borderRadius: "4px",
              borderWidth: "2px",
              borderColor: color.secundario,
              textTransform: "none",
              width: "148px",
              height: "38px",
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
          >
            Cerrar
          </Button>
        </Stack>
      </div>
      <Box
        sx={{
          backgroundColor: color.secundario,
          color: "white",
          width: "100%",
        }}
      >
        <LinearProgress
          color="inherit"
          variant="determinate"
          value={progress}
        />
      </Box>
      <style jsx>{InfoMessageStyle}</style>
    </div>
  );
};
