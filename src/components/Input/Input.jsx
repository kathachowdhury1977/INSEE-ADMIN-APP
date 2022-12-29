import React from "react";
import { TextField } from "@mui/material";

const Input = (props) => {
  const { name, label, value, error = null, onChange, variant , ...other } = props;
  return (
    <TextField
      variant={variant || "outlined"}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
