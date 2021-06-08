import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: theme.palette.primary.main,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  paper: {
    background: theme.palette.primary.main,
  },
  drawerOpen: {
    overflowX: "hidden",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  container: {
    height: "100%",
  },
  switchThemeGrid: {
    marginLeft: "5px",
  },
  listItem: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2.5),
      paddingLeft: theme.spacing(2.8),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(1.2),
      paddingLeft: theme.spacing(2),
    },
  },
  listItemOpen: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(2.8),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0.7),
      paddingLeft: theme.spacing(2),
    },
  },
  drawerItemTypography: {
    overflow: "hidden",
    textOverflow: "elipsis",
  },
  whiteColor: {
    color: "white",
  },
  primaryColor: {
    color: theme.palette.primary.main
},
}));
