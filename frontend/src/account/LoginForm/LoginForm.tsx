import {
  Button,
  CardActions,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import {
  redirectToHome,
  redirectToRegister,
} from "../../app/Routes/routingHelpers";
import Link from "@material-ui/core/Link";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../thunks";
import { getCurrentUser } from "../selectors";

interface Props {}

type FormInputs = {
  username: string;
  password: string;
};

export const LoginForm = (props: Props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<FormInputs>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  useEffect(() => {
    currentUser && redirectToHome(history);
  }, [currentUser]);

  const handleLogin = () => {
    dispatch(signInThunk(username, password));
    console.log(username, password);
  };

  return (
    <CardActions>
      <form
        onSubmit={handleSubmit(handleLogin)}
        id="login-form"
        className={classes.fullWidth}
      >
        <Grid container spacing={6}>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">Username</InputLabel>
                <Input
                  fullWidth
                  autoFocus
                  inputRef={register({ required: true })}
                  name="username"
                  type="text"
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
              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
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
          </Grid>
          <Grid item container direction="column" spacing={1}>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => setKeepMeSignedIn(!keepMeSignedIn)}
                    color="secondary"
                    name="keepMeSignedIn"
                    checked={keepMeSignedIn}
                  />
                }
                label={<Typography>Keep me signed in</Typography>}
              />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                fullWidth
                variant="contained"
                size="medium"
                type="submit"
                form="login-form"
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Link
                component="button"
                color="primary"
                onClick={() => redirectToRegister(history)}
                className={classes.link}
              >
                Register
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </CardActions>
  );
};
