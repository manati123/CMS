import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  error: {
    color: red[500],
    "&::before": {
      content: '"⚠ "',
    },
  },
  fullWidth: {
    width: "100%",
  },
});
