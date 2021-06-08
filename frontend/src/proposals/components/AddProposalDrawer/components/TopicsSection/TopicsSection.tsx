import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Box,
  useTheme,
} from "@material-ui/core";

import StringListDisplayer from "../StringListDisplayer/StringListDisplayer";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { ErrorStatusAddProposal } from "../../AddProposalDrawer";
import { useStyles } from "../../styles";
interface Props {
  currentTopic: string;
  setCurrentTopic: (newTopic: string) => void;
  topics: string[];
  setTopics: (newTopics: string[]) => void;
  errorStatus: ErrorStatusAddProposal;
  setErrorStatus: (newErrorStatus: ErrorStatusAddProposal) => void;
}

const KeywordsSection = ({
  currentTopic,
  setCurrentTopic,
  topics,
  setTopics,
  errorStatus,
  setErrorStatus,
}: Props) => {
  const theme = useTheme();
  const classes = useStyles(); //styles for add proposals
  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel htmlFor="topics">Topic</InputLabel>
        <OutlinedInput
          name="topics"
          type="text"
          onChange={(e) => setCurrentTopic(e.target.value)}
          label="Topic"
          value={currentTopic}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  if (currentTopic !== "" && !topics.includes(currentTopic)) {
                    setTopics([...topics, currentTopic]);
                    setErrorStatus({ ...errorStatus, topics: false });
                    setCurrentTopic("");
                  }
                }}
                edge="end"
              >
                <AddCircleOutlineIcon color="primary" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {errorStatus.topics && (
        <Typography className={classes.error}>
          At least one topic must be provided
        </Typography>
      )}
      <Typography className={classes.groupHeader}>Topics:</Typography>
      <Box border={1} className={classes.sectionContainer}>
        {topics.length ? (
          <StringListDisplayer
            removeString={(removedTopic) => {
              setTopics(
                topics.filter((topic) =>
                  topic !== removedTopic ? true : false
                )
              );
            }}
            stringList={topics}
          />
        ) : (
          <Typography className={classes.textGray} align="center">
            No topics added yet
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default KeywordsSection;
