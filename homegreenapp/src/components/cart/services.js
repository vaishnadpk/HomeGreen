import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

const Services = () => {
  return (
    <>
      <FormGroup row={true}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Delivery to home"
        />
        <FormControlLabel control={<Switch />} label="Assembly service" />
      </FormGroup>
    </>
  );
};
export default Services;
