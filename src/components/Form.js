import { Button, Typography } from "@mui/material";
import React from "react";
import Class from "./Class";
import Device from "./Device";
import MobileNumber from "./MobileNumber";

export default function Form() {
  const [data, setData] = React.useState({
    mobileNo: "",
    device: "",
    class: "",
    subjects: [],
    country: "",
    state: "",
    city: "",
    preferredLanguage: "",
  });

  const setValue = (key, value) =>
    setData((state) => ({ ...state, [key]: value }));

  console.log(data);

  return (
    <>
      <Typography variant="h4">Book a free demo</Typography>
      <Button variant="contained">School Courses</Button>
      <Button variant="contained">Professional Courses</Button>
      <MobileNumber value={data.mobileNo} setValue={setValue} />
      <Device value={data.device} setValue={setValue} />
      <Class value={data.class} setValue={setValue} />
    </>
  );
}
