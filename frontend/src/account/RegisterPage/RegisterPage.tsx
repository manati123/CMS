import { Card, Grid } from "@material-ui/core";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import { useStyles } from "./styles";

interface Props {}

const RegisterPage = (props: Props) => {
    const classes = useStyles();
    return (
        <Grid
            container
            className={classes.container}
            justify="center"
            alignContent="center"
        >
            <Card className={classes.card} raised>
                <Grid container direction="column">
                    <Grid item xs>
                        <WelcomeHeader />
                    </Grid>
                    <Grid item xs>
                        <RegisterForm />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};

export default RegisterPage;
