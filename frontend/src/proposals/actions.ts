import { Proposal } from "../models/Proposal";
import { Review } from "../models/Review";
import { ActionTypes } from "./actionTypes";

export type GetProposalsStart = {
  type: ActionTypes.GET_PROPOSALS_START;
};

export type GetProposalsSuccess = {
  type: ActionTypes.GET_PROPOSALS_SUCCESS;
  proposals: Proposal[];
};

export type GetProposalsFailure = {
  type: ActionTypes.GET_PROPOSALS_FAILURE;
  errorMessage: string;
};

//We make START, SUCCESS and FAILURE actions.
//An action is an object ex:
// {
//   type: ActionTypes.GET_PROPOSALS_FAILURE,
//   errorMessage: "No internet"
// }
//An action creator is a function returning an action:

export const getProposalsStart = (): GetProposalsStart => ({
  type: ActionTypes.GET_PROPOSALS_START,
});

//Action creators can have parameters, allowing us to get data into the reducer.
//Remember that each dispatched action ends up in a reducer and we can access the action's fields.
export const getProposalsSuccess = (
  proposals: Proposal[]
): GetProposalsSuccess => ({
  type: ActionTypes.GET_PROPOSALS_SUCCESS,
  proposals,
});

export const getProposalsFailure = (
  errorMessage: string
): GetProposalsFailure => ({
  type: ActionTypes.GET_PROPOSALS_FAILURE,
  errorMessage,
});

export type SetCurrentProposal = {
  type: ActionTypes.SET_CURRENT_PROPOSAL;
  proposalId: number;
};

export const setCurrentProposal = (proposalId: number): SetCurrentProposal => ({
  type: ActionTypes.SET_CURRENT_PROPOSAL,
  proposalId,
});

export type GetReviewsForProposalStart = {
  type: ActionTypes.GET_REVIEWS_FOR_PROPOSAL_START;
};

export type GetReviewsForProposalSuccess = {
  type: ActionTypes.GET_REVIEWS_FOR_PROPOSAL_SUCCESS;
  reviews: Review[];
};

export type GetReviewsForProposalFailure = {
  type: ActionTypes.GET_REVIEWS_FOR_PROPOSAL_FAILURE;
  errorMessage: string;
};

export const getReviewsForProposalStart = (): GetReviewsForProposalStart => ({
  type: ActionTypes.GET_REVIEWS_FOR_PROPOSAL_START,
});

//Action creators can have parameters, allowing us to get data into the reducer.
//Remember that each dispatched action ends up in a reducer and we can access the action's fields.
export const getReviewsForProposalSuccess = (
  reviews: Review[]
): GetReviewsForProposalSuccess => ({
  type: ActionTypes.GET_REVIEWS_FOR_PROPOSAL_SUCCESS,
  reviews,
});

export const getReviewsForProposalFailure = (
  errorMessage: string
): GetReviewsForProposalFailure => ({
  type: ActionTypes.GET_REVIEWS_FOR_PROPOSAL_FAILURE,
  errorMessage,
});

export type AddProposalStart = {
  type: ActionTypes.ADD_PROPOSAL_START;
};

export type AddProposalSuccess = {
  type: ActionTypes.ADD_PROPOSAL_SUCCESS;
  proposal: Proposal;
};

export type AddProposalFailure = {
  type: ActionTypes.ADD_PROPOSAL_FAILURE;
  errorMessage: string;
};

export const addProposalStart = (): AddProposalStart => ({
  type: ActionTypes.ADD_PROPOSAL_START,
});

//Action creators can have parameters, allowing us to get data into the reducer.
//Remember that each dispatched action ends up in a reducer and we can access the action's fields.
export const addProposalSuccess = (proposal: Proposal): AddProposalSuccess => ({
  type: ActionTypes.ADD_PROPOSAL_SUCCESS,
  proposal,
});

export const addProposalFailure = (
  errorMessage: string
): AddProposalFailure => ({
  type: ActionTypes.ADD_PROPOSAL_FAILURE,
  errorMessage,
});

export type ProposalsAction =
  | GetProposalsStart
  | GetProposalsSuccess
  | GetProposalsFailure
  | SetCurrentProposal
  | GetReviewsForProposalStart
  | GetReviewsForProposalSuccess
  | GetReviewsForProposalFailure
  | AddProposalStart
  | AddProposalSuccess
  | AddProposalFailure;
