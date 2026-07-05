import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import FileUpload from "Components/FileUpload";
import { CharacterAvatarSize } from "Constants/avatar";

interface CharacterAvatarProps {
  setFile: (file: File) => void;
}

function CharacterAvatar({ setFile }: CharacterAvatarProps) {
  const [fileSrc, setFileSrc] = useState<string>();

  useEffect(() => {
    return () => {
      if (fileSrc) URL.revokeObjectURL(fileSrc);
    };
  }, [fileSrc]);

  const handleFileSelect: React.InputHTMLAttributes<HTMLInputElement>["onChange"] = async (event) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    setFile(file);
    setFileSrc(URL.createObjectURL(file));
  };

  return (
    <ButtonBase className="w-24 h-24" disableRipple component="label" role={undefined} tabIndex={-1}>
      <Avatar
        src={fileSrc}
        variant="rounded"
        sx={{ width: CharacterAvatarSize.WIDTH, height: CharacterAvatarSize.HEIGHT }}
      />
      <FileUpload onChange={handleFileSelect} accept="image/*" />
    </ButtonBase>
  );
}

export default CharacterAvatar;
