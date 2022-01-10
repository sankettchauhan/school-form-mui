import {
  FormLabel,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
} from "@mui/material";
import React from "react";

export default function Device({ value, setValue }) {
  const ENUM = ["PC/Laptop", "Mobile"];
  const handleClick = (device) => setValue("device", device);
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
            Device you will use for Demo Class
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
