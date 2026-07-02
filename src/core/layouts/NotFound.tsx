import { Icon } from "@astryxdesign/core/Icon";
import { Heading } from "@astryxdesign/core/Heading";
import { useIntl } from "react-intl";
import { Center } from "@astryxdesign/core/Center";

function NotFound() {
  const intl = useIntl();

  return (
    <Center height="100%">
      <Heading level={1}>
        <Icon icon="wrench" /> {intl.formatMessage({ id: "PAGE_NOT_FOUND" })}
      </Heading>
    </Center>
  );
}

export default NotFound;
