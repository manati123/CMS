import { MenuItem, Select, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getConferences,
  getIsGetConferencesLoading,
  getCurrentConferenceId,
  getGetConferencesErrorMessage,
} from "../../conferences/selectors";
import { setCurrentConferenceThunk } from "../../conferences/thunks";
import { useStyles } from "./styles";

interface Props {}

const ConferenceSelector = (props: Props) => {
  const conferences = useSelector(getConferences);
  const loading = useSelector(getIsGetConferencesLoading);
  const currentConferenceId = useSelector(getCurrentConferenceId);
  const error = useSelector(getGetConferencesErrorMessage);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleConferenceChange = (
    changeEvent: React.ChangeEvent<{
      value: unknown;
    }>
  ) => {
    const newConferenceId = changeEvent.target.value as number;
    dispatch(setCurrentConferenceThunk(newConferenceId));
  };

  const renderSelectContent = () => {
    return loading ? (
      <MenuItem value={0}>
        <Typography
          className={[classes.selectContent, classes.loading].join(" ")}
        >
          Loading
        </Typography>
      </MenuItem>
    ) : error ? (
      <MenuItem value={0}>
        <Typography
          className={[classes.selectContent, classes.error].join(" ")}
        >
          Error
        </Typography>
      </MenuItem>
    ) : conferences ? (
      conferences.map((conference) => (
        <MenuItem key={conference.conferenceId} value={conference.conferenceId}>
          <Typography className={classes.selectContent}>
            {conference.name}
          </Typography>
        </MenuItem>
      ))
    ) : (
      <MenuItem value={0}>
        <Typography>No conferences available</Typography>
      </MenuItem>
    );
  };

  return (
    <Select
      className={classes.conferenceSelector}
      fullWidth
      value={
        loading || error || conferences.length === 0 ? 0 : currentConferenceId
      }
      defaultValue={conferences}
      onChange={handleConferenceChange}
    >
      {renderSelectContent()}
    </Select>
  );
};

export default ConferenceSelector;
