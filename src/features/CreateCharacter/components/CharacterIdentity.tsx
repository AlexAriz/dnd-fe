import { useAppDispatch, useAppSelector } from "Hooks/state";
import { useIntl } from "react-intl";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { Stack, StackItem } from "@astryxdesign/core/Stack";
import { TextInput } from "@astryxdesign/core/TextInput";
import { FileInput, type FileInputProps } from "@astryxdesign/core/FileInput";
import { useEffect, useState } from "react";
import { Avatar } from "@astryxdesign/core/Avatar";
import { CharacterAvatarSize } from "Constants/avatar";

interface CharacterIdentityProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

function CharacterIdentity({ file, setFile }: CharacterIdentityProps) {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const character = useAppSelector(newCharacterSelectors.selectCharacter);
  const [fileSrc, setFileSrc] = useState<string>();

  useEffect(() => {
    return () => {
      if (fileSrc) URL.revokeObjectURL(fileSrc);
    };
  }, [fileSrc]);

  const handleFileSelect: FileInputProps["onChange"] = (files) => {
    const file = Array.isArray(files) ? files[0] : files;

    setFile(file);
    setFileSrc(file ? URL.createObjectURL(file) : undefined);
  };

  return (
    <Stack direction="horizontal" gap={2}>
      <StackItem>
        <Avatar src={fileSrc} name={character.name} size={CharacterAvatarSize.HEIGHT} />
      </StackItem>

      <StackItem size="fill">
        <Stack gap={2}>
          <StackItem>
            <TextInput
              label={intl.formatMessage({ id: "NAME" })}
              value={character.name}
              onChange={(value) => dispatch(newCharacterActions.setName(value))}
            />
          </StackItem>

          <StackItem>
            <FileInput label="Avatar" isLabelHidden value={file} onChange={handleFileSelect} accept="image/*" />
          </StackItem>
        </Stack>
      </StackItem>
    </Stack>
  );
}

export default CharacterIdentity;
