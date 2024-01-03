// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#f6f7fb",
    },
    secondary: {
      light: "#8790f6",
      main: "#536de6",
    },
    background: {
      main: "#f9fafd",
    },
    error: { main: "#ff5b5b" },
    success: { main: "#10c469" },
  },
});
export default theme;
