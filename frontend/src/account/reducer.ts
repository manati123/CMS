import { AccountAction } from "./actions";
import { ActionTypes } from "./actionTypes";
import { CurrentUser, Roles } from "../models/User";

export type AccountState = {
  currentUser?: CurrentUser;
  currentUserRoles?: Roles[];
  isSignInLoading: boolean;
  isChangeAuthoritiesLoading: boolean;
  signInErrorMessage?: string;
  changeAuthoritiesMessage?: string;
};

export const accoutInitialState: AccountState = {
  currentUser: undefined,
  currentUserRoles: undefined,
  isSignInLoading: false,
  isChangeAuthoritiesLoading: false,
  signInErrorMessage: undefined,
  changeAuthoritiesMessage: undefined,
};

const accountReducer = (
  state: AccountState = accoutInitialState,
  action: AccountAction
) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_START:
      return { ...state, isSignInLoading: true, signInErrorMessage: undefined };
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignInLoading: false,
        currentUser: {
          username: action.user.username,
          userId: action.user.userId,
        },
        currentUserRoles: action.user.roles,
      };
    case ActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isSignInLoading: false,
        signInErrorMessage: action.errorMessage,
      };
    case ActionTypes.CHANGE_AUTHORITIES_START:
      return {
        ...state,
        isChangeAuthoritiesLoading: true,
        changeAuthoritiesMessage: undefined,
      };
    case ActionTypes.CHANGE_AUTHORITIES_SUCCESS:
      return {
        ...state,
        isChangeAuthoritiesLoading: false,
        currentUserRoles: action.newRoles!,
      };
    case ActionTypes.CHANGE_AUTHORITIES_FAILURE:
      return {
        ...state,
        isChangeAuthoritiesLoading: false,
        changeAuthoritiesMessage: action.errorMessage,
      };
    case ActionTypes.ADD_USER_ROLE:
      return {
        ...state,
        currentUserRoles: state.currentUserRoles?.includes(action.role)
          ? state.currentUserRoles
          : [...state.currentUserRoles!, action.role],
      };
    default:
      return state;
  }
};

export default accountReducer;
