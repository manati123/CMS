import { Roles, User } from "../models/User";
import { ActionTypes } from "./actionTypes";

export type GetUsersStart = {
  type: typeof ActionTypes.GET_USERS_START;
};

export type GetUsersSuccess = {
  type: typeof ActionTypes.GET_USERS_SUCCESS;
  users: User[];
};

export type GetUsersFailure = {
  type: typeof ActionTypes.GET_USERS_FAILURE;
  error?: string;
};

export const getUsersStart = (): GetUsersStart => {
  return {
    type: ActionTypes.GET_USERS_START,
  };
};

export const getUsersSuccess = (users: User[]): GetUsersSuccess => {
  return {
    type: ActionTypes.GET_USERS_SUCCESS,
    users: users,
  };
};

export const getUsersFailure = (error: string): GetUsersFailure => {
  return {
    type: ActionTypes.GET_USERS_FAILURE,
    error: error,
  };
};

export type UserAction = GetUsersStart | GetUsersSuccess | GetUsersFailure;
