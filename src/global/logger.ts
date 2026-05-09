import * as Sentry from "@sentry/react";

class Logger {
  static init() {
    if (import.meta.env.MODE === "production") {
      Sentry.init({
        dsn: "https://e59d6b2a1ac3d1d75c49996d2905d4e3@o4511362419458048.ingest.de.sentry.io/4511362426339408",
        enableLogs: true,
        integrations: [Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] })],
      });
    }
  }
}

export default Logger;
