export type User = {
  username: string;
  roles: Roles[];
  userId: number;
};

export type CurrentUser = {
  username: string;
  userId: number;
};

export enum Roles {
  ADMIN = "ADMIN",
  COMMITTEE_MEMBER = "COMMITTEE_MEMBER",
  AUTHOR = "AUTHOR",
  USER = "USER",
}
