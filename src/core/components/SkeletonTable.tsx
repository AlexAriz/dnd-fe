import { Stack } from "@astryxdesign/core/Stack";
import { Skeleton } from "@astryxdesign/core/Skeleton";

interface SkeletonTableProps {
  rows: number;
  columns: number;
}
function SkeletonTable({ rows, columns }: SkeletonTableProps) {
  return (
    <Stack gap={2}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <Stack gap={2} key={rowIndex} direction="horizontal">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton height="2rem" key={colIndex} index={rowIndex * rows + colIndex} />
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

export default SkeletonTable;
