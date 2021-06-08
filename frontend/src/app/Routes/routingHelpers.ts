import { History } from "history";
import * as appRoutes from "./appRoutes";

export const redirectToLogin = (history: History) => {
  history.push(appRoutes.login);
};

export const redirectToRegister = (history: History) => {
  history.push(appRoutes.register);
};

export const redirectToHome = (history: History) => {
  history.push(appRoutes.home);
};

export const redirectToProfile = (history: History) => {
  history.push(appRoutes.profile);
};

export const redirectToProposals = (history: History) => {
  history.push(appRoutes.proposals);
};

export const redirectToSchedule = (history: History) => {
  history.push(appRoutes.schedule);
};

export const redirectToSections = (history: History) => {
  history.push(appRoutes.sections);
};

export const redirectToConferences = (history: History) => {
  history.push(appRoutes.conferences);
};

export const redirectToProposalDetails = (
  history: History,
  proposalId: number
) => {
  history.push(appRoutes.proposals + `/${proposalId}`);
};
