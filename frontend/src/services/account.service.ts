import axios, { AxiosResponse } from "axios";
import { CurrentUser, Roles, User } from "../models/User";
import { axiosInstance } from "./axiosInstance";

export const signInApi = (
  username: string,
  password: string
): Promise<User> => {
  return axiosInstance
    .post("users/login", { username, password })
    .then((res: AxiosResponse<User>) => {
      console.log(res.data);
      return res.data;
    });
  //the login for the login request will go here
};

export const changeAuthoritiesApi = (
  conferenceId: number
): Promise<Roles[]> => {
  return axiosInstance
    .get(`app/conferenceAuthorities?conferenceId=${conferenceId}`)
    .then((res: AxiosResponse<Roles[]>) => {
      console.log(res.data);
      return res.data;
    });
  //the login for the login request will go here
};
