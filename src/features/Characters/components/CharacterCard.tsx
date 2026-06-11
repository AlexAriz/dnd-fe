import Card from "@mui/material/Card";
import type { CharacterSummary } from "State/Character/type";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useIntl } from "react-intl";
import { Link } from "react-router";
import CHARACTER_PATHS from "../constants/paths";

interface CharacterCardProps {
  character: CharacterSummary;
}
function CharacterCard({ character }: CharacterCardProps) {
  const intl = useIntl();

  return (
    <Card>
      <CardActionArea component={Link} to={CHARACTER_PATHS.DETAILS.replace(":characterId", character.id)}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {character.name}
          </Typography>

          {character.classes.map((characterClass) => (
            <Typography key={characterClass.id} variant="caption">
              {intl.formatMessage(
                { id: "CHARACTER_CLASS" },
                { name: characterClass.name, level: characterClass.level },
              )}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CharacterCard;
