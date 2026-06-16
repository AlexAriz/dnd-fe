import { useIntl } from "react-intl";
import AbilityScores from "../components/AbilityScores";
import SkillsSection from "../components/SkillsSection";
import CharacterBase from "../components/CharacterBase";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import AccordionDetails from "@mui/material/AccordionDetails";
import Fab from "@mui/material/Fab";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { useCreateCharacterMutation } from "State/Character";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Modules } from "Constants/routes";
import CharacterIdentity from "../components/CharacterIdentity";
import { uploadFile } from "Libs/Supabase";
import useRequiredContext from "Hooks/useRequiredContext";
import ProfileContext from "Context/ProfileContext";
import Toast from "Components/Toast";

function NewCharacterPage() {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const canSubmit = useAppSelector(newCharacterSelectors.selectCanSubmit);
  const character = useAppSelector(newCharacterSelectors.selectCharacter);
  const [createCharacter] = useCreateCharacterMutation();
  const profile = useRequiredContext(ProfileContext);
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const onCreate = async () => {
    if (!canSubmit) return;
    try {
      setLoading(true);
      const newCharacter = await createCharacter(character).unwrap();
      if (file) {
        await uploadFile(file, `${profile.id}/${newCharacter.id}/avatar`, "CharacterAvatars");
      }
      dispatch(newCharacterActions.resetCharacter());
      navigate(Modules.CHARACTERS);
    } catch {
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CharacterIdentity setFile={setFile} />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {intl.formatMessage({ id: "NEW_CHARACTER_BASE" })}
        </AccordionSummary>

        <AccordionDetails>
          <CharacterBase />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {intl.formatMessage({ id: "NEW_CHARACTER_ABILITY_SCORE" })}
        </AccordionSummary>

        <AccordionDetails>
          <AbilityScores />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {intl.formatMessage({ id: "NEW_CHARACTER_SKILLS" })}
        </AccordionSummary>

        <AccordionDetails>
          <SkillsSection />
        </AccordionDetails>
      </Accordion>

      <Fab color="primary" className="fixed bottom-3 right-3" disabled={!canSubmit || loading} onClick={onCreate}>
        <AddIcon />
      </Fab>

      <Toast isOpen={snackbarOpen} onClose={() => setSnackbarOpen(false)} severity="error">
        {intl.formatMessage({ id: "NEW_CHARACTER_ERROR" })}
      </Toast>
    </>
  );
}

export default NewCharacterPage;
