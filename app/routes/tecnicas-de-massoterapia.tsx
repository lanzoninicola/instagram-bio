import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Service } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ ok: true });
};

export default function MassoterapyTecniqueIndex() {
  const data: Service[] = useLoaderData();

  return <h1>Hello Index World</h1>;
}
