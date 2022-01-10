import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import { State } from "country-state-city";
import React from "react";

export default function StateComponent({ countryCode, value, setValue }) {
  const STATES = State.getStatesOfCountry(countryCode).map(
    (state) => state.name
  );
  // console.log(STATES);
  const handleChange = (event) => {
    const stateName = event.target.value;
    setValue("state", event.target.value);
    setValue(
      "stateCode",
      State.getStatesOfCountry(countryCode).filter(
        (s) => s.name === stateName
      )[0].isoCode
    );
  };
  return (
    <Grid container>
      <Grid
        item
        xs={5}
        style={{
          paddingRight: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <FormLabel component="legend" style={{ fontSize: "1em" }}>
          State
        </FormLabel>
      </Grid>
      <Grid item xs={7}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <Select value={value} onChange={handleChange} placeholder="State">
              {STATES.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}
