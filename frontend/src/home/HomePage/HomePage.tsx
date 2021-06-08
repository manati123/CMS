import {
    Box,
    Button,
    Card, CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography,
} from "@material-ui/core";
import PageTitle from "../../common/components/PageTitle/PageTitle";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import {useStyles} from "../../app/Layout/components/NavDrawer/styles";
import {useHistory} from "react-router";
import {
    redirectToConferences,
    redirectToProfile,
    redirectToProposals,
    redirectToSchedule, redirectToSections
} from "../../app/Routes/routingHelpers";
import {
    AccountCircleOutlined,
    ImportContactsOutlined,
    ScheduleOutlined,
    ViewCarouselOutlined
} from "@material-ui/icons";
import PageContentContainer from "../../common/components/PageContentContainer/PageContentContainer";

interface Props {}

const HomePage = (props: Props) => {
    const classes = useStyles();
    const history = useHistory();

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
    const pageCards = [
        {
            icon: <MeetingRoomIcon className={classes.primaryColor}/>,
            sections: "Conferences",
            subTitle: "The main event.",
            details: "View the conferences you are a part of.",
            handler: conferencesHandler,
        },
        {
            icon: <AccountCircleOutlined className={classes.primaryColor} />,
            sections: "Profile",
            subTitle: "Introduce yourself.",
            details: "View, manage and edit your profile.",
            handler: profileHandler,
        },
        {
            icon: <ImportContactsOutlined className={classes.primaryColor} />,
            sections: "Proposals",
            subTitle: "The topic at hand.",
            details: "View the proposed papers for the upcoming conference.",
            handler: proposalsHandler,
        },
        {
            icon: <ScheduleOutlined className={classes.primaryColor} />,
            sections: "Schedule",
            subTitle: "Time is of the essence.",
            details: "Check deadlines and view all the scheduled events.",
            handler: scheduleHandler,
        },
        {
            icon: <ScheduleOutlined className={classes.primaryColor} />,
            sections: "Sections",
            subTitle: "Divide and conquer.",
            details: "View and choose the sections you want to participate in.",
            handler: sectionsHandler,
        },
    ];

  return (
      <Grid container direction="column">
          <PageTitle align={"center"} title="Welcome to Conference Management Systems!"/>
          <PageContentContainer>
              <Grid container direction="row" justify="center" alignItems="stretch">
                  {pageCards.map((card)=> (
                      <Grid item xs={6} sm={2}>
                          <Box padding={2} style={{height: "100%"}}>
                          <Card onClick={card.handler} style={{height:"100%"}}>
                            <CardActionArea style={{height: "100%"}}>
                                <CardContent>
                                    <Grid
                                        container
                                        alignItems="center"
                                        justify="center"
                                        spacing={1}
                                    >
                                        <Grid item>{card.icon}</Grid>
                                        <Grid item>
                                            <Typography align={"center"} variant={"h5"}>
                                                {card.sections}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <Divider />
                                <CardContent>
                                    <Typography align={"center"}>{card.subTitle}</Typography>
                                    <Typography align={"center"}>{card.details}</Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                          </Box>
                      </Grid>
                      ))}
              </Grid>
          </PageContentContainer>
      </Grid>
  );
};

export default HomePage;
