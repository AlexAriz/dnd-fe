import Markdown from "Components/Markdown";

interface SpellCardProps {
  spellDetail: string;
}

function SpellCard({ spellDetail }: SpellCardProps) {
  return <Markdown>{spellDetail}</Markdown>;
}

export default SpellCard;
