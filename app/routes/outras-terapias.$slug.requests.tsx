import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  getServiceBySlug,
  getServicesWARequestsByCategorySlug,
} from "~/server/entities/biz-services.entities";
import { LoaderResponse, Service } from "~/types";

// https://remix.run/docs/en/v1/guides/routing#nested-urls-without-nesting-layouts

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    return json({ ok: false, status: 500 });
  }

  const serviceData = getServiceBySlug(params.slug);

  if (!serviceData) {
    return json({ ok: false, status: 404 });
  }

  const { categorySlug } = serviceData;

  const whatsappRequests = getServicesWARequestsByCategorySlug(categorySlug);

  return json({ ok: true, status: 200, payload: whatsappRequests });
};

export default function MassotherapyIndexRequests() {
  const requests: LoaderResponse<Service> = useLoaderData();

  console.log(requests.payload);

  return <div>Hello world</div>;
}
