import { Center } from "@astryxdesign/core/Center";
import { Spinner, type SpinnerProps } from "@astryxdesign/core/Spinner";

function LoadingContent({ size = "xl", ...props }: SpinnerProps) {
  return (
    <Center height="100%">
      <Spinner {...props} size={size} />
    </Center>
  );
}

export default LoadingContent;
