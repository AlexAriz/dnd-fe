import { useGetClassesQuery } from "State/Classes";

import { newCharacterActions, newCharacterSelectors } from "../store";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import { useIntl } from "react-intl";
import { useGetSubClassesQuery } from "State/SubClasses";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetStatsQuery } from "State/Stats";
import type { AvailableStats } from "State/Stats/type";
import { NumberInput } from "@astryxdesign/core/NumberInput";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Selector } from "@astryxdesign/core/Selector";
import { ToggleButton, ToggleButtonGroup } from "@astryxdesign/core/ToggleButton";

function CharacterBase() {
  const intl = useIntl();
  const { data: classes, isLoading } = useGetClassesQuery();
  const armorClass = useAppSelector(newCharacterSelectors.selectArmorClass);
  const hitpoints = useAppSelector(newCharacterSelectors.selectHitpoints);
  const speed = useAppSelector(newCharacterSelectors.selectSpeed);
  const selectedClassId = useAppSelector(newCharacterSelectors.selectClass);
  const selectedSubClassId = useAppSelector(newCharacterSelectors.selectSubClass);
  const level = useAppSelector(newCharacterSelectors.selectLevel);
  const statProficiencies = useAppSelector(newCharacterSelectors.selectStatProficiencies);
  const { data: subclasses } = useGetSubClassesQuery(selectedClassId ?? skipToken);
  const { data: stats } = useGetStatsQuery();
  const dispatch = useAppDispatch();

  return (
    <Grid columns={{ minWidth: 210, max: 3 }} gap={2}>
      <NumberInput
        label={intl.formatMessage({ id: "ARMOR_CLASS" })}
        min={1}
        step={1}
        value={armorClass}
        onChange={(value) => dispatch(newCharacterActions.setArmorClass(value))}
      />

      <NumberInput
        label={intl.formatMessage({ id: "HITPOINTS" })}
        min={1}
        step={1}
        value={hitpoints}
        onChange={(value) => dispatch(newCharacterActions.setHitpoints(value))}
      />

      <NumberInput
        label={intl.formatMessage({ id: "SPEED" })}
        min={1}
        step={1}
        value={speed}
        onChange={(value) => dispatch(newCharacterActions.setSpeed(value))}
      />

      <Selector
        isDisabled={isLoading || !classes}
        label={intl.formatMessage({ id: "CLASS" })}
        options={(classes ?? []).map((option) => ({
          value: option.id,
          label: option.name,
        }))}
        value={selectedClassId}
        onChange={(classId) => {
          dispatch(newCharacterActions.setClassId(classId));
          dispatch(newCharacterActions.setSubClassId());
        }}
      />

      <Selector
        isDisabled={!subclasses || subclasses.length === 0}
        label={intl.formatMessage({ id: "SUBCLASS" })}
        options={(subclasses ?? []).map((option) => ({
          value: option.id,
          label: option.name,
        }))}
        value={selectedSubClassId}
        onChange={(subClassId) => {
          dispatch(newCharacterActions.setSubClassId(subClassId));
        }}
      />

      <NumberInput
        label={intl.formatMessage({ id: "LEVEL" })}
        min={1}
        step={1}
        max={20}
        value={level}
        onChange={(value) => dispatch(newCharacterActions.setLevel(value))}
      />

      <GridSpan columns="full">
        <ToggleButtonGroup
          type="multiple"
          value={statProficiencies}
          onChange={(newProficiencies) =>
            dispatch(newCharacterActions.setStatProficiencies(newProficiencies as AvailableStats[]))
          }
          label={intl.formatMessage({ id: "SAVING_THROW_PROFICIENCIES" })}
        >
          {(stats ?? []).map((stat) => (
            <ToggleButton key={stat.id} value={stat.id} label={stat.id}>
              {stat.id}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </GridSpan>
    </Grid>
  );
}

export default CharacterBase;
