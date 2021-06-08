import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

interface Props {
  keywords: string[];
  topics: string[];
}

const ProposalInformation = ({ keywords, topics }: Props) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.padding}>
      <Grid container direction="column">
        <Grid item className={classes.marginBottom}>
          <Typography variant="h6">Topics</Typography>
          <Typography>{topics.join(", ")}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Keywords</Typography>
          <Typography>{keywords.join(", ")}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProposalInformation;
