import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { useEffect, useState } from "react";
import { getImageUrl } from "Libs/Supabase";
import Avatar from "@mui/material/Avatar";
import ProfileContext from "Context/ProfileContext";

const WIDTH = 96;
const HEIGHT = 96;

function CharacterAvatar() {
  const character = useRequiredContext(ActiveCharacterContext);
  const profile = useRequiredContext(ProfileContext);
  const [avatarSrc, setAvatarSrc] = useState<string>();

  useEffect(() => {
    const getAvatarSrc = async () => {
      const fileSrc = await getImageUrl({
        bucket: "CharacterAvatars",
        filename: `${profile.id}/${character.id}/avatar`,
        options: {
          transform: {
            width: WIDTH,
            height: HEIGHT,
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

  return <Avatar src={avatarSrc} variant="rounded" sx={{ width: WIDTH, height: HEIGHT }} />;
}

export default CharacterAvatar;
