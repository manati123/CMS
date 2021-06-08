import { Box, Grid, Paper } from "@material-ui/core";
import React from "react";
import { UsernameForm } from "../components/UsernameForm/UsernameForm";
import PageTitle from "../../common/components/PageTitle/PageTitle";
import PageContentContainer from "../../common/components/PageContentContainer/PageContentContainer";
import { PasswordForm } from "../components/PasswordForm/PasswordForm";
import { AuthoritiesList } from "../components/AuthoritiesList/AuthoritiesList";
import { useStyles } from "./styles";

const ProfilePage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <PageTitle title="My profile" />
      <PageContentContainer>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Paper elevation={2}>
              <Box padding={2}>
                <UsernameForm />
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={2}>
              <Box padding={2}>
                <PasswordForm />
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={2}>
              <Box padding={2}>
                <h2 className={classes.h2}>My roles</h2>
                <AuthoritiesList />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </PageContentContainer>
    </Grid>
  );
};

export default ProfilePage;
