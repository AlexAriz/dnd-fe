import { useAppDispatch } from "Hooks/state";
import { registerAuthListener } from "Libs/Supabase";
import { useEffect } from "react";

function AuthProvider({ children }: React.PropsWithChildren) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    registerAuthListener(dispatch);
  }, [dispatch]);

  return children;
}

export default AuthProvider;
