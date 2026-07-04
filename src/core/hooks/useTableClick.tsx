import type { TablePlugin } from "@astryxdesign/core/Table";
import { useCallback, useMemo } from "react";

interface UseTableClickConfig<T extends Record<string, unknown>> {
  selectedItem: T | undefined;
  onClickItem: (item: T | undefined) => void;
}
function useTableClick<T extends Record<string, unknown>>(config: UseTableClickConfig<T>): TablePlugin<T> {
  const onClick = useCallback(
    (item: T) => {
      if (item.id === config.selectedItem?.id) {
        config.onClickItem(undefined);
      } else {
        config.onClickItem(item);
      }
    },
    [config],
  );

  return useMemo(
    (): TablePlugin<T> => ({
      transformBodyCell(props, _column, item) {
        return {
          ...props,
          htmlProps: {
            ...props.htmlProps,
            className: (props.htmlProps.className ?? "").concat(
              "hover:cursor-pointer",
              config.selectedItem?.id === item.id ? "bg-(--color-overlay-hover)" : "",
            ),
            onClick: () => onClick(item),
          },
        };
      },
    }),
    [config.selectedItem?.id, onClick],
  );
}

export default useTableClick;
