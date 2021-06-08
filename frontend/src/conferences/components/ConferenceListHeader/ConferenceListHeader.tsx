import {useStyles} from "../../../proposals/components/ProposalsListHeader/styles";
import {TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import React from "react";

interface Props {}

const ConferenceListHeader = (_ : Props) => {
    const classes = useStyles();
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <Typography className={classes.tableColumn}>Conference</Typography>
                </TableCell>
                <TableCell>
                    <Typography className={classes.tableColumn}>Proposal deadline</Typography>
                </TableCell>
                <TableCell>
                    <Typography className={classes.tableColumn}>Review deadline</Typography>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export default ConferenceListHeader;
