import { Button } from "@astryxdesign/core/Button";
import { Stack } from "@astryxdesign/core/Stack";
import { Heading } from "@astryxdesign/core/Heading";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { TextInput } from "@astryxdesign/core/TextInput";
import { useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { usePostProfileMutation } from "State/Profile";
import { HiddenPaths } from "Constants/routes";
import { useNavigate } from "react-router";
import { useToast } from "@astryxdesign/core/Toast";
import ProfileContext from "Context/ProfileContext";

function CompleteProfile() {
  const intl = useIntl();
  const toast = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [postProfile] = usePostProfileMutation();
  const profile = useContext(ProfileContext);
  const hasProfile: boolean = !!profile;

  const onSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!username) return;
    try {
      setLoading(true);
      const { error } = await postProfile(username);
      if (!error) {
        navigate(HiddenPaths.ROOT);
      } else {
        throw error;
      }
    } catch {
      toast({ body: intl.formatMessage({ id: "CREATE_PROFILE_ERROR" }), type: "error", isAutoHide: true });
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
    <Stack gap={4} className="md:w-lg">
      <Heading level={3}>{intl.formatMessage({ id: "MODULE_PROFILE" })}</Heading>

      <form onSubmit={onSubmit}>
        <FormLayout>
          <TextInput
            label={intl.formatMessage({ id: "USERNAME" })}
            placeholder={intl.formatMessage({ id: "USERNAME" })}
            isDisabled={Boolean(profile?.username)}
            value={username}
            onChange={setUsername}
          />

          <Button
            type="submit"
            variant="primary"
            isDisabled={!username}
            isLoading={loading}
            label={intl.formatMessage({ id: "SAVE" })}
          />
        </FormLayout>
      </form>
    </Stack>
  );

  /* return (
    <>
      <Typography variant="h3">{intl.formatMessage({ id: "MODULE_PROFILE" })}</Typography>

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
  ); */
}

export default CompleteProfile;
