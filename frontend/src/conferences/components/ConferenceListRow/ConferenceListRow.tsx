import { useStyles } from "./styles";
import { TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import { Conference } from "../../../models/Conference";

interface Props {
  conference: Conference;
}

const isPastTimeStamp = (date: number) => {
  return date < Date.now();
};
const ConferenceListRow = ({ conference }: Props) => {
  const classes = useStyles();
  const proposalDeadline: Date = new Date(conference.proposalDeadline);
  const reviewDeadline: Date = new Date(conference.reviewDeadline);
  let proposalDeadlineClass = isPastTimeStamp(conference.proposalDeadline)
    ? classes.pastDate
    : classes.futureDate;
  let reviewDeadlineClass = isPastTimeStamp(conference.reviewDeadline)
    ? classes.pastDate
    : classes.futureDate;

  return (
    <TableRow className={classes.clickable}>
      <TableCell>
        <Typography>{conference.name}</Typography>
      </TableCell>
      <TableCell className={proposalDeadlineClass}>
        <Typography>{proposalDeadline.toDateString()}</Typography>
      </TableCell>
      <TableCell className={reviewDeadlineClass}>
        <Typography>{reviewDeadline.toDateString()}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default ConferenceListRow;
