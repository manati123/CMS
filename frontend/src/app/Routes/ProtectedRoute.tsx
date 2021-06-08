import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps, useHistory } from "react-router";
import { CurrentUser } from "../../models/User";
import { getCurrentUser } from "../../account/selectors";
import { redirectToLogin } from "./routingHelpers";

const ProtectedRoute = (props: RouteProps) => {
  const currentUser: CurrentUser | undefined = useSelector(getCurrentUser);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) redirectToLogin(history);
  }, [currentUser]);
  //Not yet implemented.

  return currentUser ? <Route {...props} /> : null;
};

export default ProtectedRoute;
