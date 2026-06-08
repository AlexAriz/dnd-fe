import { useParams } from "react-router";
import { useGetCharacterQuery } from "../store/character";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function CharacterDetail() {
  const { characterId } = useParams<{ characterId: string }>();
  const { data: character, isLoading } = useGetCharacterQuery(characterId ?? "");

  if (!character) {
    return null;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography variant="h1">{character.name}</Typography>
    </>
  );
}

export default CharacterDetail;
