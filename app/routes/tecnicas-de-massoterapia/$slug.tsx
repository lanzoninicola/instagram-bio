import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import SlugPage from "~/components/slug-page/slug-page";
import { getServiceBySlug } from "~/server/entities/biz-services.entities";
import { LoaderResponse, Service } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    return json({ ok: false, status: 500 });
  }

  const serviceData = getServiceBySlug(params.slug);

  if (!serviceData) {
    return json({ ok: false, status: 404 });
  }

  return json({ ok: true, status: 200, payload: serviceData });
};

export default function MaxoteraphySlug() {
  const serviceData: LoaderResponse<Service> = useLoaderData();

  const { status, payload: service } = serviceData;

  if (status > 400) {
    return <h1>Something went wrong</h1>;
  }

  return <SlugPage service={service} />;
}
