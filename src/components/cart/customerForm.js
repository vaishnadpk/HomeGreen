import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";

import { addCustomer } from "../../store/action";

const CustomerForm = () => {
  const billingCustomer = useSelector((state) => state.billingCustomer);
  const dispatch = useDispatch();

  const {
    firstName = "",
    lastName = "",
    address = "",
    city = "",
    zipCode = "",
  } = billingCustomer || {};

  function handleOnChange(e) {
    let cus = { ...billingCustomer };
    cus[e.target.id] = e.target.value;
    dispatch(addCustomer({ ...cus }));
  }

  return (
    <List>
      <ListItem>
        <Stack
          component="form"
          spacing={2}
          noValidate
          autoComplete="off"
          direction="row"
        >
          <TextField
            required
            label="First Name"
            id="firstName"
            defaultValue={firstName}
            variant="standard"
            size="small"
            onBlur={handleOnChange}
          />
          <TextField
            required
            label="Last Name"
            id="lastName"
            defaultValue={lastName}
            variant="standard"
            size="small"
            onBlur={handleOnChange}
          />
        </Stack>
      </ListItem>
      <ListItem>
        <TextField
          required
          label="Address Line 1"
          id="address"
          defaultValue={address}
          variant="standard"
          size="small"
          multiline
          fullWidth
          onBlur={handleOnChange}
        />
      </ListItem>
      <ListItem>
        <Stack
          component="form"
          spacing={2}
          noValidate
          autoComplete="off"
          direction="row"
        >
          <TextField
            required
            label="Zipcode"
            id="zipCode"
            defaultValue={zipCode}
            variant="standard"
            size="small"
            onBlur={handleOnChange}
          />
          <TextField
            required
            label="City"
            id="city"
            defaultValue={city}
            variant="standard"
            size="small"
            onBlur={handleOnChange}
          />
        </Stack>
      </ListItem>
    </List>
  );
};

export default CustomerForm;
