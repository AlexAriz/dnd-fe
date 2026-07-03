import { Markdown } from "@astryxdesign/core/Markdown";

interface SpellCardProps {
  spellDetail: string;
}

function SpellCard({ spellDetail }: SpellCardProps) {
  return (
    <Markdown contentWidth="98%" density="compact">
      {spellDetail}
    </Markdown>
  );
}

export default SpellCard;
