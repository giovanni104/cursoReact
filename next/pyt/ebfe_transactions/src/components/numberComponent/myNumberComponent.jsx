import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export const MyNumberComponent = ({
  setInputFields,
  inputFields,
  index,
  currency,
  id,
}) => {
  const handleChange = (ev) => {
    console.log(ev);
    let valores = [...inputFields];
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
      />
      {/*binded value: {totalAmount}*/}
    </>
  );
};
