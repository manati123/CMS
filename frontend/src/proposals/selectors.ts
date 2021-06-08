import { createSelector } from "reselect";
import { RootState } from "../store/reducers";

export const getProposalsState = (state: RootState) => state.proposalsState;
//These selectors are kinda simillar to getters.
export const getProposals = createSelector(
  getProposalsState,
  (proposalsState) => proposalsState.proposals
);

export const getCurrentProposal = createSelector(
  getProposalsState,
  (proposalsState) => proposalsState.currentProposal
);

export const getReviewsForCurrentProposal = createSelector(
  getProposalsState,
  (proposalsState) => proposalsState.reviewsForProposal
);
export const getReviewerIds = createSelector(
  getProposalsState,
  (proposalsState) =>
    proposalsState.reviewsForProposal.map((review) => review.reviewerId)
);

export const getProposal = (proposalId: number) =>
  createSelector(getProposalsState, (proposalsState) =>
    proposalsState.proposals.find(
      (proposal) => proposal.proposalId === proposalId
    )
  );
