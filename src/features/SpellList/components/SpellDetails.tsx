import CircularProgress from "@mui/material/CircularProgress";
import { skipToken } from "@reduxjs/toolkit/query";
import Markdown from "Components/Markdown";
import { useGetSpellQuery } from "State/Spell";

interface SpellDetailsProps {
  spellId: string;
}

function SpellDetails({ spellId }: SpellDetailsProps) {
  const { data: spell, isFetching } = useGetSpellQuery(spellId ?? skipToken);

  if (isFetching || !spell) return <CircularProgress />;

  return <Markdown>{spell.markdown}</Markdown>;
}

export default SpellDetails;
