import { Box, Grid, useTheme } from "@material-ui/core";
import React, { FC } from "react";

type Props = {
  paddingRight?: number;
  paddingLeft?: number;
  paddingTop?: number;
  paddingBottom?: number;
};

const PageContentContainer: FC<Props> = ({
  children,
  paddingRight = 2,
  paddingLeft = 2,
  paddingTop = 2,
  paddingBottom = 2,
}) => {
  return (
    <Box
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </Box>
  );
};

export default PageContentContainer;
