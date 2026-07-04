import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetCharacterQuery } from "State/Character";
import LoadingContent from "Components/LoadingContent";
import { TabList, Tab } from "@astryxdesign/core/TabList";
import TabPanel from "Components/TabPanel";
import CharacterSummary from "../components/CharacterSummary";
import { Modules } from "Constants/routes";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { useIntl } from "react-intl";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import KnownSpells from "../components/KnownSpells";
import PreparedSpells from "../components/PreparedSpells";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetCharacterSpellsQuery } from "State/CharacterSpells";

function CharacterPage() {
  const intl = useIntl();
  const navigate = useNavigate();
  const { characterId } = useParams<{ characterId: string }>();
  const { data: character, isLoading } = useGetCharacterQuery(characterId ?? skipToken);
  useGetCharacterSpellsQuery(characterId ?? skipToken);
  const [activeTab, setActiveTab] = useState<string>(intl.formatMessage({ id: "ABILITIES" }));

  if (!characterId) {
    navigate(Modules.CHARACTERS);
  }

  if (isLoading) {
    return <LoadingContent size="xl" />;
  }

  if (!character) {
    return null;
  }

  return (
    <ActiveCharacterContext value={character}>
      <CharacterSummary />

      <TabList value={activeTab} onChange={setActiveTab} layout="fill" hasDivider>
        <Tab value={intl.formatMessage({ id: "ABILITIES" })} label={intl.formatMessage({ id: "ABILITIES" })} />
        <Tab value={intl.formatMessage({ id: "SKILLS" })} label={intl.formatMessage({ id: "SKILLS" })} />
        <Tab value={intl.formatMessage({ id: "KNOWN_SPELLS" })} label={intl.formatMessage({ id: "KNOWN_SPELLS" })} />
        <Tab
          value={intl.formatMessage({ id: "PREPARED_SPELLS" })}
          label={intl.formatMessage({ id: "PREPARED_SPELLS" })}
        />
      </TabList>

      <TabPanel value={intl.formatMessage({ id: "ABILITIES" })} currentValue={activeTab}>
        <CharacterAbilities />
      </TabPanel>
      <TabPanel value={intl.formatMessage({ id: "SKILLS" })} currentValue={activeTab}>
        <CharacterSkills />
      </TabPanel>
      <TabPanel value={intl.formatMessage({ id: "KNOWN_SPELLS" })} currentValue={activeTab}>
        <KnownSpells />
      </TabPanel>
      <TabPanel value={intl.formatMessage({ id: "PREPARED_SPELLS" })} currentValue={activeTab}>
        <PreparedSpells />
      </TabPanel>
    </ActiveCharacterContext>
  );
}

export default CharacterPage;
