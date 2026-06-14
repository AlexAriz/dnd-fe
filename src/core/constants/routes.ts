export const PublicRoutes = {
  LOGIN: "/login",
  SIGNUP: "/signup",
} as const;

export const HiddenPaths = {
  ROOT: "/",
  PROFILE: "/profile",
} as const;

export const Modules = {
  CHARACTERS: "/characters",
  SPELLS: "/spells",
} as const;

export const CHARACTER_PATHS = {
  CREATE: "new",
  DETAILS: ":characterId",
} as const;
