import { useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetSpellQuery } from "../store/spell";
import Markdown from "Components/Markdown";

function SpellPage() {
  const { spellId } = useParams<{ spellId: string }>();
  const { data: spell, isLoading } = useGetSpellQuery(spellId ?? "");

  if (!spell) {
    return null;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return <Markdown>{spell.markdown}</Markdown>;
}

export default SpellPage;
