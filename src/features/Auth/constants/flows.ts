import { PublicRoutes } from "Constants/routes";
import type { Flow, FlowObject } from "Features/Auth/types/flows";

const flowMap: Readonly<Record<Flow, FlowObject>> = {
  login: {
    submitButton: "LOGIN",
    linkText: "SIGNUP",
    linkRoute: PublicRoutes.SIGNUP,
    errorMessage: "ERROR_LOGIN",
  },
  signup: {
    submitButton: "SIGNUP",
    linkText: "LOGIN",
    linkRoute: PublicRoutes.LOGIN,
    errorMessage: "ERROR_SIGNUP",
  },
};

export default flowMap;
