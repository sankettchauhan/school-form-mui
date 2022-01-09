import React, { useEffect } from "react";
import {
  Autocomplete,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Country } from "country-state-city";
import { Box } from "@mui/system";

export default function CountryComponent({ value, setValue, countryCode }) {
  const COUNTRIES = Country.getAllCountries().map((country) => country.name);

  useEffect(() => {
    if (countryCode)
      setValue("country", Country.getCountryByCode(countryCode).name);
  }, [countryCode]);

  const handleChange = (event) => {
    const countryName = event.target.value;
    setValue("country", countryName);
  };

  return (
    <>
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
            Country
          </FormLabel>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl>
              <Select value={value} label="Country" onChange={handleChange}>
                {COUNTRIES.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
