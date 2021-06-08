import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ReviewResult } from "../../../models/Review";
import { useStyles } from "./styles";

interface Props {
  result: ReviewResult;
}

const ResultLabel = ({ result }: Props) => {
  const classes = useStyles();
  const backgroundColor = {
    [ReviewResult.STRONG_ACCEPT]: "#40a348",
    [ReviewResult.ACCEPT]: "#cbe4cd",
    [ReviewResult.BORDERLINE_PAPER]: "#feedba",
    [ReviewResult.WEAK_REJECT]: "#ffcdd2",
    [ReviewResult.REJECT]: "rgba(204, 0, 0, 63%)",
  }[result];

  const textColor = {
    [ReviewResult.STRONG_ACCEPT]: "#cbe4cd",
    [ReviewResult.ACCEPT]: "#40a348",
    [ReviewResult.BORDERLINE_PAPER]: "rgb(153, 102, 51, 56%)",
    [ReviewResult.WEAK_REJECT]: "rgba(204, 0, 0, 63%)",
    [ReviewResult.REJECT]: "#ffcdd2",
  }[result];

  return (
    <Box
      borderRadius={30}
      width={"fit-content"}
      padding={0.5}
      paddingLeft={2}
      paddingRight={2}
      color={textColor}
      bgcolor={backgroundColor}
    >
      <Typography className={classes.typography}>{result}</Typography>
    </Box>
  );
};

export default ResultLabel;
