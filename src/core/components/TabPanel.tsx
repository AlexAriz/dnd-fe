import type { PropsWithChildren } from "react";

interface TabPanelProps extends PropsWithChildren {
  value: string;
  currentValue: string;
  className?: string;
}

function TabPanel({ children, value, currentValue, className }: TabPanelProps) {
  return (
    <div hidden={currentValue !== value} role="tabpanel" className={className}>
      {value === currentValue && children}
    </div>
  );
}

export default TabPanel;
