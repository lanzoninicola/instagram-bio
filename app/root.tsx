import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./styles/app.css";
import remixImageStyles from "remix-image/remix-image.css";
import { withSentry } from "@sentry/remix";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Ropa+Sans&family=Special+Elite&display=swap",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com/",
    },
    { rel: "stylesheet", href: remixImageStyles },
  ];
}

type LoaderData = {
  GLOBALS: string;
};
export const loader: LoaderFunction = () => {
  return {
    GLOBALS: JSON.stringify({
      SENTRY_DSN: process.env.SENTRY_DSN,
    }),
  };
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function App() {
  const { GLOBALS } = useLoaderData() as LoaderData;
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `window.GLOBALS=${GLOBALS};`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default withSentry(App);
