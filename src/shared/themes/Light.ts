import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#333333ff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#99df0cff",
      contrastText: "#333333ff",
    },
    background: {
      paper: "#ffffff",
      default: "#f7f6f3",
    },
  },
});
