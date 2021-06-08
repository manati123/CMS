import { useStyles } from "./styles";
import { Conference } from "../../../models/Conference";
import { Paper, Table, TableBody, TableContainer } from "@material-ui/core";
import ConferenceListHeader from "../ConferenceListHeader/ConferenceListHeader";
import ConferenceListRow from "../ConferenceListRow/ConferenceListRow";

interface Props {
  conferences: Conference[];
}
const ConferenceList = ({ conferences }: Props) => {
  return (
    <TableContainer elevation={1} component={Paper}>
      <Table>
        <ConferenceListHeader />
        <TableBody>
          {conferences.map((conference) => (
            <ConferenceListRow
              key={conference.conferenceId}
              conference={conference}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConferenceList;
