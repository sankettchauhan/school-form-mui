import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function MobileNumber() {
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
      />
    </Box>
  );
}
