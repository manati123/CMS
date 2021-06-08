import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Proposal } from "../models/Proposal";
import { Review, ReviewResult } from "../models/Review";
import {
  addProposalApi,
  getProposalsForConferenceApi,
} from "../services/proposals.service";
import { RootState } from "../store/reducers";
import {
  getProposalsStart,
  getProposalsSuccess,
  getProposalsFailure,
  getReviewsForProposalSuccess,
  getReviewsForProposalStart,
  getReviewsForProposalFailure,
  addProposalStart,
  addProposalSuccess,
  addProposalFailure,
} from "./actions";
import {addReviewApi, getReviewsForProposalApi} from "../services/reviews.service";
import { getCurrentConferenceId } from "../conferences/selectors";
import { addUserRole } from "../account/actions";
import { Roles } from "../models/User";

//A thunk is a function that can dispatch actions.
//The difference from a different function is that we can dispatch a thunk.
//dispatch(getProposalsThunk())
export const getProposalsForConferenceThunk =
  (conferenceId: number): ThunkAction<void, RootState, unknown, Action> =>
  async (dispatch) => {
    //With this we signal the start of the api operation.
    dispatch(getProposalsStart());
    try {
      const proposals: Proposal[] = await getProposalsForConferenceApi(
        conferenceId
      );
      //After gettingh the data we signal the success of the api call and send it to the reducer in order to be processed.

      dispatch(getProposalsSuccess(proposals));
    } catch (error: any) {
      //If there are errors we send these to the reducer too.
      dispatch(getProposalsFailure((error as Error).message));
    }
  };

export const getReviewsForProposalThunk =
  (proposalId: number): ThunkAction<void, RootState, unknown, Action> =>
  async (dispatch) => {
    //With this we signal the start of the api operation.

    dispatch(getReviewsForProposalStart());
    try {
      const reviews: Review[] = await getReviewsForProposalApi(proposalId);
      //After gettingh the data we signal the success of the api call and send it to the reducer in order to be processed.
      dispatch(getReviewsForProposalSuccess(reviews));
    } catch (error: any) {
      //If there are errors we send these to the reducer too.
      dispatch(getReviewsForProposalFailure((error as Error).message));
    }
  };

export const addProposalThunk =
  (proposal: Proposal): ThunkAction<void, RootState, unknown, Action> =>
  async (dispatch, getState) => {
    //With this we signal the start of the api operation.
    const conferenceId = getCurrentConferenceId(getState());

    dispatch(addProposalStart());
    try {
      const newProposal: Proposal = await addProposalApi(
        proposal,
        conferenceId
      );
      dispatch(addUserRole(Roles.AUTHOR));
      //After gettingh the data we signal the success of the api call and send it to the reducer in order to be processed.
      dispatch(addProposalSuccess(newProposal));
    } catch (error: any) {
      //If there are errors we send these to the reducer too.
      dispatch(addProposalFailure((error as Error).message));
    }
  };

export const addReviewThunk =
    (proposalId: number, review: Review): ThunkAction<void, RootState, unknown, Action> =>
    async (dispatch, getState) => {
        try {
            await addReviewApi(proposalId, review);
        } catch (error: any) {
            dispatch(getReviewsForProposalThunk(proposalId));
        }
    };
