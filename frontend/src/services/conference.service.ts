import { AxiosResponse } from "axios";
import { Conference } from "../models/Conference";
import { axiosInstance } from "./axiosInstance";
import {conferences} from "../app/Routes/appRoutes";

export const getConferencesApi = (): Promise<Conference[]> => {
  return axiosInstance
    .get("conferences")
    .then((response: AxiosResponse<Conference[]>) => {
      return response.data;
    });
};

export const addConferenceApi = (conference: Conference): Promise<any> =>{
    return axiosInstance.post("conferences", conference);
}
