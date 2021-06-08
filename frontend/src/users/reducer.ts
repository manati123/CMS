import { Roles, User } from "../models/User";
import { UserAction } from "./actions";
import { ActionTypes } from "./actionTypes";

export type UsersState = {
  users: User[];
  isGetUsersLoading: boolean;
  getUsersError?: string;
};

export const usersInitialState: UsersState = {
  users: [],
  isGetUsersLoading: false,
  getUsersError: undefined,
};

const usersReducer = (
  state: UsersState = usersInitialState,
  action: UserAction
) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_START:
      return {
        ...state,
        loading: true,
        getUsersError: undefined,
      };
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    default:
      return state;
  }
};

export default usersReducer;
