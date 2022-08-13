import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CardContent, CardHeader } from "~/components/card";
import CardImage from "~/components/card/card-image/card-image";
import { getServiceBySlug } from "~/services/biz-services-manager.server";
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

export default function TherapyPage() {
  const serviceData: LoaderResponse<Service> = useLoaderData();

  const { status, payload: service } = serviceData;

  if (status > 400) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <CardImage
        serviceImageFilename={service.image}
        serviceName={service.name}
      >
        <CardHeader style="absolute px-8 top-56">{service.name}</CardHeader>
      </CardImage>

      <CardContent
        title={service.cardSubHeader}
        content={service.description}
      />
    </>
  );
}
