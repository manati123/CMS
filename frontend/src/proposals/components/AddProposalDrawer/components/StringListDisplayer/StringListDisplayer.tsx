import { Box, IconButton, Typography, useTheme } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./styles";

interface Props {
  stringList: string[];
  removeString: (string: string) => void;
}

const StringListDisplayer = ({ stringList, removeString }: Props) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {stringList.map((string) => (
        <Box
          key={string}
          width="fit-content"
          borderRadius={8}
          paddingY={1}
          paddingLeft={2.5}
          paddingRight={2}
          margin={1}
          bgcolor={theme.palette.primary.main}
          display="flex"
        >
          <Typography className={classes.whiteColor}>{string}</Typography>
          <IconButton size="small" onClick={() => removeString(string)}>
            <CloseIcon fontSize="small" className={classes.whiteColor} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default StringListDisplayer;
