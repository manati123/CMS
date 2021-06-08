import { CardContent, Grid, Typography } from "@material-ui/core";
import cmsLogoTransparent from "../../assets/logo_transparent_blue_60x60.png";
import { useStyles } from "./styles";

interface Props {}

const WelcomeHeader = (props: Props) => {
  const classes = useStyles();
  return (
    <CardContent>
      <Grid container alignItems="center" justify="space-between" spacing={7}>
        <Grid item xs>
          <Typography variant="h4">Welcome to CMS!</Typography>
        </Grid>
        <Grid item>
          <img src={cmsLogoTransparent} />
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default WelcomeHeader;
