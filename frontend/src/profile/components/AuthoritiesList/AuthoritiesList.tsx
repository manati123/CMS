import { useSelector } from "react-redux";
import { getCurrentUserRoles } from "../../../account/selectors";
import AuthorityLabel from "../AuthorityLabel/AuthorityLabel";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

interface Props {}

export const AuthoritiesList = (props: Props) => {
  const currentUserRoles = useSelector(getCurrentUserRoles);
  const classes = useStyles();
  // @ts-ignore
  const rolesList = currentUserRoles.map((role) => (
    <Box marginBottom={2}>
      <AuthorityLabel role={role} />
    </Box>
  ));

  return (
    <Box paddingRight={4} className={classes.ul}>
      {rolesList}
    </Box>
  );
};
