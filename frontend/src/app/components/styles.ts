import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  conferenceSelector: {
    minWidth: theme.spacing(8),
    width: "fit-content",
  },
  selectContent: {
    fontWeight: 700,
    fontSize: theme.typography.fontSize * 1.1,
  },
  loading: {
    color: theme.palette.warning.main,
  },
  error: {
    color: theme.palette.error.main,
  },
}));
