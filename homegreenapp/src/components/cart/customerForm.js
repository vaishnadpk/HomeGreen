import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";

const CustomerForm = () => {
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
            id="filled-size-small"
            defaultValue=""
            variant="standard"
            size="small"
          />
          <TextField
            required
            label="Last Name"
            id="filled-size-small"
            defaultValue=""
            variant="standard"
            size="small"
          />
        </Stack>
      </ListItem>
      <ListItem>
        <TextField
          required
          label="Address Line 1"
          id="filled-size-small"
          defaultValue=""
          variant="standard"
          size="small"
          multiline
          fullWidth
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
            id="filled-size-small"
            defaultValue=""
            variant="standard"
            size="small"
          />
          <TextField
            required
            label="City"
            id="filled-size-small"
            defaultValue=""
            variant="standard"
            size="small"
          />
        </Stack>
      </ListItem>
    </List>
  );
};

export default CustomerForm;
