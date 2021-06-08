import { TableCell, TableRow, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { redirectToProposalDetails } from "../../../app/Routes/routingHelpers";
import UsersAvatarGroup from "../../../common/components/UsersAvatarGroup/UsersAvatarGroup";
import { Proposal } from "../../../models/Proposal";
import { User } from "../../../models/User";
import { getAuthorsForProposal } from "../../../users/selectors";
import { useStyles } from "./styles";

interface Props {
  proposal: Proposal;
}

const ProposalsListRow = ({ proposal }: Props) => {
  const authorReducer = (accumulator: string, currentAuthor: User) =>
    accumulator + currentAuthor.username + ", ";
  const history = useHistory();
  const classes = useStyles();
  const authors = useSelector(getAuthorsForProposal(proposal.proposalId));
  console.log(authors);
  return (
    <TableRow
      key={proposal.proposalId}
      hover
      className={classes.clickable}
      onClick={() => {
        redirectToProposalDetails(history, proposal.proposalId);
      }}
    >
      <TableCell component="th" scope="row">
        <Typography>{proposal.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{proposal.topics.join(", ")}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{proposal.keywords.join(", ")}</Typography>
      </TableCell>
      <TableCell>
        <UsersAvatarGroup users={authors} />
      </TableCell>
    </TableRow>
  );
};

export default ProposalsListRow;
