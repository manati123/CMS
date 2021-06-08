import { Proposal } from "../models/Proposal";
import { Review } from "../models/Review";
import { ProposalsAction } from "./actions";
import { ActionTypes } from "./actionTypes";

//This is the type of the proposals state.
export type ProposalsState = {
  proposals: Proposal[];
  reviewsForProposal: Review[];
  currentProposal?: Proposal;
  isGetProposalsLoading: boolean;
  getProposalsErrorMessage?: string;
  isGetReviewsLoading: boolean;
  getReviewsErrorMessage?: string;
  isAddProposalLoading: boolean;
  addProposalErrorMessage?: string;
};

//These are the initial value for each field.
export const proposalsInitialState: ProposalsState = {
  proposals: [],
  reviewsForProposal: [],
  currentProposal: undefined,
  isGetProposalsLoading: false,
  getProposalsErrorMessage: undefined,
  isGetReviewsLoading: false,
  getReviewsErrorMessage: undefined,
  isAddProposalLoading: false,
  addProposalErrorMessage: undefined,
};

//These is the reducer. Each dispatched action goes through the switch below and gets matched to a case.
//For Redux to detect state changes and trigger refreshes when needed, we need to replace some objects,
//otherwise it will read it as equal because of the reference.
//Ex: If we want to add an item to an array we don't do:
// return {...state,proposals: state.proposals.push(newProposal)}
//we do:
// return {...state,proposals: [...state.proposals,newProposal]}
//For the first case, it will detect the array as being the same, because it uses shallow checking(comparing the reference).

const proposalsReducer = (
  state: ProposalsState = proposalsInitialState,
  action: ProposalsAction
) => {
  switch (action.type) {
    case ActionTypes.GET_PROPOSALS_START:
      //On START we change the state to indicate that the request is ongoing, hence isLoading=true
      return {
        ...state,
        isGetProposalsLoading: true,
        getProposalsErrorMessage: undefined,
      };
    case ActionTypes.GET_PROPOSALS_SUCCESS:
      //On SUCCESS we load into the state the retrieved proposals.
      return {
        ...state,
        isGetProposalsLoading: false,
        proposals: action.proposals,
      };
    case ActionTypes.GET_PROPOSALS_FAILURE:
      //On FAILURE we put the error message in the state, signaling that there was an error when fetching the data.
      return {
        ...state,
        isGetProposalsLoading: false,
        getProposalsErrorMessage: action.errorMessage,
      };
    case ActionTypes.ADD_PROPOSAL_START:
      //On START we change the state to indicate that the request is ongoing, hence isLoading=true
      return {
        ...state,
        isAddProposalLoading: true,
        addProposalErrorMessage: undefined,
      };
    case ActionTypes.ADD_PROPOSAL_SUCCESS:
      //On SUCCESS we load into the state the retrieved proposals.
      return {
        ...state,
        isAddProposalLoading: false,
        proposals: [...state.proposals, action.proposal],
      };
    case ActionTypes.ADD_PROPOSAL_FAILURE:
      //On FAILURE we put the error message in the state, signaling that there was an error when fetching the data.
      return {
        ...state,
        isAddProposalLoading: false,
        addProposalErrorMessage: action.errorMessage,
      };
    case ActionTypes.GET_REVIEWS_FOR_PROPOSAL_START:
      return {
        ...state,
        getReviewsErrorMessage: undefined,
        isGetReviewsLoading: true,
      };
    case ActionTypes.GET_REVIEWS_FOR_PROPOSAL_SUCCESS:
      return {
        ...state,
        isGetReviewsLoading: false,
        reviewsForProposal: action.reviews,
      };
    case ActionTypes.GET_REVIEWS_FOR_PROPOSAL_FAILURE:
      return {
        ...state,
        getReviewsErrorMessage: action.errorMessage,
        isGetReviewsLoading: false,
      };
    case ActionTypes.SET_CURRENT_PROPOSAL:
      return {
        ...state,
        currentProposal: state.proposals.find(
          (proposal) => proposal.proposalId === action.proposalId
        ),
      };
    default:
      return state;
  }
};

export default proposalsReducer;
