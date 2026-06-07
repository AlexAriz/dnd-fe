import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetCharactersQuery } from "../store/character";
import CharacterCard from "../components/CharacterCard";
import Grid from "@mui/material/Grid";

function CharacterList() {
  const intl = useIntl();
  const { data: characters, isLoading } = useGetCharactersQuery();

  return (
    <>
      <Typography variant="h1">{intl.formatMessage({ id: "MODULE_CHARACTERS" })}</Typography>

      {isLoading && <CircularProgress />}

      <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}>
        {characters?.map((character, index) => (
          <Grid key={index} size={3}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CharacterList;
