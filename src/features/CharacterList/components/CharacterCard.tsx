import type { CharacterSummary } from "State/Character/type";
import { useIntl } from "react-intl";
import { CHARACTER_PATHS } from "Constants/routes";
import { useEffect, useState } from "react";
import { getImageUrl } from "Libs/Supabase";
import useRequiredContext from "Hooks/useRequiredContext";
import ProfileContext from "Context/ProfileContext";
import { CharacterAvatarSize } from "Constants/avatar";
import { ClickableCard } from "@astryxdesign/core/ClickableCard";
import { Item } from "@astryxdesign/core/Item";
import { Avatar } from "@astryxdesign/core/Avatar";
import { Text } from "@astryxdesign/core/Text";

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

  return (
    <ClickableCard label={character.name} href={CHARACTER_PATHS.DETAILS.replace(":characterId", character.id)}>
      <Item
        label={character.name}
        startContent={<Avatar src={avatarSrc} name={character.name} size={CharacterAvatarSize.HEIGHT} />}
        description={character.classes.map((characterClass) => (
          <Text key={characterClass.id} type="supporting">
            {intl.formatMessage(
              { id: "CHARACTER_CLASS" },
              { name: characterClass.name, level: characterClass.level, subclass: characterClass.subClass?.name },
            )}
          </Text>
        ))}
        className="p-0"
      />
    </ClickableCard>
  );
}

export default CharacterCard;
