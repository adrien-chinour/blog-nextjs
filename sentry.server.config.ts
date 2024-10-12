// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5f7858103cada86a3ddf8902a928728e@o1133634.ingest.us.sentry.io/4508108863700992",
  tracesSampleRate: 1,
  debug: false,
});
