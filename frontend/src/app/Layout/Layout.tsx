import { Grid } from "@material-ui/core";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getCurrentUser } from "../../account/selectors";
import Header from "./components/Header/Header";
import NavDrawer from "./components/NavDrawer/NavDrawer";
import { useStyles } from "./styles";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const classes = useStyles();
  const currentUser = useSelector(getCurrentUser);

  return (
    <Grid container direction="row" className={classes.root} wrap="nowrap">
      <Grid item>{currentUser ? <NavDrawer /> : null}</Grid>
      <Grid item container direction="column" wrap="nowrap" xs>
        <Grid item>{currentUser ? <Header /> : null}</Grid>
        <Grid item container className={classes.childrenContainer}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
