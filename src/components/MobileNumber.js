import { Box } from "@mui/system";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

export default function MobileNumber() {
  const [value, setValue] = useState();
  const [country, setCountry] = useState("");
  console.log(value);
  console.log(country);
  return (
    <Box>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        onCountryChange={(country) => setCountry(country)}
      />
    </Box>
  );
}
