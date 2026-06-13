import Typography from "@mui/material/Typography";
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
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Modules } from "Constants/routes";

function NewCharacterPage() {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const canSubmit = useAppSelector(newCharacterSelectors.selectCanSubmit);
  const character = useAppSelector(newCharacterSelectors.selectCharacter);
  const [createCharacter, { isSuccess, isLoading }] = useCreateCharacterMutation();

  const onCreate = () => {
    if (!canSubmit) return;
    createCharacter(character);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(newCharacterActions.resetCharacter());
      navigate(Modules.CHARACTERS);
    }
  }, [dispatch, isSuccess, navigate]);

  return (
    <>
      <Typography variant="h1">{intl.formatMessage({ id: "NEW_CHARACTER" })}</Typography>

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

      <Fab color="primary" className="fixed bottom-3 right-3" disabled={!canSubmit || isLoading} onClick={onCreate}>
        <AddIcon />
      </Fab>
    </>
  );
}

export default NewCharacterPage;
