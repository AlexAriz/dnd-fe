import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useEffect, useState } from "react";
import FileUpload from "Components/FileUpload";

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
    <div>
      <div className="w-24 h-24">
        <IconButton className="w-full h-full" disableRipple component="label" role={undefined} tabIndex={-1}>
          {fileSrc && <img src={fileSrc} />}
          {!fileSrc && <AccountBoxIcon className="w-full h-full" />}
          <FileUpload onChange={handleFileSelect} />
        </IconButton>
      </div>
    </div>
  );
}

export default CharacterAvatar;
