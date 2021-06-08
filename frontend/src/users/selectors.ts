import { createSelector } from "reselect";
import {
  getProposal,
  getProposalsState,
  getReviewerIds,
  getReviewsForCurrentProposal,
} from "../proposals/selectors";
import { RootState } from "../store/reducers";

export const getUsersState = (state: RootState) => state.usersState;

export const getAuthorsForProposal = (proposalId: number) =>
  createSelector(
    [getUsersState, getProposal(proposalId)],
    (usersState, proposal) =>
      usersState.users.filter((user) => {
        console.log(user.userId, proposal?.authorsId);
        return proposal?.authorsId.includes(user.userId);
      })
  );

export const getReviewersForCurrentProposal = createSelector(
  [getUsersState, getReviewerIds],
  (usersState, reviewerIds) =>
    usersState.users.filter((user) => reviewerIds.includes(user.userId))
);
