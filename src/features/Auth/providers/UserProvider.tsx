import CircularProgress from "@mui/material/CircularProgress";
import { verifySession } from "../store/currentUser";
import { useAppDispatch } from "Hooks/state";
import { useEffect, useState } from "react";

function UserProvider({ children }: React.PropsWithChildren) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await dispatch(verifySession());
      setLoading(false);
    };

    init();
  }, [dispatch]);

  return loading ? <CircularProgress /> : children;
}

export default UserProvider;
