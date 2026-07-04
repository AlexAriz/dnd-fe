import type { PropsWithChildren } from "react";

interface TabPanelProps extends PropsWithChildren {
  value: string;
  currentValue: string;
}

function TabPanel({ children, value, currentValue }: TabPanelProps) {
  return (
    <div hidden={currentValue !== value} role="tabpanel" className="pt-6">
      {value === currentValue && children}
    </div>
  );
}

export default TabPanel;
