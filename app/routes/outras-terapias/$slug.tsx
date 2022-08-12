import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getServiceBySlug } from "~/services/biz-services-manager.server";

export const loader: LoaderFunction = async ({ params }) => {
  console.log("im here", params.slug);

  if (!params.slug) {
    return json({ ok: false, status: 500 });
  }

  const serviceData = getServiceBySlug(params.slug);

  if (!serviceData) {
    return json({ ok: false, status: 404 });
  }

  return json({ ok: true, status: 200, payload: serviceData });
};

export default function TherapyPage() {
  const serviceData = useLoaderData();

  return <h1>Hello world</h1>;
}
