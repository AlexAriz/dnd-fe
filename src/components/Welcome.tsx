import intl from "react-intl-universal";
import { Link } from "react-router";
import Routes from "../constants/routes";

function Welcome() {
  return (
    <div>
      {intl.get("DUMMY.WELCOME")}
      <Link to={Routes.Dummy}>{intl.get("DUMMY.DUMMY")}</Link>
    </div>
  );
}

export default Welcome;
