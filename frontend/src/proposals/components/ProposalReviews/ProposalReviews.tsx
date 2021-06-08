import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import ResultLabel from "../../../common/components/ResultLabel/ResultLabel";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { useStyles } from "./styles";

interface Props {
  reviews: Review[];
  reviewers: User[];
}

const ProposalReviews = ({ reviews, reviewers }: Props) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <Box padding={4} paddingLeft={2}>
        <Grid container direction="column" spacing={2}>
          <Grid item container spacing={4}>
            <Grid item xs={3}>
              <Typography className={classes.headers}>Reviewer</Typography>
            </Grid>
            <Grid item xs>
              <Typography className={classes.headers}>Verdict</Typography>
            </Grid>
          </Grid>
          <Divider />
          {reviews.map((review) => {
            const reviewer = reviewers.find(
              (reviewer) => reviewer.userId === review.reviewerId
            );
            return (
              <Grid key={review.reviewId} item container spacing={4}>
                <Grid item xs={3}>
                  <Typography>{reviewer?.username ?? "Unknown"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <ResultLabel key={review.reviewId} result={review.result} />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProposalReviews;
