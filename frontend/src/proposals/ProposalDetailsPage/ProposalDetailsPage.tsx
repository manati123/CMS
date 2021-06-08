import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import PageTitle from "../../common/components/PageTitle/PageTitle";
import { useComponentWillMount } from "../../common/customHooks/useComponentWillMount";
import { setCurrentProposal } from "../actions";
import { getCurrentProposal, getReviewsForCurrentProposal } from "../selectors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PageContainer from "../../common/components/PageContentContainer/PageContentContainer";
import { useStyles } from "./styles";
import { redirectToProposals } from "../../app/Routes/routingHelpers";
import UsersAvatarGroup from "../../common/components/UsersAvatarGroup/UsersAvatarGroup";
import ProposalInformation from "../components/ProposalInformation/ProposalInformation";
import ProposalPdf from "../components/ProposalPdf/ProposalPdf";
import { getReviewsForProposalThunk } from "../thunks";
import ProposalReviews from "../components/ProposalReviews/ProposalReviews";
import {
  getAuthorsForProposal,
  getReviewersForCurrentProposal,
} from "../../users/selectors";
import AddReviewForm from "../components/AddReviewForm/AddReviewForm";
import ConferenceForm from "../../conferences/components/ConferenceForm/ConferenceForm";
import React from "react";
import {getCurrentUserRoles} from "../../account/selectors";
import {Roles} from "../../models/User";

interface Props {}

const ProposalDetailsPage = (props: Props) => {
  const currentProposal = useSelector(getCurrentProposal);
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const reviews = useSelector(getReviewsForCurrentProposal);
  const authors = useSelector(
    getAuthorsForProposal(currentProposal ? currentProposal.proposalId : -1)
  );
  const reviewers = useSelector(getReviewersForCurrentProposal);

  const roles = useSelector(getCurrentUserRoles);
  //console.log(roles);
  const isCommitteeMember = (typeof roles !=='undefined' && roles.includes(Roles.COMMITTEE_MEMBER));

  useComponentWillMount(() => {
    console.log("asd");
    dispatch(setCurrentProposal(parseInt(params.id)));
    dispatch(getReviewsForProposalThunk(parseInt(params.id)));
  });

  if (!currentProposal)
    return (
      <Grid container justify="center">
        <CircularProgress color="primary" />
      </Grid>
    );

  const { keywords, topics } = currentProposal;

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        className={classes.paddingLeft}
        wrap="nowrap"
        alignItems="center"
      >
        <Grid item container>
          <IconButton onClick={() => redirectToProposals(history)}>
            <ArrowBackIcon />
          </IconButton>
          <PageTitle title={currentProposal.name} />
        </Grid>
        <Grid item container justify="flex-end" alignItems="center">
          <Box paddingRight={1}>
            <PageTitle title="Authors: " />
          </Box>
          <UsersAvatarGroup users={authors} />
        </Grid>
        <Grid xs={1} item />
      </Grid>
      <Divider />

      <PageContainer>
        <Grid container spacing={2}>
          <Grid item container xs={6} direction="column">
            <Grid item className={classes.marginBottom}>
              <ProposalInformation keywords={keywords} topics={topics} />
            </Grid>
            <Grid item className={classes.marginBottom}>
              <ProposalReviews reviews={reviews} reviewers={reviewers} />
            </Grid>
            <Grid item>
              {currentProposal && isCommitteeMember ? <AddReviewForm proposalId={currentProposal.proposalId}/> : null}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <ProposalPdf />
          </Grid>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default ProposalDetailsPage;
