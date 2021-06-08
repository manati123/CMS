import { ThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import getTheme from "./theme";

interface Props {
  children?: ReactNode;
}

const CustomThemeProvider = ({ children }: Props) => {
  const createdTheme = getTheme();
  return <ThemeProvider theme={createdTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
