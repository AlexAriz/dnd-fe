import { useIntl } from "react-intl";
import AbilityScores from "../components/AbilityScores";
import SkillsSection from "../components/SkillsSection";
import CharacterBase from "../components/CharacterBase";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { useCreateCharacterMutation } from "State/Character";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Modules } from "Constants/routes";
import CharacterIdentity from "../components/CharacterIdentity";
import { uploadFile } from "Libs/Supabase";
import useRequiredContext from "Hooks/useRequiredContext";
import ProfileContext from "Context/ProfileContext";
import { Layout, LayoutContent, LayoutFooter, LayoutHeader, Stack } from "@astryxdesign/core/Layout";
import { useToast } from "@astryxdesign/core/Toast";
import { Button } from "@astryxdesign/core/Button";
import { Tab, TabList } from "@astryxdesign/core/TabList";
import TabPanel from "Components/TabPanel";

function NewCharacterPage() {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const profile = useRequiredContext(ProfileContext);
  const canSubmit = useAppSelector(newCharacterSelectors.selectCanSubmit);
  const character = useAppSelector(newCharacterSelectors.selectCharacter);
  const [createCharacter] = useCreateCharacterMutation();
  const [file, setFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<string>(intl.formatMessage({ id: "NEW_CHARACTER_BASE" }));

  const onCreate = async () => {
    if (!canSubmit) return;
    try {
      const newCharacter = await createCharacter(character).unwrap();
      if (file) {
        await uploadFile(file, `${profile.id}/${newCharacter.id}/avatar`, "CharacterAvatars");
      }
      dispatch(newCharacterActions.resetCharacter());
      navigate(Modules.CHARACTERS);
    } catch {
      toast({ body: intl.formatMessage({ id: "NEW_CHARACTER_ERROR" }), type: "error", isAutoHide: true });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(newCharacterActions.resetCharacter());
    };
  }, [dispatch]);

  return (
    <Layout
      header={
        <LayoutHeader hasDivider className="px-6 pt-6">
          <CharacterIdentity file={file} setFile={setFile} />
        </LayoutHeader>
      }
      content={
        <LayoutContent padding={6}>
          <TabList value={activeTab} onChange={setActiveTab}>
            <Tab
              className="justify-start"
              value={intl.formatMessage({ id: "NEW_CHARACTER_BASE" })}
              label={intl.formatMessage({ id: "NEW_CHARACTER_BASE" })}
            />
            <Tab
              className="justify-start"
              value={intl.formatMessage({ id: "ABILITY_SCORE" })}
              label={intl.formatMessage({ id: "ABILITY_SCORE" })}
            />
            <Tab
              className="justify-start"
              value={intl.formatMessage({ id: "SKILLS" })}
              label={intl.formatMessage({ id: "SKILLS" })}
            />
          </TabList>

          <TabPanel className="pt-6" value={intl.formatMessage({ id: "NEW_CHARACTER_BASE" })} currentValue={activeTab}>
            <CharacterBase />
          </TabPanel>

          <TabPanel className="pt-6" value={intl.formatMessage({ id: "ABILITY_SCORE" })} currentValue={activeTab}>
            <AbilityScores />
          </TabPanel>

          <TabPanel className="pt-6" value={intl.formatMessage({ id: "SKILLS" })} currentValue={activeTab}>
            <SkillsSection />
          </TabPanel>
        </LayoutContent>
      }
      footer={
        <LayoutFooter hasDivider>
          <Stack direction="horizontal" justify="end" className="px-6 pb-4">
            <Button
              variant="primary"
              label={intl.formatMessage({ id: "CREATE" })}
              clickAction={onCreate}
              isDisabled={!canSubmit}
            />
          </Stack>
        </LayoutFooter>
      }
    />
  );
}

export default NewCharacterPage;
