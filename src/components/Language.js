import {
  FormLabel,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
} from "@mui/material";
import React from "react";

export default function Language({ value, setValue }) {
  const ENUM = ["Hindi", "English"];
  const handleClick = (language) => setValue("preferredLanguage", language);
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
            Preferred language of teacher
          </FormLabel>
        </Grid>
        <Grid item xs={6}>
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
