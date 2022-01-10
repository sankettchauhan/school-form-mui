import {
  FormLabel,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";

export default function Class({ value, setValue }) {
  const ENUM = [
    "KG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const handleClick = (c) => setValue("class", c);
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={5}
          style={{
            paddingRight: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <FormLabel component="legend" style={{ fontSize: "1em" }}>
            Class/Grade
          </FormLabel>
        </Grid>
        <Grid item xs={7}>
          <ToggleButtonGroup>
            {ENUM.map((item, index) => (
              <ToggleButton
                key={`${item}-${index + 1}`}
                value={item}
                onClick={() => handleClick(item)}
                selected={value === item}
              >
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}
