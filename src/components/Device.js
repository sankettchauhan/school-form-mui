import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
} from "@mui/material";
import React from "react";

export default function Device({ value, setValue }) {
  const ENUM = ["PC/Laptop", "Mobile"];
  return (
    <>
      <Grid container>
        <Grid item xs={6} style={{ textAlign: "right", paddingRight: 20 }}>
          <FormLabel component="legend" style={{ fontSize: "2em" }}>
            Device you will use for Demo Class
          </FormLabel>
        </Grid>
        <Grid xs={6}>
          <ToggleButtonGroup>
            {ENUM.map((item, index) => (
              <ToggleButton
                key={`${item}-${index + 1}`}
                value={item}
                control={<Button varianr="contained" />}
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
