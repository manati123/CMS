import { createSelector } from "reselect";
import { RootState } from "../store/reducers";

export const getAccoutState = (state: RootState) => state.accountState;

export const getCurrentUser = createSelector(
  getAccoutState,
  (accout) => accout.currentUser
);

export const getCurrentUserId = createSelector(
  getAccoutState,
  (accout) => accout.currentUser?.userId
);

export const getCurrentUserRoles = createSelector(
  getAccoutState,
  (account) => account.currentUserRoles
);
