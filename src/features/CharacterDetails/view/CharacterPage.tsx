import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetCharacterQuery } from "State/Character";
import CircularProgress from "@mui/material/CircularProgress";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import CharacterSummary from "../components/CharacterSummary";
import { Modules } from "Constants/routes";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { useIntl } from "react-intl";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import CharacterSpells from "../components/CharacterSpells";

function CharacterPage() {
  const intl = useIntl();
  const navigate = useNavigate();
  const { characterId } = useParams<{ characterId: string }>();
  const { data: character, isLoading } = useGetCharacterQuery(characterId ?? "");
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!characterId) {
    navigate(Modules.CHARACTERS);
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!character) {
    return null;
  }

  return (
    <ActiveCharacterContext value={character}>
      <CharacterSummary />

      <TabContext value={activeTab}>
        <TabList onChange={(_e, newValue) => setActiveTab(newValue)} variant="scrollable" scrollButtons="auto">
          <Tab label={intl.formatMessage({ id: "ABILITIES" })} />
          <Tab label={intl.formatMessage({ id: "SKILLS" })} />
          <Tab label={intl.formatMessage({ id: "SPELLS" })} />
        </TabList>

        <TabPanel value={0}>
          <CharacterAbilities />
        </TabPanel>
        <TabPanel value={1}>
          <CharacterSkills />
        </TabPanel>
        <TabPanel value={2}>
          <CharacterSpells />
        </TabPanel>
      </TabContext>
    </ActiveCharacterContext>
  );
}

export default CharacterPage;
