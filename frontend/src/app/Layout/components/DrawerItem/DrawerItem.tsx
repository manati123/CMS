import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useStyles } from "./styles";

export type Props = {
  open: boolean;
  handle: () => void;
  Icon: (props: any) => JSX.Element;
  title: string;
  route: string;
};

const DrawerItem = (props: Props) => {
  const classes = useStyles();
  const location = useLocation();
  const { open, handle, Icon, title, route } = props;
  const className =
    location.pathname === route
      ? open
        ? classes.listItemSelectedOpen
        : classes.listItemSelected
      : open
      ? classes.listItemOpen
      : classes.listItem;
  return (
    <>
      <ListItem button className={className} onClick={handle}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        {open && (
          <ListItemText
            disableTypography
            primary={
              <Typography className={classes.typography}>{title}</Typography>
            }
          />
        )}
      </ListItem>
      <Divider />
    </>
  );
};

export default DrawerItem;
