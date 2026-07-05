import { useIntl } from "react-intl";
import { Heading } from "@astryxdesign/core/Heading";
import LoadingContent from "Components/LoadingContent";
import { useGetCharactersQuery } from "State/Character";
import CharacterCard from "../components/CharacterCard";
import { Stack } from "@astryxdesign/core/Stack";
import { Button } from "@astryxdesign/core/Button";
import { CHARACTER_PATHS } from "Constants/routes";

function CharacterList() {
  const intl = useIntl();
  const { data: characters, isLoading } = useGetCharactersQuery();

  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading level={1}>{intl.formatMessage({ id: "MODULE_CHARACTERS" })}</Heading>

        <Button href={CHARACTER_PATHS.CREATE} label={intl.formatMessage({ id: "CREATE" })} variant="primary" />
      </div>

      {isLoading && <LoadingContent />}

      <Stack direction="horizontal" wrap="wrap" gap={4}>
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Stack>
    </>
  );
}

export default CharacterList;
