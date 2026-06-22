import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { usePostProfileMutation } from "State/Profile";
import { HiddenPaths } from "Constants/routes";
import { useNavigate } from "react-router";
import Toast from "Components/Toast";
import ProfileContext from "Context/ProfileContext";

function CompleteProfile() {
  const intl = useIntl();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [postProfile] = usePostProfileMutation();
  const profile = useContext(ProfileContext);
  const hasProfile: boolean = !!profile;

  const onSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!username) return;
    try {
      setLoading(true);
      await postProfile(username);
      navigate(HiddenPaths.ROOT);
    } catch {
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasProfile) {
      navigate(HiddenPaths.ROOT);
    }
  }, [hasProfile, navigate]);

  return (
    <>
      <Typography variant="h4">{intl.formatMessage({ id: "MODULE_PROFILE" })}</Typography>

      <Stack className="flex flex-col px-4 py-8 w-1/2 md:w-lg space-y-4" component="form" onSubmit={onSubmit}>
        <TextField
          label={intl.formatMessage({ id: "USERNAME" })}
          placeholder={intl.formatMessage({ id: "USERNAME" })}
          disabled={Boolean(profile?.username)}
          defaultValue={profile?.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button type="submit" variant="contained" disabled={!username} loading={loading}>
          {intl.formatMessage({ id: "SAVE" })}
        </Button>
      </Stack>

      <Toast isOpen={snackbarOpen} onClose={() => setSnackbarOpen(false)} severity="error">
        {intl.formatMessage({ id: "CREATE_PROFILE_ERROR" })}
      </Toast>
    </>
  );
}

export default CompleteProfile;
