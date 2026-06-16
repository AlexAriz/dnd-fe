import { createContext } from "react";
import type { CharacterDetail } from "State/Character/type";

export default createContext<CharacterDetail | undefined>(undefined);
