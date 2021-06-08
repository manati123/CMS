import { RootState } from "../store/reducers";
import { createSelector } from "reselect";
import { conferences } from "../app/Routes/appRoutes";

export const getConferenceState = (state: RootState) => state.conferencesState;

export const getConferences = createSelector(
  getConferenceState,
  (conferencesState) => conferencesState.conferences
);

export const getCurrentConferenceId = createSelector(
  getConferenceState,
  (conferencesState) => conferencesState.currentConferenceId
);

export const getIsGetConferencesLoading = createSelector(
  getConferenceState,
  (conferencesState) => conferencesState.isGetConferencesLoading
);

export const getGetConferencesErrorMessage = createSelector(
  getConferenceState,
  (conferencesState) => conferencesState.getConferencesErrorMessage
);
