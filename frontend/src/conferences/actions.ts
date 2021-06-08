import { Conference } from "../models/Conference";
import { ActionTypes } from "./actionTypes";

export type GetConferencesStart = {
  type: ActionTypes.GET_CONFERENCES_START;
};

export type GetConferencesSuccess = {
  type: ActionTypes.GET_CONFERENCES_SUCCESS;
  conferences: Conference[];
};

export type GetConferencesFailure = {
  type: ActionTypes.GET_CONFERENCES_FAILURE;
  errorMessage: string;
};

export const getConferencesStart = (): GetConferencesStart => ({
  type: ActionTypes.GET_CONFERENCES_START,
});

export const getConferencesSuccess = (
  conferences: Conference[]
): GetConferencesSuccess => ({
  type: ActionTypes.GET_CONFERENCES_SUCCESS,
  conferences,
});

export const getConferencesFailure = (
  errorMessage: string
): GetConferencesFailure => ({
  type: ActionTypes.GET_CONFERENCES_FAILURE,
  errorMessage,
});

export type SetCurrentConferenceId = {
  type: ActionTypes.SET_CURRENT_CONFERENCE_ID;
  id: number;
};

export const setCurrentConferenceId = (id: number): SetCurrentConferenceId => ({
  type: ActionTypes.SET_CURRENT_CONFERENCE_ID,
  id,
});

export type ConferencesAction =
  | GetConferencesStart
  | GetConferencesSuccess
  | GetConferencesFailure
  | SetCurrentConferenceId;
