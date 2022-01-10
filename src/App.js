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
          background: "rgb(63,94,251)",
          background:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 850,
            padding: "1em",
            background: "rgba(255,255,255,0.5)",
            borderRadius: 10,
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
          }}
        >
          <Form />
        </Paper>
      </Box>
    </>
  );
}

export default App;
