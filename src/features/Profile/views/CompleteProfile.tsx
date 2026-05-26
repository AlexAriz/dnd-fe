import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { profileApi, usePostProfileMutation } from "../store/profile";
import { AppRoutes } from "Constants/routes";
import { useNavigate } from "react-router";

function CompleteProfile() {
  const intl = useIntl();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>();
  const [postProfile, { isSuccess, isLoading }] = usePostProfileMutation();
  const { data: profile } = profileApi.endpoints.getProfile.useQueryState();

  const onSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!username) return;
    postProfile(username);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(AppRoutes.HOME);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <Typography variant="h1">Complete Profile</Typography>

      <Stack className="flex flex-col px-4 py-8 w-1/2 md:w-lg space-y-4" component="form" onSubmit={onSubmit}>
        <TextField
          label={intl.formatMessage({ id: "USERNAME" })}
          placeholder={intl.formatMessage({ id: "USERNAME" })}
          disabled={Boolean(profile?.username)}
          defaultValue={profile?.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button type="submit" variant="contained" disabled={!username} loading={isLoading}>
          {intl.formatMessage({ id: "SAVE" })}
        </Button>
      </Stack>
    </>
  );
}

export default CompleteProfile;
