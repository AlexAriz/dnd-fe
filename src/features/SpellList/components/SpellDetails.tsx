import CircularProgress from "@mui/material/CircularProgress";
import { skipToken } from "@reduxjs/toolkit/query";
import SpellCard from "Components/SpellCard";
import { useGetSpellQuery } from "State/Spell";

interface SpellDetailsProps {
  spellId: string;
}

function SpellDetails({ spellId }: SpellDetailsProps) {
  const { data: spell, isFetching } = useGetSpellQuery(spellId ?? skipToken);

  if (isFetching || !spell) return <CircularProgress />;

  return <SpellCard spellDetail={spell.markdown} />;
}

export default SpellDetails;
