import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "./ToggleSwitch.scss";

export default function FormControlLabelPosition() {
  return (
      <div className="sub_toggle">
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row> 
        <FormControlLabel
          value="end"
          control={<Switch color="primary"/>}
          label="Active"
        />
      </FormGroup>
    </FormControl>
    </div>
  );
}