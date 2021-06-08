import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageContentContainer from "../../common/components/PageContentContainer/PageContentContainer";
import PageTitle from "../../common/components/PageTitle/PageTitle";
import AddProposalDrawer from "../components/AddProposalDrawer/AddProposalDrawer";
import ProposalsList from "../components/ProposalsList/ProposalsList";
import { getProposals } from "../selectors";

const ProposalsPage = () => {
  //We select the state with useUelector. As a parameter we give it a selector.
  //Each time the selected data from the state changes, the component re-renders.
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const proposals = useSelector(getProposals);

  return (
    <Grid container direction="column">
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <PageTitle title="Proposals" />
        </Grid>
        <Grid item>
          <Box paddingRight={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Typography>Add proposal</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <PageContentContainer>
        <ProposalsList proposals={proposals} />
      </PageContentContainer>
      <AddProposalDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </Grid>
  );
};

export default ProposalsPage;
