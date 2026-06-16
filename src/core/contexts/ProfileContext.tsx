import { createContext } from "react";
import type { Profile } from "State/Profile/type";

export default createContext<Profile | undefined>(undefined);
