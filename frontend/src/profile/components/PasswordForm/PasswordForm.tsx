import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {useStyles} from "./styles";
import {
    Button,
    CardActions,
    FormControl,
    Grid,
    Input,
    Typography
} from "@material-ui/core";

type FormInput = {
    password: string;
    confirmedPassword: string;
};

export const PasswordForm = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm<FormInput>();
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const handlePasswordUpdate = () => {
        // Needs to be implemented
        console.log(password, confirmedPassword);
    };

    return (
        <CardActions>
            <form
                onSubmit={handleSubmit(handlePasswordUpdate)}
                id="password-update-form"
                className={classes.fullWidth}
            >
                <Grid container spacing={6}>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item>
                            <h2 className={classes.h2}>New Password</h2>
                            <FormControl fullWidth>
                                <Input
                                    fullWidth
                                    inputRef={register({ required: true })}
                                    name="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && (
                                    <Typography className={classes.error}>
                                        Required password
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <h2 className={classes.h2}>Confirm Password</h2>
                            <FormControl fullWidth>
                                <Input
                                    fullWidth
                                    inputRef={register(
                                        { required: true , validate:{confirm: value => password === value}
                                        })}
                                    name="confirmedPassword"
                                    type="password"

                                    onChange={(e) => {
                                        setConfirmedPassword(e.target.value)
                                    }}
                                />
                                {errors.confirmedPassword && (
                                    <Typography className={classes.error}>
                                        Required confirmation of new password
                                    </Typography>
                                )}

                                {errors.confirmedPassword && errors.confirmedPassword.type === "confirm" && (
                                    <Typography className={classes.error}>
                                        The confirmed password needs to match the new password
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                fullWidth
                                variant="contained"
                                size="medium"
                                type="submit"
                                form="password-update-form"
                                //disabled
                            >
                                Change password
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </CardActions>
    );
};
