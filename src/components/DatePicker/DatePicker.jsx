import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePicker = (props) => {
  const {
    name,
    label,
    value,
    onChange,
    error = null,
    disable,
    formControlSx = {},
    style,
    ...other
  } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        inputFormat="dd-MM-yyyy"
        label={label}
        disabled={disable || false}
        value={value}
        sx={formControlSx}
        {...other}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        renderInput={(params) => (
          <TextField
            style={style}
            {...params}
            size="small"
            {...(error && { error: true, helperText: error })}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
