import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { patterns } from "../../utils/genericas";

export const MyNumberComponent = ({
  setInputFields,
  inputFields,
  index,
  currency,
  id,
}) => {
  const [errorMonto, setErrorMonto] = useState("");

  const handleChange = (ev) => {
    const newValue = ev.floatValue;
    console.log(ev);
    if (newValue == "0") {
      setErrorMonto("El monto no debe ser igual a cero");
    } else {
      setErrorMonto("");
    }

    let valores = [...inputFields];
    let monto = ev.floatValue == undefined ? "0" : ev.floatValue;

    //let montoRecibir = parseFloat(monto) * parseFloat(valores[index].tasabcv);

    let number = valores[index].tasabcv;
    let decimalNumbers = number.toString();

    //se toman los números después del punto
    decimalNumbers = decimalNumbers.substr(
      decimalNumbers.indexOf(".") + 1,
      decimalNumbers.length - 1
    );

    let decimalNumbersLength = decimalNumbers.length;

    //se eleva el 10 a la cantidad de números decimales que hay
    //para tener un numero con la misma cantidad de ceros que decimales
    let fixNumber = 10 ** decimalNumbersLength;

    let montoRecibir = Math.round(monto * fixNumber * number) / fixNumber;

    valores[index].montorecibir = montoRecibir;

    valores[index].monto = ev.floatValue == undefined ? "" : ev.floatValue;
    valores[index].montoFormat = ev.formattedValue;
    setInputFields(valores);
  };

  const materialUiTextFieldProps = {
    fullWidth: true,
    label: "Monto(*)",
    size: "small",
  };
  return (
    <>
      <NumericFormat
        id={id}
        value={inputFields[index].monto}
        customInput={TextField}
        onValueChange={handleChange}
        thousandSeparator="."
        decimalSeparator=","
        prefix={currency + ". "}
        {...materialUiTextFieldProps}
        error={!!errorMonto}
        helperText={errorMonto}
      />
      {/*binded value: {totalAmount}*/}
    </>
  );
};
