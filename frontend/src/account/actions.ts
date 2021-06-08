import { ActionTypes } from "./actionTypes";
import { Roles, User } from "../models/User";

export type SignInStart = {
  type: ActionTypes.SIGN_IN_START;
};

export type SignInSuccess = {
  type: ActionTypes.SIGN_IN_SUCCESS;
  user: User;
};

export type SignInFailure = {
  type: ActionTypes.SIGN_IN_FAILURE;
  errorMessage: string;
};

export const signInStart = (): SignInStart => ({
  type: ActionTypes.SIGN_IN_START,
});

export const signInSuccess = (user: User): SignInSuccess => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  user,
});

export const signInFailure = (errorMessage: string): SignInFailure => ({
  type: ActionTypes.SIGN_IN_FAILURE,
  errorMessage,
});

export type ChangeAuthoritiesStart = {
  type: ActionTypes.CHANGE_AUTHORITIES_START;
};

export type ChangeAuthoritiesSuccess = {
  type: ActionTypes.CHANGE_AUTHORITIES_SUCCESS;
  newRoles: Roles[];
};

export type ChangeAuthoritiesFailure = {
  type: ActionTypes.CHANGE_AUTHORITIES_FAILURE;
  errorMessage: string;
};

export const changeAuthoritiesStart = (): ChangeAuthoritiesStart => ({
  type: ActionTypes.CHANGE_AUTHORITIES_START,
});

export const changeAuthoritiesSuccess = (
  newRoles: Roles[]
): ChangeAuthoritiesSuccess => ({
  type: ActionTypes.CHANGE_AUTHORITIES_SUCCESS,
  newRoles,
});

export const changeAuthoritiesFailure = (
  errorMessage: string
): ChangeAuthoritiesFailure => ({
  type: ActionTypes.CHANGE_AUTHORITIES_FAILURE,
  errorMessage,
});

export type AddUserRole = {
  type: typeof ActionTypes.ADD_USER_ROLE;
  role: Roles;
};

export const addUserRole = (role: Roles): AddUserRole => {
  return {
    type: ActionTypes.ADD_USER_ROLE,
    role: role,
  };
};

export type AccountAction =
  | SignInStart
  | SignInSuccess
  | SignInFailure
  | ChangeAuthoritiesStart
  | ChangeAuthoritiesSuccess
  | ChangeAuthoritiesFailure
  | AddUserRole;
