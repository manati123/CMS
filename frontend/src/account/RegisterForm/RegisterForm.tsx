import {
  Button,
  CardActions,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "./styles";
import Link from "@material-ui/core/Link";
import { redirectToLogin } from "../../app/Routes/routingHelpers";
import { useHistory } from "react-router";

interface Props {}

type FormInputs = {
  email: string;
  password: string;
};

export const RegisterForm = (props: Props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<FormInputs>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleRegister = () => {
    //execute action using the value of email,password
  };

  return (
    <CardActions>
      <form
        onSubmit={handleSubmit(handleRegister)}
        id="register-form"
        className={classes.fullWidth}
      >
        <Grid container spacing={6}>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  fullWidth
                  autoFocus
                  inputRef={register({ required: true })}
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              {errors.email && (
                <Typography className={classes.error}>
                  Required email
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
          <Grid item container direction="column">
            <Button
              color="primary"
              fullWidth
              variant="contained"
              size="medium"
              type="submit"
              form="register-form"
            >
              Register
            </Button>
            <Typography>
              Already have an account?
              <Link color="primary" onClick={() => redirectToLogin(history)}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </CardActions>
  );
};
