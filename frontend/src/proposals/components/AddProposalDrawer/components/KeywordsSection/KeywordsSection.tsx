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
  currentKeyword: string;
  setCurrentKeyword: (newKeyword: string) => void;
  keywords: string[];
  setKeywords: (newKeywords: string[]) => void;
  errorStatus: ErrorStatusAddProposal;
  setErrorStatus: (newErrorStatus: ErrorStatusAddProposal) => void;
}

const TopicsSection = ({
  currentKeyword,
  setCurrentKeyword,
  keywords,
  setKeywords,
  errorStatus,
  setErrorStatus,
}: Props) => {
  const theme = useTheme();
  const classes = useStyles(); //styles for add proposals
  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel htmlFor="keywords">Keyword</InputLabel>
        <OutlinedInput
          name="keywords"
          type="text"
          onChange={(e) => setCurrentKeyword(e.target.value)}
          label="Keyword"
          value={currentKeyword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  if (
                    currentKeyword !== "" &&
                    !keywords.includes(currentKeyword)
                  ) {
                    setKeywords([...keywords, currentKeyword]);
                    setErrorStatus({ ...errorStatus, keywords: false });
                    setCurrentKeyword("");
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
      {errorStatus.keywords && (
        <Typography className={classes.error}>
          At least one keyword must be provided
        </Typography>
      )}
      <Typography className={classes.groupHeader}>Keywords:</Typography>
      <Box border={1} className={classes.sectionContainer}>
        {keywords.length ? (
          <StringListDisplayer
            removeString={(removedKeyword) => {
              setKeywords(
                keywords.filter((keyword) =>
                  keyword !== removedKeyword ? true : false
                )
              );
            }}
            stringList={keywords}
          />
        ) : (
          <Typography className={classes.textGray} align="center">
            No keywords added yet
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default TopicsSection;
