import { combineReducers } from "redux";
import accountReducer, {
  AccountState,
  accoutInitialState,
} from "../account/reducer";
import proposalsReducer, {
  proposalsInitialState,
  ProposalsState,
} from "../proposals/reducer";
import usersReducer, { usersInitialState, UsersState } from "../users/reducer";
import conferencesReducer, {
  conferencesInitialState,
  ConferencesState,
} from "../conferences/reducer";

export type RootState = {
  accountState: AccountState;
  conferencesState: ConferencesState;
  proposalsState: ProposalsState;
  usersState: UsersState;
};

export const initialRootState: RootState = {
  accountState: accoutInitialState,
  conferencesState: conferencesInitialState,
  proposalsState: proposalsInitialState,
  usersState: usersInitialState,
};

export const rootReducer = combineReducers<RootState>({
  accountState: accountReducer,
  conferencesState: conferencesReducer,
  proposalsState: proposalsReducer,
  usersState: usersReducer,
});
