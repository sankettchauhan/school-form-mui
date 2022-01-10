import { Button, Typography } from "@mui/material";
import React from "react";
import Class from "./Class";
import Device from "./Device";
import Subjects from "./Subjects";
import MobileNumber from "./MobileNumber";
import Country from "./Country";
import State from "./State";
import City from "./City";
import { createForm } from "../axios/forms";

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
    countryCode: "",
    stateCode: "",
  });

  const setValue = (key, value) =>
    setData((state) => ({ ...state, [key]: value }));

  console.log(data);

  const handleClick = async () => {
    try {
      const dataFromDb = await createForm(data);
      console.log(dataFromDb);
    } catch (error) {
      console.log(`An error occured.`);
      console.log(error.response);
    }
  };

  return (
    <>
      <Typography variant="h4">Book a free demo</Typography>
      <Button variant="contained">School Courses</Button>
      <Button variant="contained">Professional Courses</Button>
      <MobileNumber
        country={data.country}
        value={data.mobileNo}
        setValue={setValue}
      />
      <Device value={data.device} setValue={setValue} />
      <Class value={data.class} setValue={setValue} />
      <Subjects value={data.subjects} setValue={setValue} />
      <Country
        value={data.country}
        setValue={setValue}
        countryCode={data.countryCode}
      />
      <State
        countryCode={data.countryCode}
        value={data.state}
        setValue={setValue}
      />
      <City
        countryCode={data.countryCode}
        stateCode={data.stateCode}
        value={data.city}
        setValue={setValue}
      />
      <Button variant="contained" onClick={handleClick} color="primary">
        Submit
      </Button>
    </>
  );
}
