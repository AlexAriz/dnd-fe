import { useEffect, useState } from "react";

import { useAppDispatch } from "Hooks/state";
import { verifySession } from "Features/Auth/api/Auth";
import { currentUserActions } from "Features/Auth/store/currentUser";
import LoadingPage from "Layouts/LoadingPage";

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

  return loading ? <LoadingPage /> : children;
}

export default UserProvider;
