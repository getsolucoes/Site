import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
      contrastText: "#333333ff",
    },
    secondary: {
      main: "#99df0cff",
      contrastText: "#333333ff",
    },
    background: {
      paper: "#303134",
      default: "#202124",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});
