import { createMuiTheme } from "@material-ui/core";
import { blue, indigo } from "@material-ui/core/colors";
import {
  Alert,
  primaryMain,
  primaryDark,
  primaryLight,
  Danger,
  Success,
  BgWhite,
} from "../common/colors";

const getTheme = () => {
  const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: {
        dark: "#315878",
        main: "#467eac",
        light: "#6b97bc",
      },
      error: {
        main: Danger,
        light: Danger,
        dark: Danger,
      },
      info: {
        main: Alert,
        light: Alert,
        dark: Alert,
      },
      success: {
        main: Success,
        light: Success,
        dark: Success,
      },
    },
    overrides: {
      // Name of the component ⚛️
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundColor: BgWhite,
          },
          "*::-webkit-scrollbar": {
            width: "0.4em",
            backgroundColor: "transparent",
          },
          "*::-webkit-scrollbar-track": { backgroundColor: "transparent" },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: indigo[500],
          },
        },
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });
  return theme;
};
export default getTheme;
