import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import * as Sentry from "@sentry/remix";

/**
 * Setup guide: https://docs.sentry.io/platforms/javascript/guides/remix/
 * DSN for Sentry: https://docs.sentry.io/product/sentry-basics/dsn-explainer/
 *
 * Account Dashboard -> Settings -> Projects -> Select the project -> Client Keys(DSN)
 */
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1,
  integrations: [],
});

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
