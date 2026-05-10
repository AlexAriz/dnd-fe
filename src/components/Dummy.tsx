import { Button, Typography } from "@mui/joy";
import { useState } from "react";
import intl from "react-intl-universal";
import { Link } from "react-router";
import Routes from "../constants/routes";

function Dummy() {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Typography level="h1">{intl.get("DUMMY.HEADER")}</Typography>

      <Typography>{intl.get("DUMMY.MESSAGE", { count })}</Typography>

      <Button onClick={onClick}>{intl.get("DUMMY.CTA")}</Button>

      <Link to={Routes.Root}>{intl.get("DUMMY.HOME")}</Link>
    </>
  );
}

export default Dummy;
