import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export const MyNumberComponent = ({
  setInputFields,
  inputFields,
  index,
  inputField,
  currency,
}) => {
  const handleChange = (ev) => {
    let valores = [...inputFields];
    valores[index].monto = ev.floatValue;
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
        value={inputField.monto}
        customInput={TextField}
        onValueChange={handleChange}
        thousandSeparator="."
        decimalSeparator=","
        prefix={currency + ". "}
        {...materialUiTextFieldProps}
      />
      {/*binded value: {totalAmount}*/}
    </>
  );
};
