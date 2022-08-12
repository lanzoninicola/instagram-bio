import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ ok: true });
};

export default function MassoterapyTecniquePage() {
  return <h1>Hello world</h1>;
}
