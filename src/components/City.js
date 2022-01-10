import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import { City } from "country-state-city";
import React from "react";

export default function CityComponent({
  stateCode,
  countryCode,
  value,
  setValue,
}) {
  const CITIES = City.getCitiesOfState(countryCode, stateCode).map(
    (city) => city.name
  );
  const handleChange = (event) => {
    const cityName = event.target.value;
    setValue("city", event.target.value);
  };
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        style={{
          paddingRight: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <FormLabel component="legend" style={{ fontSize: "1em" }}>
          City
        </FormLabel>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <Select value={value} onChange={handleChange} placeholder="City">
              {CITIES.map((name) => (
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
