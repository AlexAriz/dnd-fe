import type { TablePlugin } from "@astryxdesign/core/Table";
import { useMemo } from "react";

function useTableClick<T extends Record<string, unknown>>(callback: (item: T) => void): TablePlugin<T> {
  return useMemo(
    (): TablePlugin<T> => ({
      transformBodyCell(props, _column, item) {
        return {
          ...props,
          htmlProps: {
            ...props.htmlProps,
            onClick: () => callback(item),
          },
        };
      },
    }),
    [callback],
  );
}

export default useTableClick;
