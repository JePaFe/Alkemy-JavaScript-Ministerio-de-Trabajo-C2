import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavigationBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1">App</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
