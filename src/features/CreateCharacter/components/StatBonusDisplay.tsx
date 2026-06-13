import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import type { StatBonus } from "State/Character/type";
import { useAppDispatch } from "Hooks/state";
import { newCharacterActions } from "../store";

interface StatBonusDisplayProps {
  statBonus: StatBonus;
  index: number;
}

function StatBonusDisplay({ statBonus, index }: StatBonusDisplayProps) {
  const dispatch = useAppDispatch();

  return (
    <Grid container spacing={2} columns={6}>
      <Grid size={3} className="flex items-center">
        <Typography>{statBonus.name}</Typography>
      </Grid>

      <Grid size={1} className="flex items-center justify-center">
        <Typography>{statBonus.statId}</Typography>
      </Grid>

      <Grid size={1} className="flex items-center justify-center">
        <Typography>{statBonus.bonus}</Typography>
      </Grid>

      <Grid size={1} className="flex items-center justify-end-safe">
        <IconButton onClick={() => dispatch(newCharacterActions.removeStatBonus(index))}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default StatBonusDisplay;
