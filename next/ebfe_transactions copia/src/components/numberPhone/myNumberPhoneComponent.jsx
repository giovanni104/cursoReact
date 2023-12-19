import { useState } from "react";
import { PatternFormat } from "react-number-format";

export const NumberPhoneComponent = () => {
  const [phone, setPhone] = useState("");

  const materialUiTextFieldProps = {
    fullWidth: true,
    label: "Monto(*)",
    size: "small",
  };
  return (
    <>
      <PatternFormat
        format="(###) #### ###"
        allowEmptyFormatting
        mask="_"
        {...materialUiTextFieldProps}
      />
    </>
  );
};
