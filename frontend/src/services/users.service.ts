import { AxiosResponse } from "axios";
import { User } from "../models/User";
import { axiosInstance } from "./axiosInstance";

export const getUsersApi = (): Promise<User[]> => {
  return axiosInstance.get("users").then((response: AxiosResponse<User[]>) => {
    return response.data;
  });
};
