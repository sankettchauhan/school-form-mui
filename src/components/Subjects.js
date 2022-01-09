import {
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

export default function Subjects({ value, setValue }) {
  const ENUM = ["Physics", "English", "Maths", "Computer Science"];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue("subjects", typeof value === "string" ? value.split(",") : value);
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
            Subject/s
          </FormLabel>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Subject/s</InputLabel>
            <Select
              multiple
              value={value}
              onChange={handleChange}
              input={<OutlinedInput label="Subject/s" />}
              // MenuProps={MenuProps}
            >
              {ENUM.map((subject) => (
                <MenuItem
                  key={subject}
                  value={subject}
                  // style={getStyles(name, personname, theme)}
                >
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
