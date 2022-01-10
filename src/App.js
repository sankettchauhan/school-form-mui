import { CssBaseline, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Form from "./components/Form";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 850,
            padding: "1em",
          }}
        >
          <Form />
        </Paper>
      </Box>
    </>
  );
}

export default App;
