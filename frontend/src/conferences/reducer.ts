import { Conference } from "../models/Conference";
import { Proposal } from "../models/Proposal";
import { Review } from "../models/Review";
import { ConferencesAction } from "./actions";
import { ActionTypes } from "./actionTypes";

export type ConferencesState = {
  conferences: Conference[];
  currentConferenceId: number;
  isGetConferencesLoading: boolean;
  getConferencesErrorMessage?: string;
};

export const conferencesInitialState: ConferencesState = {
  conferences: [],
  currentConferenceId: 0,
  isGetConferencesLoading: false,
  getConferencesErrorMessage: undefined,
};

const conferencesReducer = (
  state: ConferencesState = conferencesInitialState,
  action: ConferencesAction
) => {
  switch (action.type) {
    case ActionTypes.GET_CONFERENCES_START:
      return {
        ...state,
        isGetConferencesLoading: true,
        getConferencesErrorMessage: undefined,
      };
    case ActionTypes.GET_CONFERENCES_SUCCESS:
      return {
        ...state,
        isGetConferencesLoading: false,
        conferences: action.conferences,
      };
    case ActionTypes.GET_CONFERENCES_FAILURE:
      return {
        ...state,
        isGetConferencesLoading: false,
        getConferencesErrorMessage: action.errorMessage,
      };
    case ActionTypes.SET_CURRENT_CONFERENCE_ID:
      return {
        ...state,
        currentConferenceId: action.id,
      };
    default:
      return state;
  }
};

export default conferencesReducer;
