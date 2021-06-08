import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Roles, User } from "../models/User";
import { getUsersApi } from "../services/users.service";
import { RootState } from "../store/reducers";
import { getUsersFailure, getUsersStart, getUsersSuccess } from "./actions";

export const getUsersThunk =
  (): ThunkAction<void, RootState, unknown, Action> => async (dispatch) => {
    //With this we signal the start of the api operation.
    dispatch(getUsersStart());
    try {
      const proposals: User[] = await getUsersApi();
      //After getting the data we signal the success of the api call and send it to the reducer in order to be processed.

      dispatch(getUsersSuccess(proposals));
    } catch (error: any) {
      //If there are errors we send these to the reducer too.
      dispatch(getUsersFailure((error as Error).message));
    }
  };
