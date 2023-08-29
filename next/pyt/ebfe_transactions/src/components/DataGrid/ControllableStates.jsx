import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = [
  { label: "Option 1", code: "bb" },
  { label: "Option 2", code: "aa" },
];
export const ControllableStates = () => {
  const [value, setValue] = React.useState(options[0]);

  return (
    <div>
      <div>{`value: ${
        value !== null ? `'${JSON.stringify(value)}'` : "null"
      }`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(any, newValue) => {
          setValue(newValue);
        }}
        id="demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="demo" />}
      />
    </div>
  );
};
