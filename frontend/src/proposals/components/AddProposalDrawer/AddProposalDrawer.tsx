import {Box, Button, Divider, Drawer, FormControl, Grid, TextField, Typography,} from "@material-ui/core";
import {useState} from "react";
import PageTitle from "../../../common/components/PageTitle/PageTitle";
import {useStyles} from "./styles";
import KeywordsSection from "./components/KeywordsSection/KeywordsSection";
import TopicsSection from "./components/TopicsSection/TopicsSection";
import {useDispatch, useSelector} from "react-redux";
import {addProposalThunk} from "../../thunks";
import { getCurrentUserId} from "../../../account/selectors";

interface Props {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export type ErrorStatusAddProposal = {
  proposalName: boolean;
  topics: boolean;
  keywords: boolean;
};

type FormInputs = {
  proposalName: string;
  topics: string[];
  keywords: string[];
};

const AddProposalDrawer = ({ open, setOpen }: Props) => {
  const [proposalName, setProposalName] = useState("");
  const [currentTopic, setCurrentTopic] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const dispatch = useDispatch();
  const [keywords, setKeywords] = useState<string[]>([]);
  const userId = useSelector(getCurrentUserId);
  const [errorStatus, setErrorStatus] = useState<ErrorStatusAddProposal>({
    proposalName: false,
    topics: false,
    keywords: false,
  });
  const classes = useStyles();
  const handleAdd = () => {
    var futureErrorState = {};
    if (proposalName === "")
      futureErrorState = { ...futureErrorState, proposalName: true };

    if (topics.length == 0)
      futureErrorState = { ...futureErrorState, topics: true };

    if (keywords.length == 0)
      futureErrorState = { ...futureErrorState, keywords: true };
    console.log("GEre");

    if (!Object.values(futureErrorState).includes(true)) {
      console.log("Dispatching");
      dispatch(
        addProposalThunk({
          name: proposalName,
          keywords,
          topics,
          authorsId: [userId!],
          proposalId: -1,
          paper: "",
        })
      );
      setOpen(false);
    } else {
      setErrorStatus({ ...errorStatus, ...futureErrorState });
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      classes={{ paper: classes.paper }}
    >
      <Box paddingY={0.5}>
        <PageTitle title="Add Proposal" />
      </Box>
      <Divider />

      <Box padding={2} height="100%">
        <Grid
          container
          direction="column"
          justify="space-between"
          spacing={1}
          className={classes.fullHeight}
        >
          <Grid item container direction="column">
            <Grid item className={classes.marginBottom}>
              <FormControl>
                <TextField
                  autoFocus
                  required
                  variant="outlined"
                  label="Proposal name"
                  name="proposalName"
                  type="text"
                  onChange={(e) => {
                    {
                      if (errorStatus.proposalName)
                        setErrorStatus({ ...errorStatus, proposalName: false });

                      setProposalName(e.target.value);
                    }
                  }}
                />
              </FormControl>
              {errorStatus.proposalName && (
                <Typography className={classes.error}>
                  This field is mandatory
                </Typography>
              )}
            </Grid>
            <Grid item className={classes.marginBottom}>
              <TopicsSection
                setCurrentTopic={setCurrentTopic}
                currentTopic={currentTopic}
                topics={topics}
                setTopics={setTopics}
                errorStatus={errorStatus}
                setErrorStatus={setErrorStatus}
              />
            </Grid>
            <Grid item className={classes.marginBottom}>
              <KeywordsSection
                keywords={keywords}
                setKeywords={setKeywords}
                currentKeyword={currentKeyword}
                setCurrentKeyword={setCurrentKeyword}
                errorStatus={errorStatus}
                setErrorStatus={setErrorStatus}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Button
                color="primary"
                fullWidth
                variant="outlined"
                size="medium"
                form="login-form"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                color="primary"
                fullWidth
                variant="contained"
                size="medium"
                form="add-proposal-form"
                onClick={handleAdd}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default AddProposalDrawer;
