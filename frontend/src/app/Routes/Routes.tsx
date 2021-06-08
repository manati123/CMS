import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "../../account/LoginPage/LoginPage";
import Layout from "../Layout/Layout";
import * as appRoutes from "./appRoutes";
import RegisterPage from "../../account/RegisterPage/RegisterPage";
import HomePage from "../../home/HomePage/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "../../profile/ProfilePage/ProfilePage";
import ProposalsPage from "../../proposals/ProposalsPage/ProposalsPage";
import SchedulePage from "../../schedule/SchedulePage/SchedulePage";
import SectionsPage from "../../sections/SectionsPage/SectionsPage";
import Bootstrap from "../Bootstrap/Bootstrap";
import ProposalDetailsPage from "../../proposals/ProposalDetailsPage/ProposalDetailsPage";
import ConferencesPage from "../../conferences/ConferencesPage/ConferencesPage";

const Routes = () => {
  return (
    <Router>
      <Bootstrap>
        <Layout>
          <Switch>
            <Route exact path={appRoutes.login} component={LoginPage} />
            <Route exact path={appRoutes.register} component={RegisterPage} />
            <ProtectedRoute exact path={appRoutes.home} component={HomePage} />
            <ProtectedRoute
              exact
              path={appRoutes.conferences}
              component={ConferencesPage}
            />
            <ProtectedRoute
              exact
              path={appRoutes.profile}
              component={ProfilePage}
            />
            <ProtectedRoute
              exact
              path={appRoutes.proposals}
              component={ProposalsPage}
            />
            <ProtectedRoute
              exact
              path={appRoutes.proposalDetails}
              component={ProposalDetailsPage}
            />
            <ProtectedRoute
              exact
              path={appRoutes.schedule}
              component={SchedulePage}
            />
            <ProtectedRoute
              exact
              path={appRoutes.sections}
              component={SectionsPage}
            />
            <ProtectedRoute>
              <Redirect to={appRoutes.home} />
            </ProtectedRoute>
          </Switch>
        </Layout>
      </Bootstrap>
    </Router>
  );
};

export default Routes;
