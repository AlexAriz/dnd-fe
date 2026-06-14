import { useState } from "react";
import { useParams } from "react-router";
import { useGetCharacterQuery } from "State/Character";
import CircularProgress from "@mui/material/CircularProgress";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import CharacterSummary from "../components/CharacterSummary";

function CharacterDetail() {
  const { characterId } = useParams<{ characterId: string }>();
  const { data: character, isLoading } = useGetCharacterQuery(characterId ?? "");
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!character) {
    return null;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <CharacterSummary />

      <TabContext value={activeTab}>
        <TabList onChange={(_e, newValue) => setActiveTab(newValue)} variant="scrollable" scrollButtons="auto">
          <Tab label="Abilities" />
          <Tab label="Skills" />
        </TabList>

        <TabPanel value={0}>Abilities</TabPanel>
        <TabPanel value={1}>Skills</TabPanel>
      </TabContext>
    </>
  );
}

export default CharacterDetail;
