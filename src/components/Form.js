import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Class from "./Class";
import Device from "./Device";
import Subjects from "./Subjects";
import MobileNumber from "./MobileNumber";
import Country from "./Country";
import State from "./State";
import City from "./City";
import { createForm } from "../axios/forms";
import Language from "./Language";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formgroup: {
    marginTop: "0.5em",
    width: "100%",
  },
});

export default function Form() {
  const DEFAULT_FORM_STATE = {
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
  };
  const classes = useStyles();
  const [data, setData] = React.useState(DEFAULT_FORM_STATE);

  const setValue = (key, value) =>
    setData((state) => ({ ...state, [key]: value }));

  console.log(data);

  const handleClick = async () => {
    try {
      const dataFromDb = await createForm(data);
      if (dataFromDb.status === 200) {
        alert(`data saved in db.\n${data}`);
        setData(DEFAULT_FORM_STATE);
      }
    } catch (error) {
      console.log(`An error occured.`);
      console.log(error.response);
    }
  };

  return (
    <>
      <Typography variant="h4">Book a free demo</Typography>
      <Box>
        <Button variant="contained">School Courses</Button>
      </Box>
      <Box className={classes.formgroup}>
        <MobileNumber
          country={data.country}
          value={data.mobileNo}
          setValue={setValue}
        />
      </Box>
      <Box className={classes.formgroup}>
        <Device value={data.device} setValue={setValue} />
      </Box>
      <Box className={classes.formgroup}>
        <Class value={data.class} setValue={setValue} />
      </Box>
      <Box className={classes.formgroup}>
        <Subjects value={data.subjects} setValue={setValue} />
      </Box>
      <Box className={classes.formgroup}>
        <Country
          value={data.country}
          setValue={setValue}
          countryCode={data.countryCode}
        />
      </Box>
      <Box className={classes.formgroup}>
        <State
          countryCode={data.countryCode}
          value={data.state}
          setValue={setValue}
        />
      </Box>
      <Box className={classes.formgroup}>
        <City
          countryCode={data.countryCode}
          stateCode={data.stateCode}
          value={data.city}
          setValue={setValue}
        />
      </Box>
      <Box className={classes.formgroup}>
        <Language value={data.preferredLanguage} setValue={setValue} />
      </Box>
      <Box sx={{ marginTop: "0.5em" }}>
        <Button variant="contained" onClick={handleClick} color="primary">
          Submit
        </Button>
      </Box>
    </>
  );
}
