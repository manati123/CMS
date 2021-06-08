import axios, { AxiosResponse } from "axios";
import { Review } from "../models/Review";
import { axiosInstance } from "./axiosInstance";

export const getReviewsForProposalApi = (
  proposalId: number
): Promise<Review[]> => {
  return axiosInstance
    .get(`reviews?proposalId=${proposalId}`)
    .then((response: AxiosResponse<Review[]>) => {
      return response.data;
    });
};

export const addReviewApi = (
    proposalId: number,
    review: Review
): Promise<any> => {
    return axiosInstance.post(`reviews?proposalId=${proposalId}`);
}
