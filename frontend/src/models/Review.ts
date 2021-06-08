export type Review = {
  reviewId: number;
  result: ReviewResult;
  reviewerId: number;
};

export enum ReviewResult {
  STRONG_ACCEPT = "Strong accept",
  ACCEPT = "Accept",
  BORDERLINE_PAPER = "Borderline paper",
  WEAK_REJECT = "Weak reject",
  REJECT = "Reject",
}
