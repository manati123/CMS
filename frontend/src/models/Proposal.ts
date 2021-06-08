import { User } from "./User";

export type Proposal = {
  proposalId: number;
  name: string;
  paper: string;
  keywords: string[];
  topics: string[];
  authorsId: number[];
};
