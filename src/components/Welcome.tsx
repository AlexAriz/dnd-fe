import intl from "react-intl-universal";
import { Link } from "react-router";

function Welcome() {
  return (
    <div>
      {intl.get("DUMMY.WELCOME")}
      <Link to="/dummy">{intl.get("DUMMY.DUMMY")}</Link>
    </div>
  );
}

export default Welcome;
