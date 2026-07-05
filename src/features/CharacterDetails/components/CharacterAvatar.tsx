import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { useEffect, useState } from "react";
import { getImageUrl } from "Libs/Supabase";
import { Avatar } from "@astryxdesign/core/Avatar";
import ProfileContext from "Context/ProfileContext";
import { CharacterAvatarSize } from "Constants/avatar";

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
            width: CharacterAvatarSize.WIDTH,
            height: CharacterAvatarSize.HEIGHT,
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

  return <Avatar src={avatarSrc} name={character.name} size={CharacterAvatarSize.HEIGHT} />;
}

export default CharacterAvatar;
