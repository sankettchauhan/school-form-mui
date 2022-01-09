import { Button, Typography } from "@mui/material";
import React from "react";
import MobileNumber from "./MobileNumber";

export default function Form() {
  return (
    <>
      <Typography variant="h4">Book a free demo</Typography>
      <Button variant="contained">School Courses</Button>
      <Button variant="contained">Professional Courses</Button>
      <MobileNumber />
    </>
  );
}
