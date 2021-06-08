import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@material-ui/core";
import { Proposal } from "../../../models/Proposal";
import ProposalsListHeader from "../ProposalsListHeader/ProposalsListHeader";
import ProposalsListRow from "../ProposalsListRow/ProposalsListRow";
import { useStyles } from "./styles";

interface Props {
  proposals: Proposal[];
}

const ProposalsList = ({ proposals }: Props) => {
  return (
    <TableContainer elevation={1} component={Paper}>
      <Table>
        <ProposalsListHeader />

        <TableBody>
          {proposals.map((proposal) => (
            <ProposalsListRow key={proposal.proposalId} proposal={proposal} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProposalsList;
