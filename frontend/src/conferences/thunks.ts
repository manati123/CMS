import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { changeAuthoritiesThunk } from "../account/thunks";
import { Conference } from "../models/Conference";
import { getProposalsForConferenceThunk } from "../proposals/thunks";
import {
  addConferenceApi,
  getConferencesApi,
} from "../services/conference.service";
import { RootState } from "../store/reducers";
import {
  getConferencesFailure,
  getConferencesStart,
  getConferencesSuccess,
  setCurrentConferenceId,
} from "./actions";

export const getConferencesThunk =
  (): ThunkAction<void, RootState, unknown, Action> => async (dispatch) => {
    dispatch(getConferencesStart());
    try {
      const conferences: Conference[] = await getConferencesApi();
      dispatch(getConferencesSuccess(conferences));
      dispatch(setCurrentConferenceThunk(conferences[0].conferenceId));
    } catch (error: any) {
      dispatch(getConferencesFailure((error as Error).message));
    }
  };

export const setCurrentConferenceThunk =
  (conferenceId: number): ThunkAction<void, RootState, unknown, Action> =>
  async (dispatch) => {
    dispatch(changeAuthoritiesThunk(conferenceId));
    dispatch(getProposalsForConferenceThunk(conferenceId));
    dispatch(setCurrentConferenceId(conferenceId));
  };

export const createConferenceThunk =
  (
    name: string,
    proposalDeadline: number,
    reviewDeadline: number
  ): ThunkAction<void, RootState, unknown, Action> =>
  async (dispatch) => {
    try {
      const conference: Conference = {
        conferenceId: 0,
        name: name,
        proposalDeadline: proposalDeadline,
        reviewDeadline: reviewDeadline,
      };
      await addConferenceApi(conference);
      dispatch(getConferencesThunk());
    } catch (error: any) {}
  };
