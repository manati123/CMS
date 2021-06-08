import { TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

interface Props {}

const ProposalsListHeader = (props: Props) => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography className={classes.tableColumn}>Name</Typography>
        </TableCell>
        <TableCell>
          <Typography className={classes.tableColumn}>Keywords</Typography>
        </TableCell>
        <TableCell>
          <Typography className={classes.tableColumn}>Topics</Typography>
        </TableCell>
        <TableCell>
          <Typography className={classes.tableColumn}>Authors</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ProposalsListHeader;
