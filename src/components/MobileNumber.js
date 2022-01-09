import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Country } from "country-state-city";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const useStyles = makeStyles({
  phoneInput: {
    textAlign: "center",
  },
});

export default function MobileNumber({ country, value, setValue }) {
  const classes = useStyles();
  useEffect(() => {
    if (country) {
      const countryCode = Country.getAllCountries().filter(
        (c) => c.name === country
      )[0].isoCode;
      setValue("countryCode", countryCode);
    }
  }, [country]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <PhoneInput
        placeholder="Enter phone number"
        onCountryChange={(countryCode) => setValue("countryCode", countryCode)}
        countrySelectProps={{ unicodeFlags: true }}
        onChange={(value) => setValue("mobileNo", value)}
        className={classes.phoneInput}
      />
    </Box>
  );
}
