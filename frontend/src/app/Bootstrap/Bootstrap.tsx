import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../account/selectors";
import { getConferencesThunk } from "../../conferences/thunks";
import { getUsersThunk } from "../../users/thunks";

const Bootstrap: FC = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  useEffect(() => {
    if (currentUser) {
      dispatch(getConferencesThunk());
      dispatch(getUsersThunk());
    }
  }, [currentUser]);

  return <div>{props.children}</div>;
};

export default Bootstrap;
