import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetCharactersQuery } from "State/Character";
import CharacterCard from "../components/CharacterCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router";
import { CHARACTER_PATHS } from "Constants/routes";

function CharacterList() {
  const intl = useIntl();
  const { data: characters, isLoading } = useGetCharactersQuery();

  return (
    <>
      <Typography variant="h4">{intl.formatMessage({ id: "MODULE_CHARACTERS" })}</Typography>

      {isLoading && <CircularProgress />}

      <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}>
        {characters?.map((character) => (
          <Grid key={character.id} size={3}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>

      <Fab color="primary" className="fixed bottom-3 right-3" component={Link} to={CHARACTER_PATHS.CREATE}>
        <AddIcon />
      </Fab>
    </>
  );
}

export default CharacterList;
