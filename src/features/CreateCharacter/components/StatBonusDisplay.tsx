import type { StatBonus } from "State/Character/type";
import { useAppDispatch } from "Hooks/state";
import { newCharacterActions } from "../store";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Text } from "@astryxdesign/core/Text";
import { IconButton } from "@astryxdesign/core/IconButton";
import { TrashIcon } from "@heroicons/react/24/outline";

interface StatBonusDisplayProps {
  statBonus: StatBonus;
  index: number;
}

function StatBonusDisplay({ statBonus, index }: StatBonusDisplayProps) {
  const dispatch = useAppDispatch();

  return (
    <Grid columns={6} gap={2}>
      <GridSpan columns={3} className="flex items-center">
        <Text>{statBonus.name}</Text>
      </GridSpan>

      <GridSpan columns={1} className="flex items-center justify-center">
        <Text>{statBonus.statId}</Text>
      </GridSpan>

      <GridSpan columns={1} className="flex items-center justify-center">
        <Text>{statBonus.bonus}</Text>
      </GridSpan>

      <GridSpan columns={1} className="flex items-center justify-end-safe">
        <IconButton
          label=""
          icon={<TrashIcon />}
          variant="primary"
          onClick={() => dispatch(newCharacterActions.removeStatBonus(index))}
        />
      </GridSpan>
    </Grid>
  );
}

export default StatBonusDisplay;
