import { useContext } from "react";

export default function useRequiredContext<T>(Context: React.Context<T>) {
  const value = useContext(Context);

  if (!value) {
    throw new Error("Context Provider missing");
  }

  return value;
}
