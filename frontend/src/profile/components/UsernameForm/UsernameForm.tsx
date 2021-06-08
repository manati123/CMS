import {useForm} from "react-hook-form";
import React, { useState} from "react";
import { useSelector } from "react-redux";
import {getCurrentUser} from "../../../account/selectors";
import {useStyles} from "./styles";
import {
    Button,
    CardActions,
    FormControl,
    Grid,
    Input,
    Typography
} from "@material-ui/core";

type FormInput = { username: string; };

export const UsernameForm = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm<FormInput>();
    const currentUser = useSelector(getCurrentUser);

    const [username, setUsername] = useState(currentUser != null ?currentUser.username: "");

    const handleUsernameUpdate = () => {
        // Needs to be implemented
        console.log(username);
    };

    return (
        <CardActions>
            <form
                onSubmit={handleSubmit(handleUsernameUpdate)}
                id="username-update-form"
                className={classes.fullWidth}
            >
                <Grid container spacing={6}>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item>
                            <h2 className={classes.h2}>Username</h2>
                            <FormControl fullWidth>
                                <Input
                                    fullWidth
                                    autoFocus
                                    inputRef={register({ required: true })}
                                    name="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </FormControl>
                            {errors.username && (
                                <Typography className={classes.error}>
                                    Required username
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                fullWidth
                                variant="contained"
                                size="medium"
                                type="submit"
                                form="username-update-form"
                                //disabled
                            >
                                Change username
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </CardActions>
    );
};
