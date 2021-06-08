import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    height: theme.spacing(8),
  },
  logo: {
    width: 60,
    height: 60,
  },
}));
