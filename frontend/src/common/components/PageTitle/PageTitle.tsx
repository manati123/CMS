import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

interface Props {
  title: string;
  align?: "center"|"left"|"right";
}

const PageTitle = ({ title,align="left"}: Props) => {
  const classes = useStyles();

  return <Typography align={align} className={classes.pageTitle}>{title}</Typography>;
};

export default PageTitle;
