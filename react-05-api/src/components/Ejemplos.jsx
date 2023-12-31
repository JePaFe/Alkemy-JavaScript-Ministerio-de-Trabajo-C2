import { Box, Button, Card, TextField, Typography } from "@mui/material";

export default function Ejemplos() {
  return (
    <>
      <Typography component="h2" sx={{ mb: 2 }}>
        Ejemplos
      </Typography>

      <Box
        component="main"
        sx={{ bgcolor: "aquamarine", border: "1px solid", p: 2 }}
      >
        <Button variant="contained" color="error">
          Click
        </Button>
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </Box>
    </>
  );
}
