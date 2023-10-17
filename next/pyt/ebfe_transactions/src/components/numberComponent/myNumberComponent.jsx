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
    let montoRecibir = parseFloat(monto) * parseFloat(valores[index].tasabcv);

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
