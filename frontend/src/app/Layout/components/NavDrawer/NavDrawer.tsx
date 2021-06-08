import {
  Divider,
  Drawer,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import { useStyles } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {
  AccountCircleOutlined,
  ExitToAppOutlined,
  HomeOutlined,
  ImportContactsOutlined,
  ScheduleOutlined,
  ViewCarouselOutlined,
} from "@material-ui/icons";
import DrawerItem from "../DrawerItem/DrawerItem";
import {
  redirectToConferences,
  redirectToHome,
  redirectToProfile,
  redirectToProposals,
  redirectToSchedule,
  redirectToSections,
} from "../../../Routes/routingHelpers";
import { useHistory } from "react-router";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
interface Props {}

const NavDrawer = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const homeHandler = () => {
    redirectToHome(history);
  };

  const conferencesHandler = () => {
    redirectToConferences(history);
  };

  const profileHandler = () => {
    redirectToProfile(history);
  };

  const proposalsHandler = () => {
    redirectToProposals(history);
  };

  const scheduleHandler = () => {
    redirectToSchedule(history);
  };

  const sectionsHandler = () => {
    redirectToSections(history);
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        BackdropProps={{ invisible: false }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Grid container direction="column" justify="space-between">
          <Grid item>
            <ListItem
              button
              onClick={() => setOpen(!open)}
              className={open ? classes.listItemOpen : classes.listItem}
            >
              <ListItemIcon>
                {open === true ? (
                  <ChevronLeftIcon className={classes.whiteColor} />
                ) : (
                  <MenuIcon className={classes.whiteColor} />
                )}
              </ListItemIcon>
              {open && (
                <ListItemText
                  className={classes.whiteColor}
                  primary="Navigation"
                ></ListItemText>
              )}
            </ListItem>
            <Divider />
          </Grid>
          <Grid item>
            <DrawerItem
              open={open}
              Icon={() => <HomeOutlined className={classes.whiteColor} />}
              handle={homeHandler}
              title="Home"
              route="/test"
            />
            <DrawerItem
              open={open}
              Icon={() => <MeetingRoomIcon className={classes.whiteColor} />}
              handle={conferencesHandler}
              title="Conferences"
              route="/test"
            />
            <DrawerItem
              open={open}
              Icon={() => (
                <AccountCircleOutlined className={classes.whiteColor} />
              )}
              handle={profileHandler}
              title="Profile"
              route="/test"
            />
            <DrawerItem
              open={open}
              Icon={() => (
                <ImportContactsOutlined className={classes.whiteColor} />
              )}
              handle={proposalsHandler}
              title="Proposals"
              route="/test"
            />
            <DrawerItem
              open={open}
              Icon={() => <ScheduleOutlined className={classes.whiteColor} />}
              handle={scheduleHandler}
              title="Schedule"
              route="/test"
            />
            <DrawerItem
              open={open}
              Icon={() => (
                <ViewCarouselOutlined
                  color="primary"
                  className={classes.whiteColor}
                />
              )}
              handle={sectionsHandler}
              title="Sections"
              route="/test"
            />
            <DrawerItem
              open={open}
              Icon={() => (
                <ExitToAppOutlined
                  color="primary"
                  className={classes.whiteColor}
                />
              )}
              handle={() => {}}
              title="Logout"
              route="/test"
            />
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
