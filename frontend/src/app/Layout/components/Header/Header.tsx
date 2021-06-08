import { useStyles } from "./styles";
import cmsLogo from "../../../../assets/logo_transparent_blue_60x60.png";
import { AppBar, Divider, Grid, Toolbar } from "@material-ui/core";
import ConferenceSelector from "../../../components/ConferenceSelector";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} color="default">
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            spacing={3}
            wrap="nowrap"
          >
            <Grid item>
              <img src={cmsLogo} alt="CMS logo" className={classes.logo} />
            </Grid>
            <Grid item>
              <ConferenceSelector />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider />
    </div>
  );
};

export default Header;
