import axios, { AxiosResponse } from "axios";
import { Proposal } from "../models/Proposal";
import { axiosInstance } from "./axiosInstance";

export const getProposalsForConferenceApi = (
  conferenceId: number
): Promise<Proposal[]> => {
  return axiosInstance
    .get(`proposals?conferenceId=${conferenceId}`)
    .then((response: AxiosResponse<Proposal[]>) => {
      return response.data;
    });
};

export const addProposalApi = (
  proposal: Proposal,
  conferenceId: number
): Promise<Proposal> => {
  const requestBody = { ...proposal, conferenceId };
  return axiosInstance
    .post(`proposals`, requestBody)
    .then((response: AxiosResponse<Proposal>) => {
      return response.data;
    });
};
