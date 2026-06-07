import Card from "@mui/material/Card";
import type { CharacterDetail } from "../types/character";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useIntl } from "react-intl";
import { Link } from "react-router";

interface CharacterCardProps {
  character: CharacterDetail;
}
function CharacterCard({ character }: CharacterCardProps) {
  const intl = useIntl();

  return (
    <Card>
      <CardActionArea component={Link} to="/">
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
