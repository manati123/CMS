import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { User } from "../models/User";
import { changeAuthoritiesApi, signInApi } from "../services/account.service";
import { RootState } from "../store/reducers";
import {
  changeAuthoritiesFailure,
  changeAuthoritiesStart,
  changeAuthoritiesSuccess,
  signInFailure,
  signInStart,
  signInSuccess,
} from "./actions";

export const signInThunk =
  (
    username: string,
    password: string
  ): ThunkAction<void, RootState, unknown, Action> =>
  async (dispatch) => {
    dispatch(signInStart());
    try {
      const user: User = await signInApi(username, password);
      if (user) dispatch(signInSuccess(user));
    } catch (error: any) {
      dispatch(signInFailure(error));
    }
  };

export const changeAuthoritiesThunk =
  (conferenceId: number): ThunkAction<void, RootState, unknown, Action> =>
  async (dispatch) => {
    dispatch(changeAuthoritiesStart());
    try {
      const newRoles = await changeAuthoritiesApi(conferenceId);

      dispatch(changeAuthoritiesSuccess(newRoles));
    } catch (error: any) {
      dispatch(changeAuthoritiesFailure(error));
    }
  };
