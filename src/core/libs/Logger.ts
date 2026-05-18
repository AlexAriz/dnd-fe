import type { ParameterizedString } from "@sentry/core";
import * as Sentry from "@sentry/react";

class Logger {
  static init() {
    if (import.meta.env.MODE === "production") {
      Sentry.init({
        dsn: "https://e59d6b2a1ac3d1d75c49996d2905d4e3@o4511362419458048.ingest.de.sentry.io/4511362426339408",
        enableLogs: true,
      });
    }
  }

  static error(message: ParameterizedString, attributes?: Sentry.Log["attributes"]) {
    Sentry.logger.error(message, attributes);
  }

  static warn(message: ParameterizedString, attributes?: Sentry.Log["attributes"]) {
    Sentry.logger.warn(message, attributes);
  }
}

export default Logger;
