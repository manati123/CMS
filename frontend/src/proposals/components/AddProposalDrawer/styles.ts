import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { BgWhite, TextGray } from "../../../common/colors";

export const useStyles = makeStyles((theme) => ({
  error: {
    color: red[500],
    "&::before": {
      content: '"⚠ "',
    },
  },
  fullWidth: {
    width: "100%",
  },
  link: { fontSize: theme.typography.fontSize * 1.2 },
  paper: { width: 600, backgroundColor: BgWhite },
  fullHeight: {
    height: "100%",
  },
  textGray: {
    color: TextGray,
  },
  marginBottom: {
    marginBottom: theme.spacing(6),
  },
  groupHeader: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(0.5),
  },
  sectionContainer: {
    marginBottom: theme.spacing(3),
    height: 150,
    borderRadius: 10,
    padding: theme.spacing(1, 0),
    borderColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
    "::-webkit-scrollbar-thumb": {
      background: "orange" /* color of the tracking area */,
    },
  },
}));
