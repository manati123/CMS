import React from "react";
import {Divider, Grid} from "@material-ui/core";
import ConferenceList from "../components/ConferenceList/ConferenceList";
import {useSelector} from "react-redux";
import {getConferences} from "../selectors";
import PageTitle from "../../common/components/PageTitle/PageTitle";
import PageContentContainer from "../../common/components/PageContentContainer/PageContentContainer";
import ConferenceForm from "../components/ConferenceForm/ConferenceForm";
import {Roles} from "../../models/User";
import {getCurrentUserRoles} from "../../account/selectors";

interface Props {}

const ConferencesPage = (props: Props) => {
  const conferences = useSelector(getConferences);
  const roles = useSelector(getCurrentUserRoles);
  console.log(roles);
  const isAdmin = (typeof roles !=='undefined' && roles.includes(Roles.ADMIN));
  console.log(isAdmin);
  return (
    <Grid container direction="column" alignItems="center">
      <PageTitle title="Conferences" />
      <Divider />
      <PageContentContainer>
          <ConferenceList conferences={conferences} />
      </PageContentContainer>
      <Divider />
        {isAdmin ? <ConferenceForm/> :null}
    </Grid>
  );
}

export default ConferencesPage;
