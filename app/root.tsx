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
    {
      rel: "shortcut icon",
      href: "favicon.ico",
      type: "image/x-icon",
    },
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
  viewport: "width=device-width,initial-scale=1",
  title: "Dioni Mara Yoga & Terapias",
  description:
    "Invista na sua saúde e economize na farmácia. Terapias holisticas no tratamento de doenças. Yoga adultos, crianças, terceira idade, gestantes.",
  keywords:
    "yoga terapias, yoga terapia, yoga pato branco, terapia pato branco, massagem pato branco, massagem relaxante pato branco, massoterapeuta pato branco, yoga gestantes, yoga adultos, yoga crianças",
});

function App() {
  const { GLOBALS } = useLoaderData() as LoaderData;
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="md:bg-green-400  md:flex md:flex-col md:items-center">
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
