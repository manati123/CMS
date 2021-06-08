import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  listItem: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(2.8),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1.2),
      paddingLeft: theme.spacing(2),
    },
  },
  listItemOpen: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1.5),
      paddingLeft: theme.spacing(2.8),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.7),
      paddingLeft: theme.spacing(2),
    },
  },
  listItemSelectedOpen: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1.5),
      paddingLeft: theme.spacing(2.8),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0.7),
      paddingLeft: theme.spacing(2),
    },
  },
  listItemSelected: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(2.8),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(1.2),
      paddingLeft: theme.spacing(2),
    },
  },
  typography: {
    overflow: "hidden",
    textOverflow: "elipsis",
    color: "white",
  },
}));
