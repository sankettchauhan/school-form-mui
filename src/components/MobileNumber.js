import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const useStyles = makeStyles({
  phoneInput: {
    textAlign: "center",
  },
});

export default function MobileNumber() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [country, setCountry] = useState("");

  console.log(value);
  console.log(country);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <PhoneInput
        placeholder="Enter phone number"
        onCountryChange={(country) => setCountry(country)}
        countrySelectProps={{ unicodeFlags: true }}
        defaultCountry="IN"
        onChange={setValue}
        className={classes.phoneInput}
      />
    </Box>
  );
}
