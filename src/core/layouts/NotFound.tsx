import { Icon } from "@astryxdesign/core/Icon";
import { Heading } from "@astryxdesign/core/Heading";
import { useIntl } from "react-intl";

function NotFound() {
  const intl = useIntl();

  return (
    <Heading level={1}>
      <Icon icon="wrench" /> {intl.formatMessage({ id: "PAGE_NOT_FOUND" })}
    </Heading>
  );
}

export default NotFound;
