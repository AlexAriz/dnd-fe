import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { verifySession } from "../api/Auth";
import { useAppDispatch } from "Hooks/state";
import { currentUserActions } from "../store/currentUser";

function UserProvider({ children }: React.PropsWithChildren) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const user = await verifySession();
      if (user) {
        dispatch(currentUserActions.setUser(user));
      }
      setLoading(false);
    };

    init();
  }, [dispatch]);

  return loading ? <CircularProgress /> : children;
}

export default UserProvider;
