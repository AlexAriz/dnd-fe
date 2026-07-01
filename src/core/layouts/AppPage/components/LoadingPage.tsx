import { ProgressBar } from "@astryxdesign/core/ProgressBar";
import { useIntl } from "react-intl";

function LoadingPage() {
  const intl = useIntl();

  return (
    <div className="w-1/2 m-auto h-lvh flex justify-center items-center">
      <ProgressBar isIndeterminate label={intl.formatMessage({ id: "LOADING" })} />
    </div>
  );
}

export default LoadingPage;
