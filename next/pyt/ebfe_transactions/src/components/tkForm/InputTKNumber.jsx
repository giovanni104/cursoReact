import React, { FC, useRef } from "react";
import { TextField, IconButton } from "@mui/material";
import Image from "next/image";
import "animate.css";

const InputTKNumber = ({ setToken, isError, setError, token }) => {
  let inputgroup = useRef([]);
  const cols = ["0", "1", "2", "3", "4", "5", "6", "7"];
  function changeFocus(inputs, target, event, operacion) {
    let backInputIndex;
    if (operacion === "-") {
      backInputIndex = inputs.indexOf(target) - 1;
    } else {
      backInputIndex = inputs.indexOf(target) + 1;
    }
    const backInput = inputs[backInputIndex];
    if (backInput) {
      event.preventDefault();
      backInput.focus();
    }
  }
  const handleKeyDown = (event) => {
    const keyCode = event.key;
    const target = event.target;
    // Si la tecla presionada no es un número, no hace nada
    const inputs = Array.from(document.getElementsByClassName("inputSms"));

    if (keyCode === "Delete" || keyCode === "Backspace") {
      changeFocus(inputs, target, event, "-");
      target.value = "";
      setValueToken();
      event.preventDefault();
      return;
    }

    if (!/^[0-9]+$/.test(keyCode) && keyCode !== "Tab") {
      event.preventDefault();
      return;
    }
    changeFocus(inputs, target, event, "+");

    if (keyCode !== "Tab") {
      target.value = keyCode;
      setValueToken();
    }
  };

  const setValueToken = () => {
    let tokenvalue = "";

    inputgroup.current.map((input) => {
      input.value ? (tokenvalue += input.value) : null;
    });

    if (tokenvalue.length == inputgroup.current.length) {
      setToken(tokenvalue);
    } else {
      setToken("");
    }
  };
  const handlePaste = (pasteText) => {
    setError(false);
    const regex = /^[0-9]+$/; // Expresión regular para validar solo números
    if (regex.test(pasteText) && pasteText.length == 8) {
      // Validamos el texto con la expresión regular y que su longitud sea 8

      const chars = pasteText.split("");

      for (let i = 0; i < chars.length && i < cols.length; i++) {
        const char = chars[i];
        const textField = document.getElementById(i.toString());
        textField.value = char;
      }
      setValueToken();
    }
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Añadir el elemento al DOM
    document.body.appendChild(textArea);

    // Seleccionar el texto en el textarea
    textArea.select();

    try {
      // Copiar el texto al portapapeles
      document.execCommand("copy");
      console.log("Copiado al portapapeles");
    } catch (err) {
      console.error("No se pudo copiar al portapapeles:", err);
    }

    // Eliminar el textarea del DOM
    document.body.removeChild(textArea);
  };

  const handleClick = async (event) => {
    // console.log(token);

    try {
      const pasteText = await navigator.clipboard.readText();
      handlePaste(pasteText);
      event.preventDefault();
    } catch (error) {
      console.error("Error al leer del portapapeles:", error);
      event.preventDefault();
    }
  };
  const handleFocus = () => {
    setError(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {cols.map((rec, index) => {
          return (
            <TextField
              key={rec}
              id={rec}
              variant="outlined"
              error={isError}
              className={
                isError ? "animate__animated animate__headShake error" : ""
              }
              sx={{
                borderRadius: "0px",
                marginRight: "1%",
                minWidth: "10px",
                maxWidth: "50px",
              }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                maxLength: 1,
                className: "inputSms",
                ref: (ref) => (inputgroup.current[index] = ref),
                style: {
                  height: "1rem",
                  minWidth: "50%",
                  borderRadius: "0px",
                  fontSize: "1.2rem",
                  textAlign: "center",
                },
                sx: {
                  paddingLeft: "3px",
                  paddingRight: "3px",
                },
                inputMode: "numeric",
              }}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
            />
          );
        })}
        <IconButton onClick={handleClick} aria-label="delete">
          <Image
            src={process.env.NEXT_PUBLIC_BASIC_URL + "/shape.svg"}
            alt="Img login"
            width={0}
            height={0}
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default InputTKNumber;
