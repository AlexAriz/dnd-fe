import Card from "@mui/material/Card";
import type { CharacterSummary } from "State/Character/type";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useIntl } from "react-intl";
import { Link } from "react-router";
import { CHARACTER_PATHS } from "Constants/routes";
import { useEffect, useState } from "react";
import { getImageUrl } from "Libs/Supabase";
import useRequiredContext from "Hooks/useRequiredContext";
import ProfileContext from "Context/ProfileContext";
import CardMedia from "@mui/material/CardMedia";

interface CharacterCardProps {
  character: CharacterSummary;
}
function CharacterCard({ character }: CharacterCardProps) {
  const intl = useIntl();
  const profile = useRequiredContext(ProfileContext);
  const [avatarSrc, setAvatarSrc] = useState<string>();

  useEffect(() => {
    const getAvatarSrc = async () => {
      const fileSrc = await getImageUrl({
        bucket: "CharacterAvatars",
        filename: `${profile.id}/${character.id}/avatar`,
        options: {
          transform: {
            width: 96,
            height: 96,
            resize: "contain",
          },
        },
      });
      if (fileSrc) {
        setAvatarSrc(fileSrc);
      }
    };

    if (character.id && profile.id) {
      getAvatarSrc();
    }
  }, [character.id, profile.id]);

  return (
    <Card>
      <CardActionArea component={Link} to={CHARACTER_PATHS.DETAILS.replace(":characterId", character.id)}>
        <div className="flex">
          <CardMedia src={avatarSrc} component="img" sx={{ width: 96 }} />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {character.name}
            </Typography>

            {character.classes.map((characterClass) => (
              <Typography key={characterClass.id} variant="caption">
                {intl.formatMessage(
                  { id: "CHARACTER_CLASS" },
                  { name: characterClass.name, level: characterClass.level, subclass: characterClass.subClass?.name },
                )}
              </Typography>
            ))}
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default CharacterCard;
