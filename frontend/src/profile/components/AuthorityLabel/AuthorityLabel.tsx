import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import {Roles} from "../../../models/User";

interface Props {
    role: Roles;
}

const AuthorityLabel = ({ role }: Props) => {
    const classes = useStyles();
    const backgroundColor = {
        [Roles.ADMIN]: "#03018C",
        [Roles.COMMITTEE_MEMBER]: "#4259C3",
        [Roles.AUTHOR]: "#91BAD6",
        [Roles.USER]: "#9EC2FF",
    }[role];

    const textColor = {
        [Roles.ADMIN]: "#FFE5CC",
        [Roles.COMMITTEE_MEMBER]: "#FFEBD7",
        [Roles.AUTHOR]: "#F5F2EF",
        [Roles.USER]: "#F6F6F6"
    }[role];

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
            <Typography className={classes.typography}>{role}</Typography>
        </Box>
    );
};

export default AuthorityLabel;
