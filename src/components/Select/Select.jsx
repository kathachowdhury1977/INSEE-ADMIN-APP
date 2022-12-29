import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const Select = (props) => {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    options,
    disabled,
    minWidth,
    showSelect,
    ...others
  } = props;

  let formControlSx = {
    minWidth: minWidth ? minWidth : "150px",
  }

  return (
    <FormControl
      variant="outlined"
      {...(error && { error: true })}
      size="small"
      sx={formControlSx}
    >
      <InputLabel >{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled || false}
        {...others}
      >
        {
          showSelect && (
            <MenuItem value="">- Select -</MenuItem>
          )
        }
        
        {options &&
          options.length > 0 &&
          options.map((item,index) => (
            <MenuItem
              key={props.optionCode ? props.optionCode+index : item}
              value={props.optionCode ? item[props.optionCode] : item}
            >
              {props.optionLabel ? item[props.optionLabel] : item}
            </MenuItem>
          ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
